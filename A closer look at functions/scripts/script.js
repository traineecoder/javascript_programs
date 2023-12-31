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
// we can also return a whole function definition from other function
// functions also has the methods to call on them because in javascript they are treated as objects
// High order functions: A function can returns a function(function definiton) and takes a function(function definition) as argument like 'addEvenListener' or both is known as high order functions.

const removeSpaces = function (str) {
  return str.replace(/ /g, "");
};

const upperFirstWord = function (str) {
  const [firstWord, ...remainingWords] = str.split(" ");
  return [firstWord.toUpperCase(), ...remainingWords].join(" ");
};

// call back functions
// call back functions gives abstraction
const stringTransformer = function (str, func) {
  console.log(`Original Function: ${str} `);
  console.log(`Transformed Function: ${func(str)} `);
  console.log(`Transformed By: ${func.name} `);
};

stringTransformer("hello World", upperFirstWord);
stringTransformer("hello World", removeSpaces);
// examples of built-in call-back functions are 'addEventListener', 'forEach' etc.,

const greet = function (value) {
  return function (name) {
    console.log(`${value} ${name}`);
  };
};

const greetHelloWorld = greet("hello world");

// It will be useful in functional programming
greetHelloWorld("earth");
greetHelloWorld("mars");
// behind the scenes it uses closures
greet("hello")("mercury");

const arrowGreet = (value) => (name) => console.log(`${value} ${name}`);
const arrowGreetHelloWorld = arrowGreet("Hello World");

arrowGreetHelloWorld("jupiter");
arrowGreet("hey")("venus");

// call and apply methods
// NOTE: you can't call a function in object definition
const ecommerce1 = {
  name: "Amazon",
  orders: [],
  order(productName) {
    console.log(`Order for ${productName} has been placed at ${this.name}`);
    this.orders.push(productName);
  },
};

const ecommerce2 = {
  name: "flipkart",
  orders: [],
};

const putOrder = ecommerce1.order;
// putOrder('hair dryer'); // will not work

putOrder.call(ecommerce1, "hair dryer"); // calls a function
putOrder.call(ecommerce2, "dairy milk");

const args = ["keyboard", "mouse"];
putOrder.apply(ecommerce1, args);
putOrder.call(ecommerce1, ...args); // normally used most
console.log(ecommerce1);
console.log(ecommerce2);

// bind method
const putOrderOnAmazon = putOrder.bind(ecommerce1); // gives a function
const putOrderOnFlipkart = putOrder.bind(ecommerce2);
putOrderOnAmazon("Laptop");
putOrderOnFlipkart("Nvidia RTX 3070");

const putOrderForOreo = putOrder.bind(ecommerce1, "pack of oreo"); // preset arguments with bind
putOrderForOreo();

// bind with event listeners
ecommerce1.orderSize = 0;
ecommerce1.buyBrocolli = function () {
  console.log(this);
  this.orderSize++;
  console.log(this.orderSize);
  this.orders.push("brocolli");
};

document.body.append(document.createElement("button"));
document.querySelector("button").innerText = "click me";
document
  .querySelector("button")
  .addEventListener("click", ecommerce1.buyBrocolli.bind(ecommerce1)); // bind gives a function for eventhandler

// partial application of bind method i.e preset values
const mathFormula = function (a, b) {
  return a * a + b * b + 2 * a * b;
};

const bindMiscillenous = mathFormula.bind(null, 2);
console.log(bindMiscillenous(3));
