// 4) შექმენი ობიექტი `person`, რომელსაც ექნება `name` თვისება. `Object.create()`-ის გამოყენებით შექმენი `student`. `Object.getPrototypeOf()`-ის გამოყენებით შეამოწმე, არის თუ არა `student`-ის პროტოტიპი `person`.

const person = {
    name: "Gvanca"
}

const student = Object.create(person)
const isPrototype = Object.getPrototypeOf(student) === person;

console.log(isPrototype);