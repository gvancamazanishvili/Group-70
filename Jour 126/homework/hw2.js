// 2) შექმენი სამი განსხვავებული Symbol და გამოიყენე ისინი ობიექტის თვისებებად. თითოეულ Symbol-ს მიანიჭე განსხვავებული მნიშვნელობა და გამოიტანე ყველა მნიშვნელობა.


const name  = Symbol("name");
const username = Symbol("username:" );
const age = Symbol("age");

const acc = {
    [name]: "Gvanca",
    [username]: "Mazanishvili", 
    [age]: 16
}

console.log(acc[name])
console.log(acc[username])
console.log(acc[age])