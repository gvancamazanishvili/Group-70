// 6) შექმენი კლასები `Animal` და `Cat extends Animal`. შექმენი `Cat`-ის ობიექტი და `instanceof`-ის გამოყენებით შეამოწმე:
//    - `cat instanceof Cat`
//    - `cat instanceof Animal`
//    - `cat instanceof Object`

class Animal{}


class Cat extends Animal{}


console.log(Cat instanceof Cat)
console.log(Cat instanceof Animal)
console.log(Cat instanceof Object)