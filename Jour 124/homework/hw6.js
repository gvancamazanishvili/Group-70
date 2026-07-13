// 6.შექმენი ხუთი ობიექტისგან შემდგარი Prototype Chain. თითოეულ ობიექტში დაამატე თითო თვისება და ბოლოს ყველაზე ქვედა ობიექტიდან გამოიტანე ყველა თვისება.



const obj1 = {
    name: "Alex"
};

const obj2 = {
    age: 25
};

const obj3 = {
    city: "Tbilisi"
};

const obj4 = {
    color: "blue"
};

const obj5 = {
    Status: "active"
};

Object.setPrototypeOf(obj5, obj4);
Object.setPrototypeOf(obj4, obj3);
Object.setPrototypeOf(obj3, obj2);
Object.setPrototypeOf(obj2, obj1);

console.log(obj5.name)
console.log(obj5.age)
console.log(obj5.city)
console.log(obj5.color)
console.log(obj5.Status)