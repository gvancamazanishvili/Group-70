// 3) შექმენი Iterable ობიექტი `countdown`, რომელიც `for...of`-ის გამოყენებისას გამოიტანს რიცხვებს 10-დან 1-მდე.


const numbers =  {
    [Symbol.iterator](){
        let current = 10;
        const last = 1;


        return{
            next(){
                if(current >= last){
                    return { value: current--, done: false };
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