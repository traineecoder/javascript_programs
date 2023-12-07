/*@@@@@@@@@ Fundamentals part - 1 @@@@@@@@@*/

/************** Values and Variables **************/
let a = "Hello World";
// if (a === "Hello World")
//     alert("Hello World");
console.log(34 + 55);
let $hello = 123; // We can use $ in declaring a varibales
let name = "Dazzle"; // name is kinda not good for naming as we use it in else where
let Gnome = "GNOME"; // first letter capital generally means it is a class name
let firstName = "Lightening"; // It is called camel case naming
let first_name = "Mater"; // This type of naming convention is common in Ruby
let PI = 3.145; // All captial letters in variable name tells us that it is a constant
let cityName = "Mumbai"; // As the variables are more descriptive the better we can work on it

/************** Data Types **************/
console.log(true); // boolean true
let isTrue = true;
console.log(isTrue);
console.log(typeof isTrue); // typeof returns the type name

isTrue = "yes"; // dynamic typing
console.log(isTrue);
console.log(typeof isTrue);

let hello;
console.log(hello); // it is undefined
console.log(typeof hello); // its type also undefined

console.log(typeof null); // it return object, but it should be null

/************** let, const and var **************/
// let is mutable as we can change values in further parts of code
// let let; // error
// let var; // error
//var let; // it is fine, but should be avoided.

let value = 23;
value = "hello";
console.log(value);

// const is immutable i.e., value is fixed through out the program
// const declarations must be initialized

const speedOfLight = 3 * 10 ** 8;
console.log(speedOfLight);

// let and var looks same but their working is different
var countess = 22;
countess = "Good morning";

// we can also omit the var, const and let keywords from variables but the scope will be different
scopeVar = 333;

/************** Basic operators **************/
const dividend = 5;
const divisor = 3;
let addition = 3 + 4;
let subtraction = 5 - 7;
let division = dividend / divisor;
let modulus = dividend % divisor;
let multiplication = 22.5 * 22.6;
console.log(addition, subtraction, division, modulus, multiplication);

let stringConcat1 = "Hello";
let stringConcat2 = "World!";
console.log(stringConcat1 + " " + stringConcat2);

let assignment = 22;
assignment += 22; // compound assignment
assignment++; // unary increment
assignment--; // unary decrement
console.log(assignment);

let relation1 = "hello";
let relation2 = "world";
console.log(relation1 < relation2); // other relational operations are >,>=,<=

/************** Operator Precedence **************/
let precedence1 = (4 + 2) * 5;
let precedence2 = 4 + 2 * 5;
console.log(precedence1, precedence2);

/************** String & Template literals **************/
const companyName = "Computers";
const sentence = "I" + " worked" + " at computers for " + 46 + " years";
console.log(sentence);

const anotherSentence = `I'm currently working at computers and ${sentence} ${
  46 - 23
}`; // template literals
console.log(anotherSentence);

const multiLineString = `hello
world`;
console.log(multiLineString);

console.log(
  "hello \n\
world!"
);

/************** Decisions if/else **************/
if (0) {
  console.log("Hello");
} else if (0) {
  console.log("World!");
} else {
  console.log("hello world");
}

/************** Type conversion & coercion **************/
// Type conversion
const aString = "1991";
console.log(Number(aString), aString); // convert string to numbers

const otherString = "hello";
console.log(Number(otherString));
console.log(typeof NaN);

// Type coercion
console.log("I " + "am " + 22 + " years");

console.log("20" + "30" - 50); // putting minus in combination of numbers and string numbers it will be opposite reaction

console.log("33" * 3); // 99
console.log("adf" * 3); // NaN
console.log("ee" / 3); // NaN As string does not contain only number
let stringCoercion = 1 + "1"; // It is '11', '+' will concatenate strings.

/************** Truthy and Falsy Values **************/
// 5 falsy values in javascript: 0,'',null,undefined and NaN
// falsy values are coerced to false while using in conditional statements

console.log(
  Boolean(0),
  Boolean(""),
  Boolean(null),
  Boolean(undefined),
  Boolean(NaN)
);
console.log(
  Boolean(!0),
  Boolean(!""),
  Boolean(!null),
  Boolean(!undefined),
  Boolean(!NaN)
);
console.log(
  Boolean({}),
  Boolean([]),
  Boolean(typeof 3),
  Boolean(console.log("learning booleans"))
);

/************** Equality operators: == vs === **************/
// === is strict equal because it does not perform type coercion
// == is loose equal and it does type coercion. It is best to avoid it.
// it is straight up false if values are different like 234 =="abracadabra" instead of NaN in loose equality and relational operations

console.log("18" == 18, "18" === 18);
console.log(0 == [], 0 == "0", [] == "0"); // hmm...

// const promptNumber = Number(prompt("Enter a number:"));
// console.log(promptNumber);
// console.log(typeof promptNumber);

/************** Logical operators **************/
let logicalAnd = 7;
let nol;
console.log(true && console.log("hello")); // undefined and it is falsy, hence result is false in conditions
console.log(false && console.log("hello")); // false
console.log(false && logicalAnd++); // false
console.log(true && logicalAnd++); // 7
console.log(typeof (true && 0)); // coerced to number, and returns that number
console.log(nol && false); // coerced to undefined, and returns undefined and also it doesn't check the other operand

let logicalOr = 44;
console.log(true || logicalOr++); // true
console.log(false || logicalOr++); // 44 and it is coerced to number, and return
console.log(logicalOr || false); // coerced to number and returns that number

console.log(!7979); // coerced to boolean and opposite to truthy is false

/************** The Switch Statment **************/
// let inputDay = prompt("What is today's weekday?").toLowerCase();
// switch (inputDay) {
//     case 'monday': // inputDay === monday
//         console.log("Have to work on", inputDay);
//         break;
//     case 'tuesday':
//         console.log("Have to work on", inputDay);
//         break;
//     case 'wednesday':
//         console.log("Have to work on", inputDay);
//         break;
//     case 'thursday':
//         console.log("Have to work on", inputDay);
//         break;
//     case 'friday':
//         console.log("Have to work on", inputDay);
//         break;
//     case 'saturday':
//         console.log("Have to work on", inputDay);
//         break;
//     case 'sunday':
//         console.log("holiday on", inputDay);
//         break;
//     default:
//         console.log("well, thats not a weekday");
// }
/************** Statements and Expressions **************/

// 3+6 it is an expression that is evaluated into a value

console.log("hello world"); // It is a statement and performs an action

/************** The conditional (ternary) operator **************/
let ternary;
ternary =
  13 > 7 ? (console.log("HELLO"), "catch the value") : console.log("World");
console.log(ternary);

let ternaryOrder;
ternaryOrder = 12 < 4 ? "hello" : 3 > 4 ? "world" : "universe"; // we can see right to left
console.log(ternaryOrder);

// 3>7?45<33?(5:2):3; //looks valid but it is error beacause of improper grouping
