const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const orderNo = document.getElementById("order-no");
const productCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");
const complaintGroup = document.getElementById("complaints-group");

const submitBtn = document.getElementById("submit-btn")

function validateName(name) {
  if (name.length > 0) {
    return true
  } 
  return false;
}

function validateEmail(email) {
  const emailRegex = /\w+[@]\w+[.]\w+/
  if(email.length > 0){
    return emailRegex.test(email)
  } return false;
}

function validateOrder(order) {
  if(order.length > 0) {
    const orderRegex = /2024[0-9]{6}/
    return orderRegex.test(order)
  } return false;
}

function validateProductCode(productcode) {
  if(productcode.length === 13) {
    const productRegex = /[a-z]{2}[0-9]{2}-[a-z]{1}[0-9]{3}-[a-z]{2}[0-9]{1}/i;
    return productRegex.test(productcode)
  } return false;
}

function validateQuantity(quantity){
  if(quantity > 0){
    return true;
  } return false;
}

function validateComplaintGroup(complaintgroup){
  const t = complaintgroup.getElementsByTagName("input");
  for (const input of t){
      if(input.checked){
        return input.checked
      }
    }
  }




function validateForm(){
  const formObject = {
    "full-name": validateName(fullName.value),
    "email": validateEmail(email.value),
    "order-no": validateOrder(orderNo.value),
    "product-code": validateProductCode(productCode.value), 
    "quantity": validateQuantity(quantity.value),
    "complaints-group": validateComplaintGroup(complaintGroup)
  }
  console.log(formObject);
}



submitBtn.addEventListener("click",validateForm)