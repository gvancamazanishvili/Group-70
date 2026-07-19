// 7) შექმენი კლასები `Employee` და `Manager extends Employee`. შექმენი `Manager`-ის ობიექტი და `instanceof`-ის გამოყენებით შეამოწმე:
//    - `manager instanceof Manager`
//    - `manager instanceof Employee`
//    - `manager instanceof Object`


class Employee{}


class Manager extends Employee{}


console.log(Employee instanceof Manager)
console.log(Employee instanceof Employee)
console.log(Employee instanceof Object)