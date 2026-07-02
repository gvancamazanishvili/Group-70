// 3) შექმენი სამი ობიექტი: student1, student2, student3. დაწერე ერთი showGrade(subject, grade) ფუნქცია და call()-ის გამოყენებით თითოეულ მოსწავლეზე დაბეჭდე განსხვავებული საგანი და ქულა.


const student1 = {
    name: "Gvanca"
}
const student2 = {
    name: "Io"
}
const student3 = {
    name: "Emilia"
}

function showGrade(subject, grade) {
    console.log(`${this.name}: ${subject} - ${grade}`)
}


showGrade.call(student1, "History", 100)
showGrade.call(student2, "Germany", 90)
showGrade.call(student3, "French", 80)