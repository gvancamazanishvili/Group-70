// 1) შექმენი ერთი button და დაუმატე click Event Listener. კონსოლში გამოიტანე:
// e.target
// e.currentTarget

const button = document.getElementById("click");


button.addEventListener("click", () => {
    console.log(event.target)
    console.log(event.currentTarget)
})