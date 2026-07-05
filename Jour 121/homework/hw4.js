// 4) წინა დავალების კოდი გამოიყენე. ამჯერად parent-ის click ივენთში გამოიყენე event.stopPropagation(). ღილაკზე დაჭერისას დააკვირდი, რომ grandparent-ის click აღარ შესრულდეს. კომენტარებში დაწერე, რატომ აღარ მივიდა ივენთი grandparent-მდე.


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


// event-ი grandparent-ამდე აარ გამოვიდა რადგან პროცესი შევაჩერეთ 