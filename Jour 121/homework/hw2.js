// 2) იგივე HTML გამოიყენე (parent და child). child-ის click ივენთში გამოიყენე event.stopPropagation(). ღილაკზე დაჭერისას უნდა გამოჩნდეს მხოლოდ "Child clicked". კომენტარებში ახსენი, რას აკეთებს stopPropagation().


const div = document.getElementById("parent");
const btn = document.getElementById("child");


div.addEventListener("click", () => {
    console.log("parent clicked")
})
btn.addEventListener("click", () => {
    event.stopPropagation();    
    console.log("child clicked")
})