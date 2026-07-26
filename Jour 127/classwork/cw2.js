// 2) შექმენი String `"JavaScript"`. შექმენი მისი Iterator და `next()`-ის გამოყენებით გამოიტანე პირველი 3 სიმბოლო.

const word   = "JavaScript"

const iterator = word[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());