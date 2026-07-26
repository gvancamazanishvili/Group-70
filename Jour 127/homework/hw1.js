// 1) შექმენი Iterable ობიექტი `numbers`, რომელიც `for...of`-ის გამოყენებისას გამოიტანს რიცხვებს 10-დან 50-მდე, 10-ის შუალედით.

const numbers = {
    [Symbol.iterator](){
        let current = 10; 
        const last = 50;
        const step = 10;

        return{
            next(){
                if(current < last){
                    const newValue  = current
                    current += step
                    return{value: newValue, done: false}
                }else{
                    return {value: undefined, done: true}
                }
            }
        }
    }
}


for(num of numbers){
    console.log(num)
}