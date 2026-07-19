// 4) შექმენი ობიექტი `animal`, შემდეგ `Object.create()`-ის გამოყენებით შექმენი `dog`. `Object.getPrototypeOf()`-ის გამოყენებით შეამოწმე, არის თუ არა `dog`-ის პროტოტიპი `animal`.


const animal = {
    animal: "Dog"
}


const dog = Object.create(animal);
if(Object.getPrototypeOf(dog) === animal){
    console.log(true)
}else{
    console.log(false )
}
