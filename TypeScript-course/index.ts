const menu = [
    {name: "Margherita", price: 8},
    {name: "Pepperoni", price: 10},
    {name: "Hawaiian", price: 10},
    {name: "Veggie", price: 9}
]

let cashInRegister = 100;
let nextOrderId = 1;
const orderQuee = [];

const addNewPizza = (pizzaObj) => menu.push(pizzaObj);
const placeOrder = (pizzaName) => {
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

const completeOrder = (orderId) => {
    const selectedOrder = orderQuee.find((order) => order.orderId === orderId);
    selectedOrder.status = "completed";
    return selectedOrder;
}

addNewPizza({ name: "Chicken Bacon Ranch", cost: 12 });
addNewPizza({ name: "BBQ Chicken", cost: 12 });
addNewPizza({ name: "Spicy Sausage", cost: 11 });

placeOrder("BBQ Chicken");
completeOrder(1);

console.log("Menu", menu);
console.log("Cash in register", cashInRegister);
console.log("Order Queue", orderQuee);

  