// 3.შექმენი constructor function Animal, რომელსაც ექნება name თვისება. Animal.prototype-ში დაამატე მეთოდი showName(), რომელიც დაბეჭდავს ცხოველის სახელს. შექმენი სამი ობიექტი და გამოიძახე მეთოდი.


function Animal(name){
    this.name = name
}

Animal.prototype.showName = function(){
    console.log(this.name)
}

const animal1 = new Animal("Horse");
const animal2 = new Animal("Cat");
const animal3 = new Animal("Elephant")

animal1.showName();
animal2.showName();
animal3.showName();
