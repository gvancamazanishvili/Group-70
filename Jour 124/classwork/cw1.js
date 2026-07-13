// 1.შექმენი ობიექტი person, რომელსაც ექნება თვისება name. შექმენი მეორე ობიექტი student და დააკავშირე person-თან Prototype-ის გამოყენებით. გამოიტანე student-იდან name კონსოლში.


const person = {
    name: "Gvanca"
}

const student = {
    status: true
}


Object.getPrototypeOf(person, student);



console.log(person.name)
console.log(student.status)