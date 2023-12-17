"use strict";
/************** Data Structures **************/
const arr = ["earth", "jupiter", "mars", "saturn", "mercury"];

// destructuring or unpacking array
const [a, b, c] = arr; // remaining are ignored
const [d, e, f, g, h, i, j, k, l] = arr; //In this case, remaining are undefined
let [m, , , , n] = arr; // get first and last element by skipping all elements between them
console.log(a, b, c);
console.log(l);
console.log(m, n);

// swapping variable with destructuring
[m, n] = [n, m];
console.log(m, n);

// storing multiple return values in multiple variables
const returnMultipleValues = function () {
  return [22, 33];
};
// const o = returnMultipleValues();
// console.log(o);
const [o, p] = returnMultipleValues();
console.log(o, p);

// nested arrays
const nestedArray = [22, 35, 23, [12, 34]];
const [q, , , [r, s]] = nestedArray;
console.log(q, r, s);

// default values
const [t = -1, u = -1, v = -1] = [2, 3];
console.log(t, u, v);

// destructuring objects
const objectA = {
  firstName: "hello",
  lastName: "world",
  getName: function () {
    return "hello" + " " + "world";
  },
  partnerName: "hi",
};
// variable names must be equal to the properties of object
const { firstName, getName } = objectA;
console.log(firstName, getName());

// we can also setup custom names
const { lastName: familyName } = objectA;
console.log(familyName);

// we can also setup default values
const { partnerName = "No partner" } = objectA;
console.log(partnerName);

// mutating objects
let x = 234;
let y = 342;
let xx = 1234;
let yy = 3142;
const objectB = { x: 1, y: 2, z: 3 };
// {x,y} = objectB; // this will cause error as javascript parse it as assignment to block
({ x, y } = objectB);
({ x: xx, y: yy } = objectB); // if want to store in different variable names
console.log(x, y, xx, yy);

// nested objects
const objectC = { a: { b: 22, c: 34 } };
const {
  a: { b: x1, c: x2 },
} = objectC;
console.log(x1, x2);

// we can pass an object and destructure in function arguments
// It is useful in creating functions with objects
const objcetD = {
  argumentDestructure: function ({ planets, universe }) {
    for (let i in planets) console.log(planets[i]);
    console.log(universe);
  },
};
objcetD.argumentDestructure({
  universe: "milkyway galaxy",
  planets: ["earth", "mars", "mercury", "uranus"],
});

/************** Modern Operators **************/
// spread operator
const spreadArray = [1, 2, 3];
const oldArray = [7, 9, spreadArray[0], spreadArray[1], spreadArray[2]];
console.log(oldArray);

const newArray = [7, 9, ...spreadArray]; // take all elements in spreadArray and put it individually
console.log(newArray);

//spread works on all iterables like strings,arrays,maps,sets etc., but NOT objects

const planet2 = "earth";
const characterString = [...planet2];
console.log(characterString);
console.log(...planet2);
// console.log(`${...planet2}`); // error, this is not gonna work, it expects a single value

const spreadObject = { a: 12, b: 123, c: 1234, d: { e: 3, f: 53 } };
// const spreadObject2 = Object.assign({}, spreadObject);
const spreadObject2 = { ...spreadObject }; //it does a shallow copy
spreadObject2.d.e = 133;
console.log(spreadObject.d);
console.log(spreadObject2.d);
// console.log(...spreadObject); // we can't console out object with spread as it is not iterable

// Rest pattern and parameters
// it is quite opposite to spread operator, because it condenses the multiple elements into array
const restArray = [1, 2, 3, ...[4, 5]];
const [restA, restB, ...restC] = restArray;
console.log(restA, restB, restC);
// rest should always be last
const objectE = { a: { m: 2, b: 4, c: 5 }, d: { a: 34, b: 322 } };
const { a: objectRest, ...objcetG } = { ...objectE }; // collect the specific variables and put remaining into rest object
console.log(objectE);
console.log(objectRest);
console.log(objcetG);

const variableArgumentsFunction = function (...arr) {
  console.log(arr);
};

variableArgumentsFunction(1, 2, 3, 4, 12321);
variableArgumentsFunction();
variableArgumentsFunction(...spreadArray); // no need to put square brackets in functions

let shortCircuitAnd = 33 && 34 && undefined && "jj";
console.log(shortCircuitAnd); // undefined
shortCircuitAnd = 33 && 34 && "jj";
console.log(shortCircuitAnd); // jj
let shortCircuitOr = 33 || 34 || undefined;
console.log(shortCircuitOr); // 33
shortCircuitOr = 0 || undefined || null;
console.log(shortCircuitOr); // null
// we can use or like (something is not present)|| (push this)
// we can use and like (something is already present) && (push also this)

/************** Strings **************/
