// 3) შექმენი ორი Symbol ერთი და იმავე აღწერით `"name"`. გამოიყენე ისინი ობიექტის ორ თვისებად და შეინახე ორი განსხვავებული სახელი. დაამტკიცე, რომ ისინი განსხვავებული თვისებებია.




const name = Symbol("name");

const acc1 = {
    [name]: "gvanca"
}


const acc2 = {
    [name]: "sally"
}

console.log(acc1[name]);
console.log(acc2[name]);