// 1) შექმენი ორი ობიექტი: person1 (Nika, 10) და person2 (Ana, 12). დაწერე ერთი introduce(city) ფუნქცია და call()-ის გამოყენებით დაბეჭდე ორივე ადამიანის სრული ინფორმაცია სხვადასხვა ქალაქით.


const person1 = {
    name: "Nika",
    age: 10
}


const person2 ={
    name: "Ana",
    age: 12
}

function introduce (city){
    console.log(`${this.name}, ${this.age}, ${city}`)
}

introduce.call(person1, "Rustavi");
introduce.call(person2, "Tbilisi");

