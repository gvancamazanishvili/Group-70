// 4.შექმენი constructor function Book, რომელსაც ექნება title თვისება. Book.prototype-ში დაამატე მეთოდი showTitle(). შექმენი ორი წიგნის ობიექტი და გამოიყენე ეს მეთოდი.


function Book(title){
    this.title = title
};

Book.prototype.showTitle = function(){
    console.log(this.title)
};



const book1 = new Book("Harry Potter 1")
const book2 = new Book("Harry Potter 2")



book1.showTitle();
book2.showTitle();