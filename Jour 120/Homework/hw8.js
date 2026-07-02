// 8) მოცემული კოდის გაშვების გარეშე დაწერე შედეგი და ახსენი რატომ გამოიტანა ეს შედეგი დაწერე კომენტარებით:

const person = {
    name: "Luka"
};

function greet(city) {
    console.log(`${this.name} from ${city}`);
}

const a = greet.bind(person, "Kutaisi");

greet.apply(
    { name: "Gio" },
    ["Batumi"]
); // Gio from Batumi 
// ამ შემთხვევაში ჩვენ გამოივიყენეთ .apply() მეთოდი რომლის დახმარებითაც ჩვენ ჯერ შეცვალეთ ობიექტის სახელი ხოლო მასივის სახით გადავეცით ქალაქი 
a(); // Luka from Kutaisi
// გამოიტანს შემდეგნაირ შედეგს რადგანად მე-11 ხაზზე გვაქვს .bind() მეთოდის დახმარებით შექმნილი ფუნქცია 