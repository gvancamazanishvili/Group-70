// 4.შექმენი constructor function Car, რომელსაც ექნება brand თვისება. Car.prototype-ში დაამატე მეთოდი showBrand()
// რომელიც დაბეჭდავს მანქანის ბრენდს. შექმენი ორი მანქანის ობიექტი და გამოიძახე მეთოდი.


function Car(Brand){
    this.Brand = Brand
}


Car.prototype.showBrand = function(){
    console.log(this.Brand)
}


const car = new Car("Lamborghini")

car.showBrand()