// 4) შექმენი Iterable ობიექტი `products`, რომელიც `for...of`-ის გამოყენებისას გამოიტანს:
//    `"Laptop"`
//    `"Phone"`
//    `"Tablet"`


const products = {
    products: ["Laptop", "Phone", "Tablet"],

    [Symbol.iterator](){
        let index = 0;
        const newList = this.products
        
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

for(product of products){
    console.log(product)
}