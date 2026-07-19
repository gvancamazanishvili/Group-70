// 2) შექმენი ობიექტი `student`, რომელსაც ექნება `name`, `surname` და `grade`. `in` ოპერატორის გამოყენებით შეამოწმე, არსებობს თუ არა `grade` და `address`.


const student = {
    name: "Gvanca",
    surname: "Mazanishvili", 
    grade: 11
}


console.log("grade" in student);
console.log("address" in student);