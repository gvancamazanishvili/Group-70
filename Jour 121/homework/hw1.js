// 1) შექმენი div#parent, რომლის შიგნით იქნება button#child. ორივეს დაუმატე click ივენთი. ღილაკზე დაჭერისას კონსოლში ჯერ უნდა დაიბეჭდოს "Child clicked", შემდეგ "Parent clicked". კომენტარებში ახსენი, რა არის Event Bubbling და რატომ შესრულდა ორივე click ივენთი.

const div = document.getElementById("parent");
const btn = document.getElementById("child");


div.addEventListener("click", () => {
    console.log("parent clicked")
})
btn.addEventListener("click", () => {
    console.log("child clicked")
})

// Event Bubbling ---- არის ელემენტების დამოკიდებულება რომ თუ შვილი ელემენტს რაღაც მოუვა მის მშობელზეც ექნება გარკვეული გავლენა 

// როდესაც child ღილაკს დავაწვებით ორივე დაიკლიკება იმიტომ რომ შედეგი გადაეცემა მშობელსაც 