// 6) შექმენი Iterable ობიექტი `students`, რომელიც `for...of`-ის გამოყენებისას გამოიტანს 4 სტუდენტის სახელს. გამოიყენე Array და `index` ცვლადი.


const students = {
    names: ["Qeti", "Tiko", "Elene", "Nini", "Keso"],

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
