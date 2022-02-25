const user = {
    id: 2,
    name: "Ashik",
    job: "Programmer"
}
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    name: "Alex Store",
    profit: 30000,
    address: "Rabin Road 7",
    owner: {
        name: "Alex Rayan",
        profession: "Actor",
        age: 37
    },
    products: ["Laptop", 'Mobile', 'Watch', 'Pepsi'],
    isExpensive: false
};
// console.log(shop);
const shopStringified = JSON.stringify(shop)
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted);