// 2) შექმენი სამი ელემენტი: div#outer -> div#middle -> button#inner. სამივეს დაუმატე click ივენთი.
// e.stopPropagation() დაუწერე როგორც button#inner-ს, ასევე div#middle-ს.
// დააჭირე button#inner-ს. კომენტარებში ახსენი, რეალურად რომელმა stopPropagation()-მა შეასრულა თავისი საქმე და რატომ ვერ მიაღწია ივენთმა div#outer-მდე.


const outer = document.getElementById('outer');
const middle = document.getElementById("middle");
const inner = document.getElementById("inner");


outer.addEventListener("click", () => {
    console.log("Oyter clicked")
})
middle.addEventListener("click", () => {
    console.log("middle Clicked")
    event.stopPropagation();
})
inner.addEventListener("click", () => {
    console.log("inner clicked")
    event.stopPropagation();
})



//  მხოლოდ იმუშავა child/inner-ის stopPropagation() მეთოდმა რადგან მეორეს ისედაც აჩჭრებს ამიტომაც აღარაა საჭირო მისი მეორედ დაწერა 