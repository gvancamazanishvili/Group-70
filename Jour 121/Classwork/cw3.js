// 3) შექმენი სამი ჩადგმული ელემენტი:
// div#grandparent
// div#parent
// button#child
// სამივეს დაუმატე click ივენთი. ღილაკზე დაჭერისას დააკვირდი, რა თანმიმდევრობით იბეჭდება შეტყობინებები. შემდეგ parent-ზე გამოიყენე stopPropagation() და ნახე, როგორ შეიცვლება შედეგი. კომენტარებში დაწერე, რატომ მოხდა ეს. 

const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");



grandparent.addEventListener("click", () => {
    console.log("Grandparent Clicked!")
})
parent.addEventListener("click", () => {
    console.log("Parent clicked!")
    event.stopPropagation();
})
child.addEventListener("click", () => {
    console.log("child Clicked!")
})

// როდესაც ღილაკს ვაწვებით მხოლოდ იქამდე გამოაქვს სანამ არ დაამთავრებს event.stopPropagation(); ჩვენ შემთხვევაში კი ეს მეთოდი აქვს parents ამირომ parent-ის შემდეგ   შეწყვიტავს გამოტანას 



