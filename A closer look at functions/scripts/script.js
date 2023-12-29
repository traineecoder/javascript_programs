"use strict";

let a = 23;
let b = a;
a = 33; // the value 33 creates a new memory space for it
console.log(a, b);

/************** Default Parameters **************/
const defaultParams = function (
  param1 = 11,
  param2 = 3,
  param3 = param1 * param2
) {
  console.log(param1, param2, param3);
};

defaultParams();
defaultParams(1, 2, 3);
defaultParams(21, undefined, 13);

/************** Pass by arguments and reference **************/
const obj = {
  name: "Earth Mars",
  age: "13",
};
const normalValue = 23;

const passingArguments = function (param1, param2) {
  param1 = 324;
  param2.name = "Earth Mercury";
};
console.log(normalValue, obj.name);
passingArguments(normalValue, obj);
console.log(normalValue, obj.name);

/************** First Class nad High Order Functions **************/
// first class functions is a depiction of functions as values in javascript
// we can also reuturn a whole function definition from other function
// functions also has the methods to call on them because in javascript they are treated as values
// A function that returns a function and takes a function as argument like 'addEvenListener' or both is known as high order functions.
