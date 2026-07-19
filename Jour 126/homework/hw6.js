// 6) შექმენი ობიექტი `profile`, რომელსაც ექნება ჩვეულებრივი თვისება `name` და Symbol-ის თვისება `isAdmin`. შეამოწმე კონსოლში, არის თუ არა მომხმარებელი ადმინისტრატორი.

const isAdmin = Symbol("Admit");

const profile = {
    name: "Gvanca", 
    [isAdmin]: true
}

console.log(profile[isAdmin])