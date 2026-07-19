// 8) შექმენი ობიექტი `computer`, რომელსაც ექნება `cpu`, `ram` და `storage`. გამოიყენე `hasOwnProperty()` და შეამოწმე, აქვს თუ არა `ram`, `gpu` და `storage`.


const computer = {
    cpu: "123123",
    ram: 16, 
    storage: 500
}

console.log(computer.hasOwnProperty("cpu"));
console.log(computer.hasOwnProperty("ram"));
console.log(computer.hasOwnProperty("storage"));