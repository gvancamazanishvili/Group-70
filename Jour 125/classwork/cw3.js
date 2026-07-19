// 3) შექმენი ობიექტი `person`, რომელსაც ექნება `sayHello()` მეთოდი. `Object.create()`-ის გამოყენებით შექმენი ახალი ობიექტი და გამოიძახე `sayHello()`.


const person = {
    sayHello(){
        console.log("Hello!!")
    }
}


const newPerson = Object.create(person);


newPerson.sayHello();