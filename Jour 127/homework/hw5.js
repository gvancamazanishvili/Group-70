// 5) შექმენი Iterable ობიექტი `evenNumbers`, რომელიც `for...of`-ის გამოყენებისას გამოიტანს მხოლოდ ლუწ რიცხვებს 2-დან 10-მდე.

const evenNumbers =  {
    [Symbol.iterator](){
        let current = 2;
        const last = 10;


        return{
            next(){
                if(current < last){
                    const newValue  = current
                    current += 2
                    return{value: newValue, done: false}
                }else{
                    return {value: undefined, done: true}
                }
            }
        }
    }      
}

for (const num of evenNumbers) {
    console.log(num);
}