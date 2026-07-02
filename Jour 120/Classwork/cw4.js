// 4) apply()-ის გამოყენებით დაბეჭდე:
// BMW X5 2022

const car = {
    brand: "BMW"
};
function carInfo(model, year) {
    console.log(`${this.brand} ${model} ${year}`)
}

carInfo.apply(car, ["X5", 2022])

