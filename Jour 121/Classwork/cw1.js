// 1) შექმენი div#parent, რომლის შიგნით იქნება button#child. ორივეს დაუმატე click ივენთი. როდესაც ღილაკზე დააჭერ, კონსოლში ჯერ გამოიტანე "Child clicked", შემდეგ "Parent clicked". კომენტარებში ახსენი, რატომ შესრულდა ორივე click და რა არის Event Bubbling.

const parent = document.getElementById("parent");
const child = document.getElementById("child");


parent.addEventListener("click", () => {
    console.log("Parent clicked!")
});

child.addEventListener("click", () => {
    console.log("Child clicked!")
});

// ორივე click-ი არის მოსმენილი, ელემენტს არ არვს მნიშვნელობა

// Events Bibbling --> არის მოვლენა რომლის დროსაც კოდის გაშვენა იქნება ყველაზე შვილეული ელემენტიდან და გრძელდება ყველაზე დიდი მშობელი ელემენტისკენ 