// 9) შექმენი ობიექტი `car`, რომელსაც ექნება `brand`, `model` და `speed`. `in` ოპერატორის გამოყენებით შეამოწმე, არსებობს თუ არა `speed`, `engine` და `model`.


const car = {
    brand: "lamborghini", 
    model: "Aventador", 
    speed: "200k/hm" 
}


console.log("speed" in car);
console.log("model" in car);
console.log("engine" in car);