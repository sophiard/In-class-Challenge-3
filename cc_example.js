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