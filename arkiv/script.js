// MASK EMAIL FUNCTION

function maskEmail(email){

    if(email.includes("@" && ".")){
        let standardizedEmail = email.trim().toLowerCase();
        let alphaIndex = standardizedEmail.indexOf("@");
        let toBeMasked = standardizedEmail.slice(1, alphaIndex-1);
        let maskedEmail = standardizedEmail.replace(toBeMasked, "*".repeat(toBeMasked.length))
        
        return maskedEmail;

    } else {
        return "Error: Invalid email"
    }
  };
//console.log(maskEmail("    kRisTian@gmail.cOm"));

// EASY TODO APP
const personalTodo = [];
const professionalTodo = [];

function addTodo(list,task, priority, due) {
    list.push({
        task: task.toLowerCase(),
        priority: priority,
        due: due.toLowerCase()
    })
}

addTodo(personalTodo, "Walk the dog", 1, "Today");
addTodo(personalTodo,"Take out trash", 1, "Tomorrow");
addTodo(personalTodo,"Clean the pipes", 3, "Someday");
addTodo(personalTodo,"Cat litter", 3, "Today");
addTodo(personalTodo,"Make dinner", 1, "");
addTodo(personalTodo,"Buy groceries", 3, "Today");

addTodo(professionalTodo,"Be awesome", 3, "Today");
addTodo(professionalTodo,"Earn money", 3, "Tomorrow");
addTodo(professionalTodo,"Be awesome", 3, "Someday");
addTodo(professionalTodo,"Be awesome", 3, "Someday");

function filterDueDate(list, due) {
    const filteredList = list.filter((todo) => todo.due === due)
    return filteredList;
} 

function filterPriority(list, priority) {
    const filteredList = list.filter((todo) => todo.priority === priority)
    return filteredList;
}

let todaysTasks = filterDueDate(personalTodo, "today");
let todaysMostImportant = filterPriority(todaysTasks, 1)

//console.log("Todays most important task: ".concat(todaysMostImportant.length > 0 ? todaysMostImportant[0].task[0].toUpperCase() + todaysMostImportant[0].task.slice(1, todaysMostImportant[0].task.length) : "There are no priority 1 tasks today"))
// console.log(filterDueDate(professionalTodo, "tomorrow"))


//EASY ENCRYPTION MSG HAHA

let myEncryption = "";

function encryptedMsg(msg){
    myEncryption = msg.split("").reverse().join("");
}

encryptedMsg("Encrypt this message for me, haha you'll never know what I'm saying")

//console.log(myEncryption);

const myDecodedMessage = myEncryption.split("").reverse().join("");
//console.log(myDecodedMessage);

const myNewArr = [1, 4, 2, 5];
const returnValue = myNewArr.splice(2, 1);
//console.log(returnValue, myNewArr)

// PRIMITIVE
let myFirstData = 1;
let mySecondData = myFirstData;
myFirstData++
//console.log(myFirstData, mySecondData)

// NON-PRIMITVE
//Forskjellen ligger i at man refererer, ikke lagrer en ny uavhengig kopi som i primitve
const myObject = {name: "Kristian", age: 28};
const copiedObject = myObject;

myObject.name="åge"

console.log(myObject, copiedObject);


function getAverageRating(ratings) {
    const totalValue = ratings.reduce((accumulator, currentvalue) => accumulator + currentvalue);
    const averageRating = totalValue / ratings.length;
    return averageRating;
  }

  console.log(getAverageRating([2,5,2,1,54,2,4,8,10]))


  function getVowelCount(sentence) {
    for (const char of sentence) {
        console.log(char);
    }
  }
  getVowelCount("Hello")

  function getWordCount(sentence){
    if(sentence.trim() === "") {
        return 0
    } else {
        return sentence.trim().split(/\s+/).length;
    }
  }

  const fruit = {
    name: 'apple',
    color: 'red',
    price: 0.99
  };
  
  for (const prop in fruit) {
    console.log(prop);
  }


  console.log(getWordCount(" gello yello bryh  "))


let count = 0;
const testArray = ["Img1", "Img2", "Img3", "Img4"]

function incrementCount() {
    if(count <= 2) {
        count++
    } else {
        count = 0;
    }
}
function decrementCount(){
    if(count > 0) {
        count--
    } else if (count === 0) {
        count = 3
    }
}
function clickNextImg() {
    incrementCount()
    console.log(testArray[count])
}
function clickLastImg(){
    decrementCount()
    console.log(testArray[count]);
}
clickNextImg()
console.log(count)

function createCounter(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

const counter = createCounter();
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())


//Inventory Management Program
const inventory = [
    {
      name: 'tst',
      quantity: 1
    },
    {
      name: 'tst',
      quantity: 1
    },
    {
      name: 'tstt',
      quantity: 1
    },
    {
      name: 'flour',
      quantity: 2
    },
    {
      name: 'tst',
      quantity: 1
    },
  ];
  
  function findProductIndex(name){
    if(name.trim().length > 0) {
      const productName = name.toLowerCase();
      let index = [];
      for(let i=0; i < inventory.length; i++){
        if(inventory[i].name === productName){
          index.push(i)
        };
      };
      return index.length > 0 ? index[0] : index = -1;
  
    } else {
      return "Error: Enter valid name"
    }
  }
  
  function addProduct(product){
    if (typeof product === "object") {
      const productIndex = findProductIndex(product.name)
      if(productIndex !== -1) {
        inventory[productIndex].quantity += product.quantity;
        console.log(`${product.name} quantity updatet`);
      } else {
        inventory.push(product)
        console.log(`${product.name} added to the inventory`)
      }
    } else {
      console.log("Error: Enter valid object");
    }
  
  
  }
  
  function removeProduct(name, quantity) {
    const productIndex = findProductIndex(name);
    if(productIndex !== -1) {
      const inventoryQuantity = inventory[productIndex].quantity;
      if (inventoryQuantity - quantity > 0) {
        inventory[productIndex].quantity -= quantity;
        console.log(
          `Remaining ${inventory[productIndex].name} pieces: ${inventory[productIndex].quantity}`
          )  
      }
      else if (inventoryQuantity - quantity === 0) {
        console.log("Working")
      }
      else if (inventoryQuantity - quantity < 0) {
  
      }
    } 
  
  }
  
  
  //findProductIndex()
  //addProduct()
  removeProduct("flour", 1)


  function generatePassword(lengthOfPassword) {
    if (typeof lengthOfPassword === "number") {
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
      const largeCharReg = /[A-Z]/g;
      const smallCharReg = /[a-z]/g;
      const numberReg = /[\d]/g;
      const symbolReg = /[\W]/g;
  
      const largeChars = characters.match(largeCharReg);
      const smallChars = characters.match(smallCharReg);
      const numbers = characters.match(numberReg);
      const symbols = characters.match(symbolReg);
  
      const characterArray = [largeChars, smallChars, numbers, symbols];
      let newPassword = '';
  
      for (let i = 0; i < lengthOfPassword; i++) {
        let randomIndexZero = Math.floor(Math.random() * 4);
        let randomIndexOne = Math.floor(Math.random() * characterArray[randomIndexZero].length);
        newPassword += characterArray[randomIndexZero][randomIndexOne];
      }
      return newPassword;
    } else {
      return "Error: Not a number";
    }
  }

  console.time("PasswordGeneration");
  const password = generatePassword(8);
  console.timeEnd("PasswordGeneration");
  console.log(password)



  function myOwnCalculator(num1, num2, action){
    if(action === "add"){
      return num1 + num2
    } else if (action === "subtract") {
      return num1 - num2
    } else if (action === "divide"){
      return num1 / num2
    } else if (action === "multiply") {
      return num1 * num2
    } else {
      return "Error: Invalid input"
    }
  }

  console.log(myOwnCalculator(3, 5, "subtract"))

const heading1 = document.querySelector("h1");
const button = document.querySelectorAll("button").forEach((button) => button.addEventListener("click", handleClick) );
const calculation = [];
let typing; 

function handleClick(event){
  const input = event.target.value;
  if(input === "+" || input === "/" || input === "-") {
    heading1.innerHTML +=(input)
    calculation.push(typing)
    typing = null;
    calculation.push(input)
    console.log(`${typeof input} added to calculation. Entire calculation: ${calculation}`)
  } else {
    const numberInput = parseFloat(input)
    heading1.innerHTML +=(numberInput)
    typing += numberInput;
    console.log(typeof numberInput)
    console.log(`${typeof numberInput} added to calculation. Entire calculation: ${calculation}`)
  }
}



const myMaterialShoppingCart = [
  {
    type: "30x48",
    length: 300,
    quantity: 4
  },
  {
    type: "30x48",
    length: 125,
    quantity: 2
  },
  {
    type: "30x48",
    length: 25,
    quantity: 8
  }
]

const testPlank = {
  type: "30x48",
  length: 1028,
  quantity: 1
}

//Bør legge til en type-sjekker også. 


function isLongEnough(plank){
  const plankLength = plank.length;
  const filteredArray = myMaterialShoppingCart.filter(({length}) => length < plankLength)
  if(filteredArray.length > 0) {
    return true
  }
}

function getAmountOfCuts(plank){
  if(isLongEnough(plank)){
    try {
      let plankLength = plank.length;
      const myCuts = []
      myMaterialShoppingCart.map((material) => {
        for(let i = 0; i < material.quantity; i++){
          if(plankLength > material.length) {
            myCuts.push({
              length: material.length,
              quantity: +1
            })
            plankLength -= material.length;
          }
        }
      })
      const returnMsg = [myCuts, `Leftover: ${plankLength}`]
      return returnMsg;

    } catch (error) {
      
    }
  }
}

console.log(isLongEnough(testPlank))
console.log(getAmountOfCuts(testPlank))


console.log(myMaterialShoppingCart);



