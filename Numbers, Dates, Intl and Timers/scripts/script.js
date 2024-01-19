"use strict";

console.log("25");

// conversion
console.log(Number("25"));
console.log(+"25"); // when js sees + in first it will coerce the value as number

// Parsing
console.log(Number.parseInt("324px", 10));
console.log(Number.parseInt("e232", 10));

console.log(Number.parseFloat("2.5rem"));
console.log(Number.parseInt("32.4px", 10));
console.log(parseInt("32.4px", 10)); // these are global functions, It is recommended to use with "Number" object

// only use to check if the value is not a number and it is creates confusion
console.log(Number.isNaN(20));
console.log(Number.isNaN("20"));
console.log(Number.isNaN("23x")); // it is false, weird
console.log(Number.isNaN(+"23x"));
console.log(Number.isNaN(23 / 0));

// use this check the value is a number
console.log(Number.isFinite(23));
console.log(Number.isFinite("23"));
console.log(Number.isFinite("23x"));
console.log(Number.isFinite(+"23x"));
console.log(Number.isFinite(23 / 0));
console.log(Number.isFinite(23 / 2));
