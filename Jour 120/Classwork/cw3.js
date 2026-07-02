//3)  apply()-ის გამოყენებით დაბეჭდე:
// Ana lives in Tbilisi, Georgia
const person2 = {
    name: "Ana"
};
function introduce(city, country) {
    console.log(`${this.name} lives in ${city}, ${country}`)
}


introduce.apply(person2, ["Tbilisi", "Georgia"])