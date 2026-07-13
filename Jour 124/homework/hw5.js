// 5.შექმენი ორი ობიექტი და Prototype-ის საშუალებით დააკავშირე ერთმანეთთან. პირველ ობიექტში დაამატე სამი თვისება, ხოლო მეორე ობიექტში ერთი თვისება. გამოიტანე მეორე ობიექტიდან ოთხივე ინფორმაცია.


const person = {
    name: "Gvanca", 
    age: 16, 
    grade: 11
}
const lastname = {
    lastname: "Mazanishvili"
}


Object.setPrototypeOf(person, lastname)

console.log(person.age)
console.log(person.name)
console.log(person.grade)
console.log(person.lastname)