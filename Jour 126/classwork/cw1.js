// 1.შექმენი ორი Symbol: id და email. შექმენი ობიექტი user და Symbol-ები გამოიყენე თვისებების სახელებად. შეინახე ორივე Symbol-ის ქვეშ განსხვავებული მნიშვნელობა და გამოიტანე ორივე მნიშვნელობა კონსოლში.



const symbol1  = Symbol("id");
const symbol2  = Symbol("email");

const user = {
    [symbol1]: "1928703121", 
    [symbol2]: "mazana@gmail.com"
}

console.log(user[symbol1])
console.log(user[symbol2])