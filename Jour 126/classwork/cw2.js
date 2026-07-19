// 2.შექმენი Symbol password და ობიექტი account, რომელსაც ექნება ჩვეულებრივი თვისება username და Symbol-ის თვისება password. გამოიტანე ორივე მნიშვნელობა.

const password = Symbol("password");
const account = {
    username: "gvancaMazanishvili",
    [password]: "123"
}

console.log(account.username);
console.log(account[password])

