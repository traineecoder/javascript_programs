const julia = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];

const checkDogs = function (dogsJulia, dogsKate) {
  dogsJulia.splice(-2);
  dogsJulia.splice(0, 1);
  const dogs = dogsJulia.concat(dogsKate); // it does not make changes to array
  console.log(dogs);
  dogs.forEach(function (value, i) {
    const text =
      value >= 3 ? `an adult, and is ${value} years old` : "still a puppy";
    console.log(`Dog Number ${i + 1} is ${text}`);
  });
};
checkDogs(julia, kate);

const calcAverageHumanAge = function (dogAge) {
  const humanAge = dogAge.map(function (value) {
    return value <= 2 ? 2 * value : 16 + value * 4;
  });
  const greaterThan18 = humanAge.filter(function (value) {
    return value >= 18;
  });
  const sum = greaterThan18.reduce((acc, val) => acc + val);
  // const avg = greaterThan18.reduce((acc, val,i,arr) => acc + val/arr.length); // (1+2+3)/3 === 1/3+2/3+3/3
  // console.log(sum);
  console.log(
    `average human age of all adult dogs is ${sum / greaterThan18.length}`
  );
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

const calcAverageHumanAge2 = function (dogAge) {
  const humanAgeAvg = dogAge
    .map((value) => (value <= 2 ? 2 * value : 16 + value * 4))
    .filter((value) => value >= 18)
    .reduce((acc, val, i, arr) => acc + val / arr.length, 0);
  console.log(`average human age of all adult dogs is ${humanAgeAvg}`);
};
calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]);
