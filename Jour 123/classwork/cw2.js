// 2) ექმენი div, რომლის შიგნით იქნება 5 ღილაკი.
// click ივენთი დაუმატე მხოლოდ container-ს.
// როდესაც რომელიმე ღილაკზე დააჭერ, კონსოლში გამოიტანე:
// Button 3 clicked
// (უნდა გამოჩნდეს იმ ღილაკის ტექსტი, რომელსაც დააჭირე.)


const div = document.getElementById("parent");

div.addEventListener("click",  () => {
    console.log(event.target.textContent);
})