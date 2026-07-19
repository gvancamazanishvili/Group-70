// 3) შექმენი ობიექტი `user`, რომელსაც ექნება `introduce()` მეთოდი, რომელიც კონსოლში დაბეჭდავს `"Hello!"`. `Object.create()`-ის გამოყენებით შექმენი ახალი ობიექტი და გამოიძახე `introduce()`.

const user = {
    introduce(){
        console.log("Hello");
    }
}


const user1 = Object.create(user);

user1.introduce();