// 5.შექმენი ორი Symbol: firstName და lastName. გამოიყენე ისინი ობიექტის თვისებებად, შეინახე შესაბამისი მნიშვნელობები და Object.getOwnPropertySymbols()-ის გამოყენებით გამოიტანე ობიექტის ყველა Symbol თვისება.


const firstName = Symbol("firstName");
const LastName = Symbol("LastName");

const user = {
    [firstName]: "Gvanca",
    [LastName]: "Mazanishvili"
}

console.log(Object.getOwnPropertySymbols(user))
console.log(Object.getOwnPropertySymbols(user))