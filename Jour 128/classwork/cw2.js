// 2) შექმენი Generator, რომელიც აბრუნებს 2 რიცხვს, შემდეგ კი return-ით აბრუნებს "Finished"-ს. დაბეჭდე ყველა next().

function* numbers(){
    yield 15
    yield 13

    return "finished"
    
}


const Generator = numbers();


console.log(Generator.next());
console.log(Generator.next());
console.log(Generator.next());

