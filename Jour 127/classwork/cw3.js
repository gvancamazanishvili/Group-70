// 3) შექმენი ობიექტი `numbers`, რომელიც `[Symbol.iterator]()`-ის გამოყენებით Iterable იქნება. `for...of`-ის გამოყენებისას ობიექტმა უნდა გამოიტანოს რიცხვები 1-დან 5-მდე.


const numbers =  {
    [Symbol.iterator](){
        let current = 1;
        const last = 5;


        return{
            next(){
                if(current <= last){
                    return { value: current++, done: false };
                }else {
            return { value: undefined, done: true };
                }
            }
        }
    }      
}

for (const num of numbers) {
    console.log(num);
}