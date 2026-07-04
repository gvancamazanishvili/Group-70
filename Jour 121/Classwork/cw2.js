// 2) იგივე HTML გამოიყენე (parent და child). ამჯერად child-ის click ივენთში გამოიყენე event.stopPropagation(). ღილაკზე დაჭერისას უნდა გამოჩნდეს მხოლოდ "Child clicked", ხოლო parent-ის click აღარ უნდა შესრულდეს. კომენტარებში ახსენი, რას აკეთებს stopPropagation() და როდის შეიძლება მისი გამოყენება.

const parent = document.getElementById("parent");
const child = document.getElementById("child");


parent.addEventListener("click", () => {
    console.log("Parent clicked!")
});

child.addEventListener("click", () => {
    console.log("Child clicked!")
    event.stopPropagation();
});