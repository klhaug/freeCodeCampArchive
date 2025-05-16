// TYPES 🟢

type Pizza = {
    id: number;
    name: string;
    price: number;
}

type Order = {
    orderId: number
    pizza: Pizza
    status: "ordered" | "completed"
}

let cashInRegister: number = 100;
let nextOrderId: number = 1;
let id: number = 1
const orderHistory: Order[] = [];

const menu: Pizza[] = [
    {id: id++, name: "Margherita", price: 8},
    {id: id++, name: "Pepperoni", price: 10},
    {id: id++, name: "Hawaiian", price: 10},
    {id: id++, name: "Veggie", price: 9}
]

// TYPES END 🔴

// FUNCTIONS 🟢

function addNewPizza(pizzaObj: Pizza): void {
    pizzaObj.id = id++
    menu.push(pizzaObj);
}
function placeOrder(pizzaName: string): Order | undefined {
    const orderedPizza = menu.find((pizza) => pizza.name === pizzaName);
    if (!orderedPizza) {
        console.error(`${pizzaName} does not exist in the menu`);
        return;
    }
    cashInRegister += orderedPizza.price;
    const orderObj: Order = { pizza: orderedPizza, status: "ordered", orderId: nextOrderId++ };
    orderHistory.push(orderObj);
    return orderObj;
}
function completeOrder(orderId: number): Order | undefined {
    const selectedOrder = orderHistory.find((order) => order.orderId === orderId);
    if (!selectedOrder) {
        console.error(`${orderId} is not a valid order`);
        return;
    }
    selectedOrder.status = "completed";
    return selectedOrder;
}
function getPizzaDetail(pizzaIdentifier: string | number ): Pizza | undefined {
    if(typeof pizzaIdentifier === "string") {
        return menu.find((pizza) => pizza.name === pizzaIdentifier)
    } else if ( typeof pizzaIdentifier === "number") {
        return menu.find((pizza) => pizza.id === pizzaIdentifier)
    } else {
        throw new TypeError("Parameter 'identifier' must be either a string or a number")
    }
}

// FUNCTIONS END 🔴


addNewPizza({name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({name: "BBQ Chicken", price: 12 });
addNewPizza({name: "Spicy Sausage", price: 11 });

placeOrder("BBQ Chicken");
completeOrder(1);

// console.log(getPizzaDetail(2))
console.log("Menu", menu);
// console.log("Cash in register", cashInRegister);
// console.log("Order Queue", orderHistory);




// NOT PART OF APP

let myName: string = "Kristian";
const myName2 = "Bob"

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


type User = {
    id: number;
    username: string
    role: UserRole;
}
type UserRole = "guest" | "member" | "admin";

const users: User[] = [
    {
        id: 1,
        username: "Kristian",
        role: "admin"
    },
    {
        id: 2,
        username: "Anniken",
        role: "guest"
    },
    {
        id: 3,
        username: "Louis",
        role: "member"
    }
]


function fetchuserDetails(username: string): User {
    const user = users.find((user) => user.username === username)
    if(!user){
        throw new Error(`User with username ${username} not found`)
    } 
    return user;
}

function updateUser(id: number, updates: any){
    const user = users.find((user) => user.id === id)
    console.log(user)
    const returned = Object.assign(user, updates)
    return = returned={}

}

updateUser(1, {username: "new_john_doe"});
updateUser(4, {username: "new_john_doe"});



console.log(users)


