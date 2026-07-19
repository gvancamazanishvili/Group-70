// 10) შექმენი ობიექტი `parent`, რომელსაც ექნება `greet()` მეთოდი, რომელიც კონსოლში დაბეჭდავს `"Welcome!"`. `Object.create()`-ის გამოყენებით შექმენი `child`, შემდეგ `Object.getPrototypeOf()`-ით შეამოწმე, რომ `child`-ის პროტოტიპი ნამდვილად `parent`-ია და ბოლოს გამოიძახე `child.greet()`.


const parent = {
    greet(){
        console.log("Welcome!");
    }
}


const child = Object.create(parent);

console.log(Object.getPrototypeOf(child));

child.greet();