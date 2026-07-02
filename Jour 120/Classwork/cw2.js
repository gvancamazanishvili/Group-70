// 2)call()-ის გამოყენებით დაბეჭდე:
// Nika is 18 years old.

const student = {
    name: "Nika",
    age: 18
};
function info() {
    console.log(`${this.name} is ${this.age} old.`)
}

info.call(student)