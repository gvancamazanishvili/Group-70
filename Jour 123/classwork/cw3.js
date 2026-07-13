// 3) შექმენი 10 ფერადი კვადრატი.
// რომელ ფერსაც დააჭერ:
// body-ს ფონი შეიცვალოს იმ ფერზე.
// ივენთი იყოს მხოლოდ კონტეინერზე.



const div = document.getElementById("container");

div.addEventListener("click", (event) => {
    if(event.targer !== div){
        document.body.style.backgroundColor = event.target.textContent;
    }
})  