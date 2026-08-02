// 4) შექმენი Generator, რომელიც yield-ით აბრუნებს 10-ის ჯერად რიცხვებს 10-დან 100-მდე და გამოიტანე ისინი for...of-ით.


function* tenTimes(){
    let count = 0;
    let times = 10;

    while(count <= 100){
        yield count+=times
    }
}


const Generator = tenTimes();


console.log(Generator.next())
console.log(Generator.next())
console.log(Generator.next())
console.log(Generator.next())
console.log(Generator.next())
console.log(Generator.next())
console.log(Generator.next())
console.log(Generator.next())
console.log(Generator.next())
console.log(Generator.next())

