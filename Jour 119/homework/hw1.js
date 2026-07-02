// დაწერეთ, რა მოხდება კოდის გაშვებისას (რა დაიბეჭდება ან რა შეცდომა გამოვა).
// დეტალურად ახსენით, რატომ მოხდა ეს (რომელი კონცეფციის ბრალია: Hoisting-ის თუ TDZ-ის და კონკრეტულად რამ გამოიწვია შეცდომა).

// 1)  // გამოიტანს რადგან ეს არის Hoisting-ის მაგალითი 
greetUser();

function greetUser() {
    console.log("Welcome back!");
}   

// 2) ეს გამოიტანს Reference Errors-ს რადგან ცვლადი მოხდება TDZ-ში 

let count = 5;

function startCounter() {
    if (true) {
        console.log(count);
        let count = 10;
    }
}
startCounter();

// 3)  ეს არის TDZ-ის მაგალითი
function checkValue() {
    if (true) {
        var isReady = true;
    }
    console.log(isReady);
}
checkValue();

// 4)  ეს არის TDZ-ის მაგალითი
function mixedHosting() {
    console.log(a);
    console.log(b);
    var a = 1;
    let b = 2;
}
mixedHosting();

// 5) ეს არის TDZ-ის  მაგალითი 

function testShadowing() {
    var x = 10;
    if (true) {
        console.log(x);
        let x = 20;
    }
}
testShadowing();