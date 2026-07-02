// 4) შექმენი player ობიექტი. დაწერე play(sport, position, team) ფუნქცია. გამოიყენე apply() ისე, რომ ყველა მონაცემი მასივიდან გადავიდეს ფუნქციაში.


const player = {
    name: "Gvanca"
};

function play(sport, position, team) {
    console.log(`${this.name}: ${sport} ${position} ${team}`)
};


play.apply(player, ["volleyball", "Striker", "Hiku"]);

