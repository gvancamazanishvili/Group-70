// 5) შექმენი ობიექტი `shape`, რომელსაც ექნება `type: "Shape"`. მისგან `Object.create()`-ის გამოყენებით შექმენი `circle` და `Object.getPrototypeOf()`-ით შეამოწმე მათი კავშირი.

const shape = {
    type: "Shape"
}


const circle = Object.create(shape);
const isPrototype = Object.getPrototypeOf(circle);

console.log(isPrototype);