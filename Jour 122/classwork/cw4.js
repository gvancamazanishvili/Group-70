// 4) შექმენი div#box, რომლის შიგნით იქნება button#btn. ორივეს დაუმატე click ივენთი. პირველად ნახე, რა მოხდება ღილაკზე დაჭერისას. შემდეგ button-ის click ივენთში დაამატე event.stopPropagation() და შეადარე შედეგები. კომენტარებში დაწერე, რა განსხვავება მიიღე ორ შემთხვევაში.

const div = document.getElementById("box");
const button = document.getElementById("btn");

div.addEventListener("click", () => {
    console.log("Parent clicked")
})
button.addEventListener("click", () => {
    console.log("Child clicked")
    event.stopPropagation();
})

// გამოიტანს ცალკცალკე რადგან button-ზე ჩერდება მოქმედება და გამოყოფილი ხდება ერთმანეთისგან 