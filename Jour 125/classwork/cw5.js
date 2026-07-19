// 5) შექმენი კლასები `Vehicle` და `Car extends Vehicle`. შექმენი `Car`-ის ობიექტი და `instanceof`-ის გამოყენებით შეამოწმე:
//    - `car instanceof Car`
//    - `car instanceof Vehicle`
//    - `car instanceof Object`

class Vehicle{}

class Car extends Vehicle{}

const car = new Car();

console.log(car instanceof Car)
console.log(car instanceof Vehicle)
console.log(car instanceof Object)
