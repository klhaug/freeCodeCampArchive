type Pizza = {
    name: string;
    price: number;
}


const menu = [
    {name: "Margherita", price: 8},
    {name: "Pepperoni", price: 10},
    {name: "Hawaiian", price: 10},
    {name: "Veggie", price: 9}
]


let cashInRegister: number = 100;
let nextOrderId: number = 1;
const orderQuee = [];

const addNewPizza = (pizzaObj: Pizza) => menu.push(pizzaObj);
const placeOrder = (pizzaName: string) => {
    const orderedPizza = menu.find((pizza) => pizza.name === pizzaName)
    if(!orderedPizza){
        console.error(`${pizzaName} does not exist in the menu`);
        return;
    }
    cashInRegister += orderedPizza.price;
    const orderObj = {pizza: orderedPizza, status: "ordered", orderId: nextOrderId++}
    orderQuee.push(orderObj);
    return orderObj
}

const completeOrder = (orderId: number) => {
    const selectedOrder = orderQuee.find((order) => order.orderId === orderId);
    selectedOrder.status = "completed";
    return selectedOrder;
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 11 });

placeOrder("BBQ Chicken");
completeOrder(1);

console.log("Menu", menu);
console.log("Cash in register", cashInRegister);
console.log("Order Queue", orderQuee);




// NOT PART OF APP

let myName: string = "Kristian";
let numberOfWheels: number = 4;
let isStudent: boolean = false;

type Address =  {
    street: string
    city: string
    country: string
}

type Person = {
	name: string
	age: number
	isStudent: boolean
    address: Address
}

let person1: Person = {
    name: "Kristian",
    age: 28,
    isStudent: false,
    address: {
        street: "Rotvegen 2",
        city: "Raufoss",
        country: "Norway"
    }
}

let person2: Person = {
    name: "Anniken",
    age: 31,
    isStudent: false,
    address: {
        street: "Rotvegen 2",
        city: "Raufoss",
        country: "Norway"
    }
}

