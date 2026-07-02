// დაწერეთ, რა მოხდება კოდის გაშვებისას (რა დაიბეჭდება ან რა შეცდომა გამოვა).
// დეტალურად ახსენით, რატომ მოხდა ეს (რომელი კონცეფციის ბრალია: Hoisting-ის 
// თუ TDZ-ის და კონკრეტულად რამ გამოიწვია შეცდომა).

// 1
// ეს კოდი გამოიტანს Error-ს რადგან let-ის შედგენილი ცვლადი მოხვდება TDZ-ში,
//  ეს იმიტომ რომ იგი დაკონსოლებულია მის შექმნამდე 
function checkUser() {
    console.log(role);
    let role = "Admin";
}
checkUser();

// 2
// ეს არ გამოიტანს Error-ს ვინაიდან იგი დაკონსოლებულია ისეთი 
// ცვლადი რომელიც შექმნილია var keyword-ის გამოყენებით  
function calculate() {
    console.log(points);
    var points = 100;
}
calculate();

// 3
// ეს გამოიტანს Reference Error-ს, რადგან ცვლაფი 
// შექმნილი გვაქვს const keyword-ით 
function process() {
    console.log(status);
    const status = "active";
}
process();


// 4
//  გამოიტანს  Reference Error-ს scope-ის გამო 
let city = "Tbilisi";

function showCity() {
    console.log(city);
    let city = "Batumi";
}
showCity();

// 5
// გამოიტანს Error-ს
function getDiscount() {
    if (true) {
        console.log(percent);
        let percent = 20;
    }
}
getDiscount();