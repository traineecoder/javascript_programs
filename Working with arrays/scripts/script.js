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

arr = [100, 123, 114, 521];
// const newArr = arr.map(function (value) {
//   return value / 83.2;
// });
const newArr = arr.map((value, i) => value * i);
console.log(newArr);
