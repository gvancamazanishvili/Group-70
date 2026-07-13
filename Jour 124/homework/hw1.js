// 1.შექმენი ობიექტები person და teacher. person-ში დაამატე name და age, ხოლო teacher Prototype-ის საშუალებით დააკავშირე person-თან. გამოიტანე teacher-იდან ორივე ინფორმაცია.


const person = { 
    name: "Viola",
    age: 80
}

const teacher  = {
    subject: "History",
    showInfo(){
        console.log(`Her name is ${this.name} and she is proly ${this.age} years old and She teaches ${this.subject}`)
    }
}


Object.setPrototypeOf(teacher,person)


teacher.showInfo();