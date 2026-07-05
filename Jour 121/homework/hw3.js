// 3) შექმენი სამი ჩადგმული ელემენტი:
// div#grandparent
// div#parent
// button#child
// სამივეს დაუმატე click ივენთი. ღილაკზე დაჭერისას დააკვირდი, რა თანმიმდევრობით იბეჭდება შეტყობინებები. კომენტარებში ახსენი, რატომ ხდება ეს.



const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");



grandparent.addEventListener("click", () => {
    console.log("Grandparent Clicked!")
})
parent.addEventListener("click", () => {
    console.log("Parent clicked!")
})
child.addEventListener("click", () => {
    console.log("child Clicked!")
})


// როდესაც ყველაზე შვილეულ ელემენტს ვაკლიკებთ ყველა ის მშობელი ელემენტი რომელიც გააჩნია გამოვიდა კონსოლში