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
// we can use 'or' like (something is not present(falsy))|| (push this)
// we can use 'and' like (something is already present(truthy)) && (push this)

// Null coalescing operator
// it skips only nullish values:null and defined
const nullish = undefined;
const nullish2 = 0;
console.log(nullish ?? 32);
console.log(nullish2 ?? 32);

// Logical assignment operator
const logicalAssignment1 = { number: 0 };
const logicalAssignment2 = { name: "hello" };
// logicalAssignment1.number ||= 313;
// logicalAssignment2.number ||= 1223;

// nullish assignment
logicalAssignment1.number ??= 313;
logicalAssignment2.number ??= 1223;

console.log(logicalAssignment1.number, logicalAssignment2.number);

logicalAssignment1.name &&= "<Anonymous>";
logicalAssignment2.name &&= "<Anonymous>";

console.log(logicalAssignment1.name, logicalAssignment2.name);

// Enhanced For loop
const enhancedFor = ["earth", "mars", "mercury", "jupitor", "Neptune"];
for (const item of enhancedFor) {
  console.log(item);
}
for (const item of enhancedFor.entries()) {
  console.log(item);
}
console.log([...enhancedFor.entries()]);
for (const [a, b] of enhancedFor.entries()) {
  console.log(`${a + 1}: ${b}`);
}

// enhanced object Literals
const weekday = ["mon", "tue", "wed", "thurs", "fri", "sat", "sun"];
const subEnhancedObject = {
  // enhanced way of writing data in objects
  [weekday[0]]: "hi, from monday",
  [weekday[1]]: "hi, from tuesday",
  [weekday[2]]: "hi, from wednesday",
  [weekday[3]]: "hi, from thursday",
  [weekday[4]]: "hi, from friday",
  [weekday[5]]: "hi, from saturday",
  [weekday[6]]: "hi, from sunday",
  [`hello-${1 + 3}`]: "hi is an alternative to hello",
};
const mainEnhancedObject = {
  name: "earth mars",
  // subEnhancedObject:subEnhancedObject,
  // printName: function () {
  //   console.log(this.name);
  // },

  //es6 enhanced object literals
  subEnhancedObject,
  printName() {
    console.log(this.name);
  },
};
console.log(mainEnhancedObject);

// Optional Chaining(?.)
// objects
const objectOptional = {
  firstName: "hello",
  lastName: "world",
  getName() {
    console.log(this.firstName, this.lastName);
  },
  nestObject: {
    nest1: 22,
  },
};
console.log(objectOptional.nestObject?.nest2); // if object is there get nest2
console.log(objectOptional.nestObject?.nest1); // if object is there get nest1

// methods
console.log(objectOptional.nestObject?.getAge?.()); // if function is there call otherwise undefined

// arrays
const arrayOptional = [{ planet: "earth" }];
console.log(
  arrayOptional[0]?.planet,
  arrayOptional[1]?.planet,
  arrayOptional.length
);

// looping objects with objects with object keys, object values, and object entries
const loopObject = { a: 123, b: 456, c: { a: 789 } };
console.log(loopObject);

const objectKeys = Object.keys(loopObject);
console.log(objectKeys);

const objectValues = Object.values(loopObject);
console.log(objectValues);

const objectEntries = Object.entries(loopObject); // it expects an object
console.log(objectEntries);

// object entries are comma separated on printing
// we can destructure and print the values
// NOTE: refer Destructuring basics

for (const [item, { a }] of objectEntries) {
  !a || console.log(`${item}: ${a}`);
}

// ES6 introduced maps and sets
// Sets
// Sets are iterable and it accpets iterable structures
const shapes = new Set([
  "square",
  "rectangle",
  "trapezium",
  "square",
  "rectangle",
]);
console.log(shapes.has("square"));
console.log(shapes.add("rhombus"));
console.log(shapes.add("rhombus"));
console.log(shapes.size);
console.log(shapes.delete("trapezium"));
// shapes.clear();
console.log(shapes);

for (const item of shapes) {
  console.log(item);
}

const speedMeasurements = new Set(["km/s", "m/s", "cm/s"]);
console.log(...speedMeasurements);
console.log(new Set("hello world"));

// Maps - Fundamentals
// In objects, A key is generally a string, But for maps a key can be anything.
const map = new Map();
map.set("name", "farm foods");
map.set(1, "new york");
console.log(map.set(2, "california"));
map
  .set(3, "chicago")
  .set(4, "boston")
  .set(5, "N. Virginia")
  .set(true, "It's True")
  .set(false, "It's False");
console.log(map.get("name"));
console.log(map.get("age")); // undefined if not present
console.log(map.get(true));

console.log(map.get(5 < 3));

const mapArray = [1, 2];
console.log(map.set(mapArray, "my key is array"));
console.log(map.get(mapArray));
console.log(map.has(1));
console.log(map.delete(5));
console.log(map.size);
console.log(map.set(document.querySelector("body"), "I have Object key"));
console.log(map.get(document.querySelector("body")));

// Maps - Iterations

const map2 = new Map([
  ["question", "which is the fastest programming language ?"],
  [1, "Python"],
  [2, "Java"],
  [3, "C"],
  ["correct", 3],
  [true, "correct 👌"],
  [false, "wrong ❌"],
]);
const objectF = { a: 1, b: 3, c: 5 };
const map3 = new Map(Object.entries(objectF)); // Object entries returns 2d array which can be used to create maps

// we can destructure the Maps
console.log(map2.get("question"));
for (const [key, value] of map2) {
  if (typeof key === "number") console.log(`Option ${key}: ${value}`);
}
const answer = 3;
console.log(map2.get(map2.get("correct") === answer));

// spread maps
console.log([...map2]);
console.log(map2.entries());
console.log(map2.keys());
console.log(map2.values());

/************** Strings **************/
const stringA = "Earth is the second closest planet towards the sun";
const stringB =
  "Sukho su-30 mki is the fastest aircraft in india and fastest in the world is NASA X-15";

// indexOf(),lastIndexOf() and slice() methods on strings.
console.log("Antonio Vivaldi"[0]);
console.log("Antonio Vivaldi".length);
console.log("Antonio Vivaldi".indexOf("i"));
console.log("Antonio Vivaldi".lastIndexOf("i"));
console.log("Antonio Vivaldi".indexOf("Vivaldi"));
console.log("Antonio Vivaldi".slice(8, 12)); // argument one is inclusive and argument two is exclusive
console.log("Antonio Vivaldi".slice(0, "Antonio Vivaldi".indexOf(" ")));
console.log(stringB.slice(0, -5)); // get string by removing last 5 characters, without null terminator('\0')
console.log(stringB.slice(-15)); // get 15 character string from backwords
console.log(stringB.slice(-1, -15)); // both are negative argumentes, therefore prints empty
// When we use methods on strings, the string will automatically converted into objects and regular string returned back
console.log(typeof stringA); // string
console.log(typeof new String("hello")); // object
console.log(typeof stringA.slice(5)); // converts and performs operation on object and returns string

// toLowerCase(), toUpperCase(), trim() method on strings.
const stringTrim = "   heLLo \n \n";
console.log(stringA.toLowerCase());
console.log(stringB.toUpperCase());
console.log(stringTrim.toLowerCase().trim());
console.log(
  stringTrim.trim().toUpperCase()[0] + stringTrim.toLowerCase().trim().slice(1)
);

// replace(), replaceAll() and usage of regex on strings
console.log(stringA.toLowerCase().replace("earth", "Mars"));
console.log(stringA.toLowerCase().replaceAll("the", " "));
console.log(stringA.toLowerCase().replace(/the/g, " "));

// includes(),startsWith() and endsWith() opeartion on strings
console.log(stringA.toLowerCase().startsWith("earth"));
console.log(stringA.toLowerCase().includes("planet"));
console.log(stringA.toLowerCase().endsWith("planets"));

// split(), join()
const splitString = ["hi", "lets", "go"];
console.log(stringA.split(" ")); // split based on the separator
console.log(splitString.join(" ")); // join by adding separator after each element from array
