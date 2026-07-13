// 8.შექმენი constructor function Student, რომელსაც ექნება name და age თვისებები. Student.prototype-ში დაამატე მეთოდი introduce(), რომელიც დაბეჭდავს: "მე მქვია [სახელი] და ვარ [ასაკი] წლის." შექმენი ორი სტუდენტი და გამოიძახე ეს მეთოდი.


function Student (name, age){ 
    this.name = name
    this.age = age
}


Student.prototype.introduce = function(){
    console.log(`my name is ${this.name} and i am  ${this.age} years old.`)
}

const student1 = new Student("Gvanvca", 16)
const student2 = new Student("Giorgi", 14)


student1.introduce();
student2.introduce();