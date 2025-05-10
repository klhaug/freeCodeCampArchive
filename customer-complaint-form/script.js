const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const orderNo = document.getElementById("order-no");
const productCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");
const complaintGroup = document.getElementById("complaints-group");
const complaintDescription = document.getElementById("complaint-description")
const solutionsGroup = document.getElementById("solutions-group");
const solutionsDescription = document.getElementById("solution-description");
const form = document.getElementById("form");
const submitBtn = document.getElementById("submit-btn");

//NAME: Validation and Eventlistener

function validateName(name) {
  if (name.length > 0) {
    return true
  } 
  return false;
}

fullName.addEventListener("change", (e) => {
    if(validateName(e.target.value)){
      fullName.style.borderColor = "green"
    } else {
      fullName.style.borderColor = "red";
    }
  }) 

//EMAIL: Validation and Eventlistener

function validateEmail(email) {
  const emailRegex = /\w+[@]\w+[.]\w+/
  if(email.length > 0){
    return emailRegex.test(email)
  } return false;
}

email.addEventListener("change", (e) => {
  if(validateEmail(e.target.value)){
    email.style.borderColor = "green"
  } else {
    email.style.borderColor = "red"
  }
})

//ORDER: Validation and Eventlistener

function validateOrder(order) {
  if(order.length > 0) {
    const orderRegex = /2024[0-9]{6}/
    return orderRegex.test(order)
  } return false;
}

orderNo.addEventListener("change", (e) => {
  if(validateOrder(e.target.value)){
    orderNo.style.borderColor = "green"
  } else {
    orderNo.style.borderColor = "red";
  };
})

//PRODUCT: Validation and Eventlistener

function validateProductCode(productcode) {
  if(productcode.length === 13) {
    const productRegex = /[a-z]{2}[0-9]{2}-[a-z]{1}[0-9]{3}-[a-z]{2}[0-9]{1}/i;
    return productRegex.test(productcode)
  } return false;
}

productCode.addEventListener("change", (e) => {
  if(validateProductCode(e.target.value)){
    productCode.style.borderColor = "green";
  } else {
    productCode.style.borderColor = "red";
  }
})

//QUANTITY: Validation and Eventlistener

function validateQuantity(quantity){
  if(quantity > 0){
    return true;
  } return false;
}

quantity.addEventListener("change", (e) => {
  if(validateQuantity(e.target.value)){
    quantity.style.borderColor = "green";
  } else {
    quantity.style.borderColor = "red";
  }
})

//COMPLAINTGROUP: Validation and EventlistenerS

function validateComplaintGroup(complaintgroup){
  const t = complaintgroup.getElementsByTagName("input");
  let allCheckboxBooleans = [];
  for (const input of t){
      if(input.checked){
        if(input.value === "other" && complaintDescription.value.length >= 20){
          allCheckboxBooleans.push(true);
        } else if(input.value !== "other" && input.value !== "undefined") {
          allCheckboxBooleans.push(true);
        } else {
          allCheckboxBooleans.push(false);
        }
      } else {
        allCheckboxBooleans.push(false);
      }
    }

  return allCheckboxBooleans.includes(true);
}

complaintGroup.addEventListener("change", (e) => {
  if(validateComplaintGroup(complaintGroup)){
    complaintGroup.style.borderColor = "green";
  } else {
    complaintGroup.style.borderColor = "red";
  }
})

complaintDescription.addEventListener('change', (e) => {
    if(e.target.value.length >= 20){
      complaintDescription.style.borderColor = "green"
    } else {
      complaintDescription.style.borderColor = "red"
    }
  })

//SOLUTIONS: Validation and EventlistenerS

function validateSolutionsGroup(solutionsGroup, solutionsDescription){
  const inputs = solutionsGroup.getElementsByTagName("input");
  let isChecked = false;  
  let isCheckedValue = ''

  for (const input of inputs){
    if(input.checked){
      isChecked = true;
      isCheckedValue = input.value;
    } 
  }

  const isOtherValid = isCheckedValue === "other" && solutionsDescription.value.length >= 20 ? true : false;

  if(isChecked && isCheckedValue !== "other"){
    return isChecked;
  } else if(isOtherValid){
    return isChecked;
  } else {
    return false;
  }
}

solutionsGroup.addEventListener("change", (e) => {
  if(validateSolutionsGroup(solutionsGroup, solutionsDescription)){
    solutionsGroup.style.borderColor = "green";
  } else {
    solutionsGroup.style.borderColor = "red";
  }
})

solutionsDescription.addEventListener('change', (e) => {
    if(e.target.value.length >= 20){
      solutionsDescription.style.borderColor = "green"
    } else {
      solutionsDescription.style.borderColor = "red"
    }
  })



function validateDescription(group, description) {
  const inputs = group.getElementsByTagName("input");
  let isChecked = false;
  let isCheckedValue = '';

  for (const input of inputs){
    if(input.checked){
      isChecked = true;
      isCheckedValue = input.value;
      break;
    }
  };

  if(!isChecked){
    return false;
  }


  if(isCheckedValue !== "other"){
    return true;
  }
  
  const isOtherValid = description.value.length >= 20;
  
  return isOtherValid;

}







function validateForm(){
  const formObject = {
    "full-name": validateName(fullName.value),
    "email": validateEmail(email.value),
    "order-no": validateOrder(orderNo.value),
    "product-code": validateProductCode(productCode.value), 
    "quantity": validateQuantity(quantity.value),
    "complaints-group": validateComplaintGroup(complaintGroup),
    "complaint-description": validateDescription(complaintGroup, complaintDescription),
    "solutions-group": validateSolutionsGroup(solutionsGroup, solutionsDescription),
    "solution-description": validateDescription(solutionsGroup, solutionsDescription),
  }
  return formObject;

}




function isValid(result){
  console.log(result);
  return Object.values(result).every((value) => value === true)
}




form.addEventListener("submit", (e) => {
  const validationResult = validateForm()
  const valid = isValid(validationResult);
  if(!valid){
    e.preventDefault();
    console.log("Error: Form submission prevented")
  } else {
    console.log("Form submission approved")
  }
  })
