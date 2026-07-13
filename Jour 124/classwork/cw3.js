// 3.შექმენი ობიექტების Prototype Chain:
// child → parent → grandParent
// თითოეულ ობიექტში დაამატე სხვადასხვა თვისება და გამოიტანე child-იდან სამივე თვისება.


const grandParent = {
    grandpa: "Giorgi Mazanishvili"
}

const parent = {
    father: "Bichiko"
}

const child = {
    daughter: "Gvanca"
}

Object.setPrototypeOf(child, parent)
Object.setPrototypeOf(parent, grandParent)



console.log(child.father)
console.log(child.grandpa)
console.log(child.daughter)