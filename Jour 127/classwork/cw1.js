// 1) შექმენი Array `numbers`, რომელშიც იქნება 5 რიცხვი. შექმენი მისი Iterator `Symbol.iterator`-ის გამოყენებით და `next()`-ის საშუალებით გამოიტანე ყველა ელემენტი სათითაოდ.


const numbers = [4, 5, 7, 8, 1];

const iterator = numbers[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


