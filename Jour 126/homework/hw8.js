// 8) შექმენი ობიექტი `settings`, რომელსაც ექნება ორი Symbol-ის თვისება. `Object.getOwnPropertySymbols()`-ის გამოყენებით მიიღე ორივე Symbol, შემდეგ ამ Symbol-ების გამოყენებით გამოიტანე მათი მნიშვნელობები.


const theme = Symbol("Theme");
const power = Symbol("Power")
const settings = {
    [theme]: "Dark", 
    [power]: "On"
}

console.log(settings[theme]);
console.log(settings[power]);