/*@@@@@@@@@ Fundamentals part - 1 @@@@@@@@@*/
'use strict'; // strict mode will help us to isolate errors while we writing the code. we can also apply strict to specific function or block

let strictVariable = false;
//strictVariabl = true; // error as strict mode doesn't allow it, prior it was just ignored
if (strictVariable) console.log("it is strict");

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
console.log(world2("pluto is the smallest planet and it is used to be ninth planet in solar system"));
/************** Function Declarations vs. Expressions **************/

// function declaration
console.log(hello("hello function declaration")); // calling function before works for function declaration

function hello(sayHello) {
    return sayHello;
}


// function expression or anonymous function
// function is just another value in javascript so we can store it
const hello2 = function (sayHello) {
    return sayHello;
}
console.log("type of hello2 " + typeof (hello2), " type of hello " + typeof (hello));
console.log(hello2("hello function expression or anonymous function"));

/************** Arrow Functions **************/
// these are used for creating quick one liners
// here sayHello is not function name so we can't console out it
// this keyword restriction in arrow function
// console.log(hello4("hello before the arrow function"));// error just like function expression

const hello3 = sayHello => sayHello; // implicitly return as it is one liner
const hello4 = sayHello => {
    // some calculations
    return sayHello //as it is not one liner we have to explicitly mention return
}
const hello5 = (sayHello, sayBye) => sayHello + sayBye; // multiple arguments in arrow functions
console.log(hello3("hello from arrow function"));
console.log(hello5("hello ", "bye"));

/************** Function calling other function **************/
// pretty complicated
const function1 = hello => hello5("function calling with arrow functions ", "wohoo");
console.log(function1());

/************** Introduction to arrays **************/


/************** Functions **************/
/************** Functions **************/
/************** Functions **************/
/************** Functions **************/
/************** Functions **************/
/************** Functions **************/
