// 3) შექმენი Generator, სადაც იქნება ცვლადი count = 1. ყოველ yield-ზე დააბრუნე count, შემდეგ გაზარდე ის 1-ით.


function* numbers(){
    let count = 1

    while(true){
        yield count++
        
    }
}


const Generator = numbers();


console.log(Generator.next());
console.log(Generator.next());
console.log(Generator.next());

