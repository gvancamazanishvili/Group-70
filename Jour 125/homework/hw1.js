// 1) შექმენი ობიექტი `book`, რომელსაც ექნება `title`, `author` და `pages`. `hasOwnProperty()`-ის გამოყენებით შეამოწმე, აქვს თუ არა `title`, `pages` და `price` თვისებები.

const book = {
    title: "როგორ ვიყოთ slay", 
    author: "მე", 
    pages: 67
}

console.log(book.hasOwnProperty("title"));
console.log(book.hasOwnProperty("author"));
console.log(book.hasOwnProperty("pages"));
