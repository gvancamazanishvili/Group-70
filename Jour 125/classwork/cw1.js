// 1) შექმენი ობიექტი `user`, რომელსაც ექნება `name` და `age`. `hasOwnProperty()`-ის გამოყენებით შეამოწმე, აქვს თუ არა `name` და `email` თვისებები.

const user = {
    name: "gvanca", 
    age: 16
}


user.hasOwnProperty("name");
user.hasOwnProperty("email");
