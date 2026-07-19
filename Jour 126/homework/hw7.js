// 7) შექმენი ორი ობიექტი, `user1` და `user2`. შექმენი ერთი Symbol `id` და ორივე ობიექტში გამოიყენე ის თვისების სახელად, მაგრამ მიანიჭე განსხვავებული მნიშვნელობები. გამოიტანე ორივე ობიექტის id.


const id = Symbol("id");

const user1 = {
    [id]: 11412,
    name: "gvanca"
}

const user2 = {
    [id]: 17831, 
    name: "sally"
}

console.log(user1[id])
console.log(user2[id])