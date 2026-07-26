// 5) შექმენი საკუთარი Iterable ობიექტი `students`, რომელიც `for...of`-ის გამოყენებისას გამოიტანს შემდეგ სახელებს:

// "Nika"
// "Luka"
// "Giorgi"

// გამოიყენე:
// - Symbol.iterator
// - next()
// - value
// - done

const students = {
    names: ["Nika", "Luka", "Giorgi"],

    [Symbol.iterator](){
        let index = 0;
        const newList = this.names
        
        return{
            next(){
                if(index < newList.length){
                    return {value: newList[index++], done: false};
                }else{
                    return {value: undefined, done: true}
                }
            }
        }
    }
}    

for(name of students){
    console.log(name)
}




