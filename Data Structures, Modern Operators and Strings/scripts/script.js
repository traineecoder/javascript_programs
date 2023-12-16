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
/************** Modern Operators **************/
/************** Strings **************/
