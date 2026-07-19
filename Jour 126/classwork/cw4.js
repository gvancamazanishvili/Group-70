// 4.შექმენი ობიექტი product, რომელსაც ექნება ჩვეულებრივი თვისება name და Symbol-ის თვისება price. გამოიყენე Object.keys() და Object.getOwnPropertySymbols() და დააკვირდი განსხვავებას.


const Price = Symbol("price")

const product = {
    name: "Gvanca", 
    [Price]: 1213
}

console.log(Object.keys(product))
console.log(Object.getOwnPropertySymbols(product))