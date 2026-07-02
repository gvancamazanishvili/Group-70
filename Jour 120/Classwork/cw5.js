// 5) bind()-ით წინასწარ გადასცი "Georgian".
// შემდეგ გამოიძახე ახალი ფუნქცია.
// შედეგი
// Welcome Saba. Language: Georgian


const user = {
    name: "Saba"
};
function welcome(language) {
    console.log(`Welcome ${this.name}. Lenguage: ${language}`)
}


const userInfo = welcome.bind(user, "Georgian")

userInfo();