// 2) შექმენი Iterable ობიექტი `letters`, რომელიც `for...of`-ის გამოყენებისას გამოიტანს სიტყვა `"HELLO"`-ს თითოეულ ასოს ცალ-ცალკე


const letters  = {
    [Symbol.iterator](){
        let word = "HELLO"
        let index = 0;
        return{
            next(){
                if(index < word.length){
                    return {value: word[index++], done: false}
                }else{
                    return {value: undefined, done: true}
                }
            }
        }
    }
}


for(letter of letters){
    console.log(letter)
}