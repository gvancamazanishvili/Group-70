// 2) შექმენი employee ობიექტი, რომელსაც აქვს name და position. დაწერე work(company, salary) ფუნქცია. არგუმენტები შეინახე მასივში და apply()-ის გამოყენებით დაბეჭდე თანამშრომლის ინფორმაცია.

const employee = {
    name: "Gvanca", 
    position: "Teacher"
}

function work(company, salery){
    console.log(`${this.name}, ${this.position}, ${company, salery}`)
};


work.apply(employee, ['GOA', "300$"])
