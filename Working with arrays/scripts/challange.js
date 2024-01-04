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
