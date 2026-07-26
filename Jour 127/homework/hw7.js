// 7) შექმენი Iterable ობიექტი `multiplication`, რომელიც `for...of`-ის გამოყენებისას გამოიტანს 5-ის გამრავლების ტაბულას:
//    5
//    10
//    15
//    20
//    25



const multiplication =  {
    [Symbol.iterator](){
        let current = 5;
        const last = 25;
        const step = 5


        return{
            next(){
                if(current <= last){
                    const lastValue = current
                    current += step
                    return { value: lastValue, done: false };
                }else {
            return { value: undefined, done: true };
                }
            }
        }
    }      
}

for (const num of multiplication) {
    console.log(num);
}