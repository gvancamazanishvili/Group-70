// 6) შექმენი ორი ობიექტი: user1 (Nika) და user2 (Gio). დაწერე greet(time, city) ფუნქცია. bind()-ის გამოყენებით შექმენი ორი ახალი ფუნქცია, რომ ერთმა დაბეჭდოს „Good Morning Nika from Tbilisi“, ხოლო მეორემ „Good Evening Gio from Batumi“.


const user1 = {
    name: "Nika"
}


const user2 = {
    name: "Gio"
}

function greet(time, city){
    console.log(`${this.name} -  meet me up at ${time} in ${city}`)
};



const user1Greet = greet.bind(user1, "Morning", "Batumi");
const user2Greet = greet.bind(user2, "Night", "Tbilisi");


user1Greet();
user2Greet();