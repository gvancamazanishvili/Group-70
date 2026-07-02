// 1) call() გამოიყენე ისე, რომ შედეგი იყოს: "Hello, my name is Gio and I live in Tbilisi"

const person = {
    name: "Gio"
};

function sayHello(city) {
    console.log(`Hello, my name is ${this.name} and i live in ${city}`)
}


sayHello.call(person, "Rustavi")
