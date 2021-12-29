const game = {
    team1: 'Durga Dharwey',
    team2: 'Sanu Dharwey',
    players:[
        [
        "sanu",
        "manu",
        "bhanu",
        "ranu",
        ],
        [
        "mahak",
        "kuhu",
        "pihu",
        "kavya",

        ],
    ],
    score:'4:0',
    scored:['pravi','anuj','pankaj','khilan'],
    date:'Nov 9th, 2037',
    odds:{
        team1: 1.33,
        x:3.25,
        team2:6.5,
    },

};

for(const [i,players] of game.scored.entries())

console.log(`Goal ${i+1}: ${players}`);

let average = 0;
for(const odd of Object.values(game.odds))

    average+=odd;
    average/=Object.values(game.odds)
    console.log(average);