/*@@@@@@@@@ Fundamentals part - 1 @@@@@@@@@*/
'use strict'; // strict mode will help us to isolate errors while we writing the code. we can also apply strict to specific function or block

let strictVariable = false;
//strictVariabl = true; // error as strict mode doesn't allow it, prior it was just ignored
if (strictVariable) console.log('it is strict');

//var let; // error as strict mode doesn't allow it, prior it was allowed to name 'let' as variable

/************** Functions **************/
// functions are like placeholders for group of statements
// we can invoke a function by calling its name
// we don't need to put var,let,const in formal parameters
// if we don't pass anything by default formal parameters assigned as undefined, this eliminates the 'expecting arguments errors' during calling a function
function world() {
  return 'Hello World';
}
function world2(pluto) {
  // pluto = "Hello, I am pluto" // overrides the value passed to it
  return pluto;
}
console.log(world());
console.log(world2());
console.log(
  world2(
    'pluto is the smallest planet and it is used to be ninth planet in solar system'
  )
);
/************** Function Declarations vs. Expressions **************/

// function declaration
console.log(hello('hello function declaration')); // calling function before works for function declaration

function hello(sayHello) {
  return sayHello;
}

// function expression or anonymous function
// function is just another value in javascript so we can store it
const hello2 = function (sayHello) {
  return sayHello;
};
console.log(
  'type of hello2 ' + typeof hello2,
  ' type of hello ' + typeof hello
);
console.log(hello2('hello function expression or anonymous function'));

/************** Arrow Functions **************/
// these are used for creating quick one liners
// here sayHello is not function name so we can't console out it
// this keyword restriction in arrow function
// console.log(hello4("hello before the arrow function"));// error just like function expression

const hello3 = sayHello => sayHello; // implicitly return as it is one liner
const hello4 = sayHello => {
  // some calculations
  return sayHello; //as it is not one liner we have to explicitly mention return
};
// debugger;
const hello5 = (sayHello, sayBye) => sayHello + sayBye; // multiple arguments in arrow functions
console.log(hello3('hello from arrow function'));
console.log(hello5('hello ', 'bye'));

/************** Function calling other function **************/
// pretty complicated
const function1 = hello =>
  hello5('function calling with arrow functions ', 'wohoo');
console.log(function1());

/************** Introduction to arrays **************/
const planets = ['Earth', 'Mercury', 'Mars', 'Saturn', 'Jupiter'];
console.log(planets);
// here length is a property
console.log(planets.length);
console.log(planets[planets.length - 1]);
const arrayValues = [hello('hello'), hello('hi')];
console.log(arrayValues);

const galaxies = new Array('Milky way', 'Andromeda');
console.log(galaxies);

/************** basic array operations **************/

const countries = ['Nigeria', 'Kenya', 'Uganada', 'Zimbabwe', 'Zambia'];

console.log('length of array is: ' + countries.length);
console.log('popping element...', countries.pop());
console.log(countries);
console.log('length of array is: ' + countries.length);

console.log('pushing element...');
console.log('new length is ', countries.push('india'), countries);

// unshift and shift works on first value while push and pop works on end value
console.log('unshift ', countries.unshift('switzerland'));
console.log('shift ', countries.shift());

console.log(countries.indexOf('Kenya'));
console.log(countries.indexOf('abac'));

// includes checks for strict equality
console.log(countries.includes('Zimbabwe'));

/************** Intrduction to objects **************/
const hydrogen = { electrons: 1, protons: 1, s: -1 }; // these are not ordered
console.log(hydrogen.electrons, hydrogen['electrons'], hydrogen.s);

// const subAtomicParticle = prompt("which sub atomic particle do you want?");
// console.log(hydrogen[subAtomicParticle]); // we cant use hydrogen.subAtomicParticle it is undefined
hydrogen.neutron = 0;
hydrogen['isElement'] = true;
console.log(hydrogen);

/************** Object methods **************/
const oxygen = {
  electrons: 16,
  protons: 16,
  use: function () {
    return 'It is very useful in purifying the blood through lungs';
  },
};
console.log(oxygen.use());
console.log(oxygen['use']());

/************** Iteration: The For Loop **************/
for (let i = 0; i < 10; i++) {
  console.log('In for loop', i);
}

/************** Looping arrays, break and continue **************/
for (let i = 0; i < planets.length; i++) {
  console.log(planets[i]);
}

/************** Loop backwards and loops in loops **************/

for (let i = planets.length - 1; i >= 0; i--) {
  console.log(planets[i]);
}

/************** The while loop **************/
let i = 0;
while (i < planets.length) {
  console.log(planets[i]);
  i++;
}
