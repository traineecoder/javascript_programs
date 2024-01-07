"use strict";

let arr = ["A", "B", "C", "D"];
let arr2 = ["H", "G", "F", "E"];

console.log(arr.slice(1));
console.log(arr.slice(-1));
console.log(arr.slice(1, -1));
console.log(arr.slice(3, 1)); // empty array because the arguments are not properly mentioned
console.log(arr.slice(-1, 1)); // empty array because the arguments are not properly mentioned
console.log(arr.splice(-1, 0), arr);
console.log(arr.splice(-1, 3), arr);
console.log(arr.splice(-3, 3), arr);

arr = ["A", "B", "C", "D"];

console.log(arr2.reverse());
let letters = arr.concat(arr2);
letters = [...arr, ...arr2];
const arrayJoin = letters.join(", ");
console.log(letters);
console.log(arrayJoin);

// at method
// at method is also helpful in method chaining
arr = [1, 2, 3, 4, 5];
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
console.log("hello".at(-1));

// forEach method
arr = ["mars", "mercury", "jupiter", "earth"];
arr.forEach(function (value, index, array) {
  console.log(value, index);
});

// for each with maps and sets
let hello;
let map = new Map([
  ["INR", "India"],
  ["USA", "US Dollar"],
  [hello, "hi"],
]);
let set = new Set(["earth", "earth", "sun", "mars"]);
map.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
set.forEach(function (value, _, set) {
  console.log(`${value}`);
});

// map method on arrays - return changed values
arr = [100, 123, 114, 521];
// const newArr = arr.map(function (value) {
//   return value / 83.2;
// });
const newArr = arr.map((value, i) => value * i);
console.log(newArr);

// filter method on arrays - filter values based on condition
// we can create big method chains by using this methods, which it gets verbose on using for loops
arr = [-1, -23, 0, 123, 552];
const filteredArray = arr.filter(function (value) {
  return value > 0;
});
console.log(filteredArray);
arr = [-1, -23, 0, 123, 552];
const withdrawalArray = arr.filter((value) => value < 0);
console.log(withdrawalArray);

// reduce method on arrays - return a single value by computing all array elements
arr = [1, 2, 3, 4, 5, 6];

const sum = arr.reduce(function (accumulator, value, i, arr) {
  // console.log(accumulator, value);
  return accumulator + value;
}, 0);
console.log(sum);

arr = [1, 2, 3, 4, 52, 61];
const maxValue = arr.reduce(function (acc, value) {
  if (acc > value) return acc;
  else return value;
});
console.log(maxValue);

// method chaining/pipeline
// for debugging print and check current array
// overuse of chaining will cause performance issues on big arrays
// it is bad practice to chain methods that mutate the original array
arr = [1, 2, 3, 4, 5];
const chain = arr
  .filter((value) => value > 0)
  .map((value, arr) => value * 83.2)
  .reduce((acc, value) => acc + value, 0);
console.log(chain);

// find method
// it only returns first element satisfies the condition
// find method returns the first element, whereas filter returns an array
arr = [, 1, 23, 4, -5, 12, 3, -1, 13];
const findElement = arr.find((value) => value < 0);
console.log(findElement);

// findIndex method
// indexOf is similar but findIndex can be used to get index according to condition
arr = [1, 23, , 421, 2];
// const indexOfElement = arr.indexOf(42);
const findIndexElement = arr.findIndex((value) => value === 421);
console.log(findIndexElement);

// some and every method
arr = [1, 2, 3, 4, 5, 6, 7];

// EQUALITY
console.log(arr.includes(7));

// CONDITION: returns true if any value is abides the condition
const anyValues = arr.some((value) => value > 0);
console.log(anyValues);

// EVERY: returns true if every value is abides the condition
const everyValues = arr.every((value) => value > 0);
console.log(everyValues);

// Separate callback
const deposit = (value) => value > 0;
console.log(arr.some(deposit)); // returns boolearn
console.log(arr.every(deposit)); // returns boolearn
console.log(arr.filter(deposit)); // returns filtered array
