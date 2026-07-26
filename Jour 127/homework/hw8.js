// 8) შექმენი Iterable ობიექტი `messages`, რომელიც `for...of`-ის გამოყენებისას გამოიტანს 3 შეტყობინებას. გამოიყენე `Symbol.iterator`, `next()`, `value` და `done`.


const messages = {
    list: ["გამარჯობა!", "როგორ ხარ?", "წარმატებული დღე!"],

    [Symbol.iterator]() {
    let index = 0;
    const messageList = this.list;

    return {
        next() {  
            if (index < messageList.length) {
                return { value: messageList[index++], done: false };
            } else {
                return { value: undefined, done: true };
            }
        }
        };
    }
};

for (const msg of messages) {
    console.log(msg);
}