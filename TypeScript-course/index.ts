type Pizza = {
    name: string;
    price: number;
}

type Order = {
    orderId: number
    pizza: Pizza
    status: "ordered" | "completed"
}



const menu = [
    {name: "Margherita", price: 8},
    {name: "Pepperoni", price: 10},
    {name: "Hawaiian", price: 10},
    {name: "Veggie", price: 9}
]


let cashInRegister: number = 100;
let nextOrderId: number = 1;
const orderHistory: Order[] = [];

const addNewPizza = (pizzaObj: Pizza) => menu.push(pizzaObj);
const placeOrder = (pizzaName: string) => {
    const orderedPizza = menu.find((pizza) => pizza.name === pizzaName)
    if(!orderedPizza){
        console.error(`${pizzaName} does not exist in the menu`);
        return;
    }
    cashInRegister += orderedPizza.price;
    const orderObj: Order = {pizza: orderedPizza, status: "ordered", orderId: nextOrderId++}
    orderHistory.push(orderObj);
    return orderObj
}

const completeOrder = (orderId: number) => {
    const selectedOrder = orderHistory.find((order) => order.orderId === orderId);
    if(!selectedOrder){
        console.error(`${orderId} is not a valid order`)
        return;
    }
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
console.log("Order Queue", orderHistory);




// NOT PART OF APP

let myName: string = "Kristian";
const myName2 = "Bob"

type User = {
    username: string
    role: "guest" | "member" | "admin"
}
type UserRole = "guest" | "member" | "admin"
let userRole: UserRole = "admin"

let numberOfWheels: number = 4;
let isStudent: boolean = false;
let ages: number[]  = [100, 101]

type Address =  {
    street: string
    city: string
    country: string
}

type Person = {
	name: string
	age: number
	isStudent: boolean
    address?: Address
}

let person1: Person = {
    name: "Kristian",
    age: 28,
    isStudent: false,
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

let people: Person[] = [person1, person2];
