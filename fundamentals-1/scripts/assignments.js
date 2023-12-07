/*@@@@@@@@@ Fundamentals part - 1 @@@@@@@@@*/

/******* Values and Variables  *******/
const country = "Antartica";
const continent = "Antartica";
let population = 100000;
console.log(country, continent, population);

/******* Data Types  *******/
let isIsland = false;
const language = "antartica";
console.log(
  typeof isIsland,
  typeof population,
  typeof country,
  typeof language
);
/************** let, const and var **************/
// changing variabels to const and let according to their usecase

/************** Basic operators **************/
console.log(
  "half of the population in the half country are: " + population / 2
);
population += 1;
console.log("population incremented by 1: " + population);
let finlandPopulation = 6000000;
let aCountry = 33000000;
finlandPopulation > population
  ? console.log("finland population is higher")
  : console.log("my country population is higher");
aCountry > population
  ? console.log("A country population is higher")
  : console.log("my country population is higher");

let description =
  "my country is in Europe, and its 11 million people speak portuguese";

/************** Operator Precedence **************/
//precedence is the evaluation and order of operations performed in statements

/************** String & Template literals **************/

description = `${description}`; // associativity is right to left for assignment
console.log(description);

/************** Decisions if/else **************/

if (population > 33000000)
  console.log("my country population is above average");
else console.log("my country population is 22 million below average");

/************** Type conversion & coercion **************/
console.log(
  "9" - "5",
  "19" - "13" + "17",
  "19" - "13" + 17,
  "123" < 57,
  5 + 6 + "4" + 9 - 4 - 2
);

/************** Truthy and Falsy Values **************/
// 0,'',undefined,null,NaN are falsy values

/************** Equality operators: == vs === **************/
// let numNeighbours = Number(promt('How many neighbour countries does your country have?'));
// if (numNeighbours == 1) console.log("Only 1 border");
// else if (numNeighbours > 1) console.log("more than 1 border");
// else console.log("No borders");

/************** Logical operators **************/
if (
  language.toLowerCase() === "english" &&
  population < 50000000 &&
  !isIsland
) {
  console.log("You should live in my country");
} else {
  console.log("my country does not meet your criteria :(");
}
/************** The Switch Statment **************/

switch (language.toLowerCase()) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too");
}

/************** Statements and Expressions **************/
//using arithmetic operations etc. are called as expression statements

/************** The conditional (ternary) operator **************/
population > 33000000
  ? console.log("my country population is higher")
  : console.log("my country population is lower");
