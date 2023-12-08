/*@@@@@@@@@ Fundamentals part - 2 @@@@@@@@@*/

/************** Functionns **************/
const describeCountry = function (country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
};
let variable1 = describeCountry('United States', 10, 'New York');
let variable2 = describeCountry('China', 900, 'beijing');
let variable3 = describeCountry('Japan', 575, 'Tokyo');
console.log(variable1);
console.log(variable2);
console.log(variable3);

/************** Functionns Declarations vs. Expressions **************/
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
variable1 = percentageOfWorld1(500);
variable2 = percentageOfWorld1(1300);
variable3 = percentageOfWorld1(1700);
console.log(variable1, variable2, variable3);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
variable1 = percentageOfWorld2(500);
variable2 = percentageOfWorld2(1300);
variable3 = percentageOfWorld2(1700);
console.log(variable1, variable2, variable3);

/************** Arrow Functionns **************/
const percentageOfWorld3 = population => (population / 7900) * 100;
variable1 = percentageOfWorld3(500);
variable2 = percentageOfWorld3(1300);
variable3 = percentageOfWorld3(1700);
console.log(variable1, variable2, variable3);

/************** Functionns Calling Other Functions **************/
const describePopulation = function (country, population) {
  return `${country} has ${population} million people which is about ${percentageOfWorld1(
    population
  )} % of the world`;
};
variable1 = describePopulation('United States', 500);
variable2 = describePopulation('China', 900);
variable3 = describePopulation('Korea', 300);
console.log(variable1);
console.log(variable2);
console.log(variable3);

/************** Introduction to Arrays **************/
const populations = [500, 900, 300, 1300];
console.log(4 === populations.length);
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

/************** Basic Array Operations(Methods) **************/
const neighbours = ['Mexico', 'Canada', 'Cuba'];
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if ('Germany' in neighbours) {
  console.log('Central European Country');
} else {
  console.log('Probably not a central Euroean country :D');
}
neighbours[2] = 'West Indies';
console.log(neighbours);

/************** Introduction to Objects **************/
const myCountry = {
  country: 'United states',
  capital: 'New York',
  language: 'English',
  population: 780,
  neighbours: ['Mexico', 'Canada', 'Cuba'],
};

/************** Dot vs. Bracket Notation **************/
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

myCountry['population'] += 2;

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

/************** Object Methods **************/
myCountry['describe'] = function () {
  console.log(this);
};
myCountry.describe();
myCountry.checkIsland = function () {
  myCountry.isIsland = myCountry.neighbours.length ? false : true;
  return this.isIsland;
};
console.log(myCountry.checkIsland());

/************** Iteration: The for loop **************/
for (let i = 0; i < 50; i++)
  console.log(`Voter number ${i + 1} is currently voting`);

/************** Loopint Arrays, Breaking and Continuing **************/
const percentages2 = [];
for (let i = 0; i < percentages.length; i++)
  percentages2.push(percentageOfWorld1(populations[i]));
console.log(percentages);
console.log(percentages2);

/************** Looping Backwards and Loops in Loops **************/
const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia'],
];
for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}

/************** The while Loop **************/
const percentages3 = [];
let i = 0;
while (i < populations.length) {
  const perc = percentageOfWorld1(populations[i]); //In C/C++, java this is error
  percentages3.push(perc);
  i++;
}
console.log(percentages3);
