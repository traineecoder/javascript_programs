"use strict";

/************** Math and rounding **************/
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

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(25 ** (1 / 3));

console.log(Math.max(1, 2, 3, "22", 4));
console.log(Math.max(1, 2, 3, "22px", 4)); // it doesn't parse so NaN will be printed
console.log(Math.min(1, 2, 3, "22", 4));
console.log(Math.PI);
console.log(Math.PI * Number.parseFloat("23.4px") ** 2);
console.log(Math.trunc(Math.random() * 6) + 1);

//(max - min)) + min including min but not max
//(max - min)+1) + min including max but not min
//(max - min-1)) + min+1 excluding both max and min
//(max - min+1)) + min including both max and min
const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min - 1)) + min + 1;

console.log(randomInt(1, 6));

// Rounding Integers
console.log(Math.trunc(23.6));

console.log(Math.round(23.9));

console.log(Math.ceil(23.6));
console.log(Math.floor(23.6)); // floor and trunc are similar for positve numbers

console.log(Math.trunc("-23.6"));
console.log(Math.floor(-23.6));

// Miscellaneous
console.log((23.3).toFixed(4));
console.log((23).toFixed(4));
// console.log("23.3".toFixed(4)); // toFixed is works on numbers
console.log(Number((23.3).toFixed(4)));
console.log(+(23.3).toFixed(4));

/************** Remainder Operator **************/

console.log(5 / 2);
console.log(5 % 2);
console.log(6 % 2);

const isEven = (n) => n % 2 === 0;

console.log(isEven(22));
console.log(isEven(23));
console.log(isEven(0));
console.log(isEven(-23));
console.log(isEven(-24));

// we can change style of every 2 element like 2,4,6...

/************** Remainder Separators **************/
const diameter = 28746_00_00_000;
const price = 22_99;
const fee = 349_00;
console.log(diameter);
console.log(price);
console.log(fee);

console.log(Number("233_23")); // NaN
console.log(Number(233_23)); // 23323
console.log(Number.parseInt("233_23")); //233

/************** Bigint **************/
console.log(68698686876868576563570767356757647765746878987764n);
console.log(BigInt(68698686876868576563570767356757647765746878987764n)); // inaccurate

console.log(20n * 33n);
// console.log(20 * 33n); // error

// math operations doesn't work with bigint
// Exceptions in big int
console.log(20n > 33);
console.log(20n === 33);
console.log(20n == 33);
console.log(typeof 33n);
console.log(20n == "20n");
console.log(20n == "20");

// divisions
console.log(10n / 3n); // truncate decimal part in bigint
console.log(10 / 3);

/************** Creating dates **************/
const now = new Date();
console.log(now);
console.log(new Date("Sat Jan 20 2024 21:53:53"));
console.log(new Date("january 19, 2003")); // no auto correction on wrong dates
console.log(new Date(2032, 8, 12, 4, 23, 45)); // can performs auto correction
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // argument is timestamp in milliseconds

// working with dates
const future = new Date(2033, 8, 12, 4, 32);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime()); // time(in milliseconds) passed since jan 1 1970

console.log(Date.now());

// set methods also performs auto correction
future.setFullYear(2077);
console.log(future);
