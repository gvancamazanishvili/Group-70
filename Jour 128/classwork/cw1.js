// 1) შექმენი Generator, რომელიც yield-ით დააბრუნებს 3 ქალაქს. გამოიძახე next() ოთხჯერ და დააკვირდი done-ის მნიშვნელობას.


function* cities(){
    yield "Rustavi"
    yield "Tbilisi"
    yield "Batumi"
}


const Generator = cities();


console.log(Generator.next());
console.log(Generator.next());
console.log(Generator.next());
console.log(Generator.next());
