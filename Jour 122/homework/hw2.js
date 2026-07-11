// 2) შექმენი button, რომლის შიგნით იქნება span. click Listener დაამატე მხოლოდ button-ს. დააჭირე span-ს და დაბეჭდე:
// e.target
// e.currentTarget
// კომენტარებში ახსენი, რატომ განსხვავდება მათი მნიშვნელობები.


const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    console.log(event.target);
    console.log(event.currentTarget)
})


// ორივე იმიტომ გამოვიდა რადგან ღილაკი არის მშობელი ელემენტი span-ის ამიტომ ორივე დაიბეჭდება 