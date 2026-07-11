// 1) იგივე HTML გამოიყენე (parent და child). child-ის click ივენთში გამოიყენე event.stopPropagation(). ღილაკზე დაჭერისას უნდა გამოჩნდეს მხოლოდ "Child clicked". კომენტარებში ახსენი, რას აკეთებს stopPropagation().

const div = document.getElementById("box");
const button = document.getElementById("btn");

div.addEventListener("click", () => {
    console.log("Parent clicked")
})
button.addEventListener("click", () => {
    console.log("Child clicked")
    event.stopPropagation();
})


//  stopPropagation() ---> არის მეთოდი რომლის დახმარებითაც ჩვენ შეგვიძლია event bubling შევაჩეროთ როგორც break keyword-ი. ის აჩერებს ამ პროცესს