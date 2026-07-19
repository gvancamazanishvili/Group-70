// 5) შექმენი ობიექტი `product`, რომელსაც ექნება ორი Symbol-ის თვისება: ერთი შეინახავს ფასს, მეორე კი რაოდენობას. გამოითვალე და გამოიტანე ორივე მნიშვნელობის ნამრავლი.


const price = Symbol("price");
const count = Symbol("count")

const product = {
    [price]: 800,
    [count]: 121
}


console.log(product[price] * product[count])