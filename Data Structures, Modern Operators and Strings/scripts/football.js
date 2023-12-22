"use strict";

/************** Coding Challange: #1 **************/
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],

  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// const players1 = [
//   "Neuer",
//   "Pavard",
//   "Martinez",
//   "Alaba",
//   "Davies",
//   "Kimmich",
//   "Goretzka",
//   "Coman",
//   "Muller",
//   "Gnarby",
//   "Lewandowski",
// ];

// const players2 = [
//   "Burki",
//   "Schulz",
//   "Hummels",
//   "Akanji",
//   "Hakimi",
//   "Weigl",
//   "Witsel",
//   "Hazard",
//   "Brandt",
//   "Sancho",
//   "Gotze",
// ];

const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];
const playersFinal = [...players1, "Thiago", "Coutinho", "Perisic"];
const {
  odds: { team1, x: draw, team2 },
} = game;
// const printGoals = function (allPlayers) {
//   for (let i = 0; i < allPlayers.length; i++) {
//     let count = 0;
//     for (let j = 0; j < game.scored.length; j++) {
//       if (game.scored[j] === allPlayers[i]) count++;
//     }
//     console.log(allPlayers[i], ":", count);
//   }
// };
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};
printGoals(...game.scored);

console.log(players1, players2);
console.log(team1, draw, team2);
team1 < team2 && console.log("team1 is likely to win");
team1 > team2 && console.log("team2 is likely to win");

/************** Coding Challange: #2 **************/
for (const [goal, player] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${player}`);
}
let sum = 0;
for (const num of Object.values(game.odds)) {
  sum += num;
}
console.log(`average: ${sum / 3}`);

// console.log(`odds of victory ${Object.values(game)[0]}: ${game.odds.team1}`);
// console.log(`odds of draw: ${game.odds.x}`);
// console.log(`odds of victory ${Object.values(game)[1]}: ${game.odds.team2}`);
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${team}: ${odd}`);
}

// BONUS
const scorers = {};
for (const item of game.scored) {
  scorers[item] || (scorers[item] = 0);
  scorers[item]++;
}
console.log(scorers);

/************** Coding Challange: #3 **************/
const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);
