"use strict"; // functions are "block" scoped when strict mode is present

/************** scopes **************/
const m = "global variable";
let n = "earth";
var h = "mars";

var h = "jupiter"; // var is not a block scoped variable, so can be redeclared
// let n = 'saturn'; // let, const variables cannot redeclared as they are block scoped variables
if (true) {
  var hello = "I am var and I am not block scoped"; // Does not support block scoping
  let he = "block variable"; // Does support block scoping
  const m = "block variable"; // Does support block scoping
  console.log("In a Block:");
  console.log(hello);
  console.log(he);
  console.log(m);
}
const functionScope = function () {
  console.log("In a Function:");
  const m = "functional scope variable";
  console.log(m);
  console.log(hello); // evaluated from scope chain
};
functionScope();
console.log("Global Scope:");
console.log(m);
console.log(hello);
// console.log(he); // not defined error
// console.log(m); // not defined error
let flag = true;

// recursion
const recursion = function () {
  //   const recursion = 33;
  const recursion = function () {
    console.log("world");
  };
  if (flag) {
    flag = false;
    recursion();
  }
  console.log("hello");
};

recursion();

/************** changing values in different scopes **************/
let numberValue = 23;
let stringValue = "original string";
const changeValue = function () {
  numberValue = 33;
  //   const numberValue = 432; // this creates a new variable in this scope and the value will not change in original scope
  stringValue = "Changed String";
};
changeValue();
//values are changed because the object creates new reference and assign to it
console.log(numberValue);
console.log(stringValue);

/************** Hoisting  **************/
console.log(hoistedVar); // undefined
hoistedFunction();

var hoistedVar = 12;
// hoistedFunctionAsExpression(); //error because it is like undefined();
function hoistedFunction() {
  console.log("hoisted function");
}
var hoistedFunctionAsExpression = function () {
  console.log("hoisted function as expression");
};

//non hoisting
// It should be used in temporal dead zone(TDZ)
let notHoisted1;
const notHoisted2 = "not hoisted"; // const should not be unintialized

//arrow and expression functions depend on the keyword used
const notHoistedFunction1 = function () {
  console.log("not hoisted function 1- let");
};
let notHoistedFunction2 = function () {
  console.log("not hoisted function 1- const");
};

/************** window  **************/
// window is object of all things on the screen
var a = 1;
let b = 2; // it will not be in window
const c = 3; // it will not be in window
console.log(window.a, window.b, window.c);
console.log(window.a === a, window.b === b, window.c === c);

/************** this keyword  **************/
console.log(this);
const thisObject = {
  firstName: "earth",
  lastName: "mars",
  getName: function () {
    console.log(this.firstName + " " + this.lastName);
    // const self = this;
    // const nestedFunction = function () {
    //   console.log("accessing this in nested function");
    //   console.log(self.firstName, self.lastName);
    // };
    // nestedFunction();
    const nestedArrowFunction = () => {
      console.log("accessing this in nested arrow function");
      console.log(this.firstName, this.lastName);
    };
    nestedArrowFunction();
  },
};

const otherObject = {
  firstName: "Jupiter",
  lastName: "Saturn",
};

const thisFunction = function () {
  console.log(this);
};

const arrowThisFunction = () => console.log(this);

thisFunction();
arrowThisFunction();

thisObject.getName();
otherObject.getName = thisObject.getName; // method borrowing
console.log(thisObject);
console.log(otherObject);

let exampleThisTest = thisObject.getName;
// error, As this is undefined in regular function and In this scenario it is like undefined.firstName
// exampleThisTest();
// In eventhandler this references to DOM

/************** Regular vs Arrow Functions  **************/
const arrowFunction = () => {
  const insideArrowFunction = () => {
    console.log(this);
  };
  insideArrowFunction();
};
arrowFunction();

const argumentsFunction = function (a, b) {
  console.log(arguments);
};
const argumentsArrow = (a, b) => {
  console.log(arguments); //this will cause error
};

argumentsFunction(22, 34, 343, 243, 42);
// argumentsArrow();

/************** primitive & reference objects  **************/
// strings are immutable
let abb = "123s";
// abb[1] = 'f' // error

// shallow copy
const originalObject = {
  a: 23,
  b: 33,
  c: [34, 532],
};
// nested objects are effected in both objects
const shallowObject = Object.assign({}, originalObject);

// deep clone is used with third party libraries
