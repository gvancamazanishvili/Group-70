// 2) შექმენი ობიექტი `phone`, რომელსაც ექნება `brand`, `model` და `year`. `in` ოპერატორის გამოყენებით შეამოწმე, არსებობს თუ არა `model`, `color` და `brand`.

const phone = {
    brand: "Iphone",
    model: "16 pro max",
    year: 2024
}


console.log("brand" in phone);
console.log("model" in phone);
console.log("color" in phone);
