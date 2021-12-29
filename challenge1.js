// var arr1 = [1,2,3,4,5];
// var arr2 = [6,7,8,9,10];
// var totalElement = [...arr1,...arr2];
// console.log(totalElement);

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

const [player1,player2] = game.players;
console.log(player1,player2);

const [gk,...fieldPlayers] = player1;
console.log(gk, fieldPlayers);

const allPlayers = [...player1,player2];
console.log(allPlayers);

const players1Final = [...player1,'Thiago','Coutinho','Periscic'];
const {odds:{team1,x:draw,team2},} = game;
console.log(team1 ,draw , team2);

const printGoals = function(...players){
    console.log(`${players.length} goals were scored`);
}

printGoals("rahul","anil","manoj","satish");
printGoals("kalu","bhanu");
printGoals(...game.scored);

team1<team2 && console.log("Team 1 is more likely to win");
team1>team2 && console.log("Team 2 is more likely to win");

