//task 5
let orders = [
    {Id: 101, customer: "Alice", total: 300},
    {Id: 102, customer: "Bob", total: 450},
    {Id: 103, customer: "Charlie", total: 200}
];

function findOrder(orders, orderId){
    return orders.find(order => order.Id === orderId);
}

console.log(findOrder(orders, 102));

// task 6
let inventory = {
    items: [],
    addItem(name, quantity) {
        this.items.push({ name, quantity });
    },
    removeLastItem() {
        this.items.pop();
    },
    removeFirstItem() {
        this.items.shift();
    }
};

inventory.addItem("monitor", 5);
inventory.addItem("keyboard", 10);
console.log(JSON.stringify(inventory.items));
inventory.removeLastItem();
console.log(JSON.stringify(inventory.items));
inventory.removeFirstItem();
console.log(JSON.stringify(inventory.items));

//task 7
let employee = [
    { name: "Alice", position: "Developer", salary: 70000 },
    { name: "Bob", position: "Designer", salary: 60000 },
    { name: "Charlie", position: "Manager", salary: 90000 },
];

function findEmployee(employees, name) {
    return employees.find(employee => employee.name.toLowerCase() === name.toLowerCase());
}

console.log(findEmployee(employee, "Bob"));


//task 8
let orders1 = [{id: 1, customer: "Alice"}, {id: 2, customer: "bob"}];
let orders2 = [{Iid: 1, customer: "Charlie"},{Iid: 1, customer: "David"}];
function mergeOrders(orderA, orderB){
    return[...orderA, ...orderB];

};
console.log(mergeOrders(orders1, orders2))


// extra 
let employees = {name:"Alice", position: "Developer", salary:7000}
console.log(`${employees.name} is a ${employees.position} and makes $${employees.salary}`)