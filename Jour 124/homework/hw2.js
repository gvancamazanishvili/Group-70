// 2.შექმენი ოთხი ობიექტისგან შემდგარი Prototype Chain. თითოეულ ობიექტში დაამატე თითო-თითო განსხვავებული თვისება და ბოლოს ყველაზე ქვედა ობიექტიდან გამოიტანე ოთხივე თვისება.



const name = {
    name: "Gvanca"
}

const age = { 
    age: 16
}
const country = {
    country: "Georgia"
}
const city = {
    city: "Rustavi"
}


Object.setPrototypeOf(city, country)
Object.setPrototypeOf(country, age)
Object.setPrototypeOf(age, name);


console.log(city.name)
console.log(city.age)
console.log(city.country)
console.log(city.city)