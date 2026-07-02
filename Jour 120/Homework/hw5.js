// 7) შექმენი teacher ობიექტი. დაწერე introduce(subject, school) ფუნქცია. bind()-ის გამოყენებით შექმენი ახალი ფუნქცია, სადაც this და subject უკვე მიბმული იქნება. შემდეგ ფუნქციის გამოძახებისას მხოლოდ school გადასცეს.


const teacher = {
    name: "Viola"
};


function introduce (subject, school) {
    console.log(`${this.name}: ${subject} - ${school}`)
};



introduce(teacher, "18 sajaro")