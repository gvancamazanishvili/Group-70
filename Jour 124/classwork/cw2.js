// 2.შექმენი ორი ობიექტი: animal და dog. animal ობიექტში დაამატე თვისება type: "animal". Prototype-ის საშუალებით მიაბი dog animal-ს და გამოიტანე dog-იდან type.


const animal = {
    type: "Animal"
}

const Dog = {
    name: "Chuxuaxxua"
}


Object.setPrototypeOf(Dog, animal);

console.log(Dog.type)