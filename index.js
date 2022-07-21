// Add answers here
// CONDITIONAL ALGORITHMS
// 1 Los or New
function nameOfCity(string) {
  const beginsWith = string.substring(0, 3).toLowerCase();
  if (beginsWith == "new" || beginsWith == "los") {
    return string;
  } else {
    return "The city name does not begin with Los or New";
  }
}
nameOfCity("New York");
nameOfCity("newark");
nameOfCity("London");

// 2 isDivisible?
function isDivisible(integer) {
  if (integer % 100 === 0) {
    return true;
  } else {
    return false;
  }
}
isDivisible(1);
isDivisible(1000);
isDivisible(100);

// 4 What's the weather
function isRaining(condition) {
  return condition
    ? "wet day - you need an umbrella"
    : "dry day - leave your umbrella at home";
}
isRaining(true);

// LOOPS
// 1 Sequence
// function geometricalSequence(number) {
//   let sum = 0;
//   for (let i = 0; i < 10; i++) {
//     sum = number ** 2;
//   }
//   return sum;
// }
// geometricalSequence(1);
// console.log(geometricalSequence(1));
const geometricalSequence = (n) => {
  let result = "";
  //   let sequence = 1;
  for (let i = 0; i < 9; i++) {
    n = n * 2;
    result = result + n + " ";
  }
  console.log(result);
};
geometricalSequence(1);

// 2 Multiples
const multiplesOfThree = () => {
  let result = "";
  let threes = 0;
  for (let i = 0; i < 5; i++) {
    threes = threes + 3;
    result = result + threes + " ";
  }
  return result;
};
multiplesOfThree();

// MATH
// 1 You've got the power
function powerOf(integer) {
  result = Math.pow(integer, integer);
  return result;
}
powerOf(3);
powerOf(4);

// PROBLEM SOLVING
// 1 How many?
function vowelCount(string) {
  const vowels = "AaEeIiOoUu";

  let counter = 0;

  for (let i = 0; i < string.length; i++) {
    if (
      string[i] === "A" ||
      string[i] === "E" ||
      string[i] === "I" ||
      string[i] === "O" ||
      string[i] === "U" ||
      string[i] === "a" ||
      string[i] === "e" ||
      string[i] === "i" ||
      string[i] === "o" ||
      string[i] === "u"
    ) {
      counter++;
    }
  }
  return counter;
}
vowelCount("hello");
vowelCount("test");
vowelCount("fbw");

// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};
