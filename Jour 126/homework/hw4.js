// 4) შექმენი ობიექტი `game`, რომელსაც ექნება ჩვეულებრივი თვისება `title` და Symbol-ის თვისება `score`. გამოიყენე `Object.keys()` და `Object.getOwnPropertySymbols()` და შეადარე მიღებული შედეგები.


const score = Symbol("Score");

const game = {
    title: "GTA6",
    [score]: 1000000
}

const keys = Object.keys(game);
const propertySymbol = Object.getOwnPropertySymbols(game);


console.log(keys === propertySymbol);