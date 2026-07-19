// 1) შექმენი Symbol `secretCode`. შექმენი ობიექტი `account`, რომელსაც ექნება `username` და Symbol-ით შექმნილი თვისება. შეინახე საიდუმლო კოდი და გამოიტანე მისი მნიშვნელობა.


const code  = Symbol("sectetCode");

const account = {
    username: "gvanca", 
    [code]: 23456789
}

console.log(account[code])