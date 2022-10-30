"use strict";

console.log("JavaScript-Fundamentals-1-Assignment-2");

// Function

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million population and its capital city is ${capitalCity}.`;
}

console.log(describeCountry("India", 1406, "Delhi"));
console.log(describeCountry("Finland", 6, "Helsinki"));
console.log(describeCountry("Japan", 125, "Tokyo"));

// Function Declarations vs. Expressions

// SOlved by fucntion Declaration

function percentageOfWorld1(population) {
  const percentage = (population / 7900) * 100;
  return percentage;
}
// console.log(percentageOfWorld1("India", 1406));
// console.log(percentageOfWorld1("Finland", 6));
// console.log(percentageOfWorld1("Japan", 125));

// Solved by function expression

const percentageOfWorld2 = function (country, population) {
  const percentage = (population / 7900) * 100;
  return `${country} has ${population} million people, so it's about ${percentage} of world populaution`;
};
console.log(percentageOfWorld2("India", 1406));
console.log(percentageOfWorld2("Finland", 6));
console.log(percentageOfWorld2("Japan", 125));

// Arrow Functions

const percentageOfWorld3 = (country, population) => {
  const percentage = (population / 7900) * 100;
  return `${country} has ${population} million people, so it's about ${percentage} of world population`;
};
console.log(percentageOfWorld3("India", 1406));

// Functions Calling Other Functions

const describePopulation = (country, population) => {
  const per = percentageOfWorld1(population);
  return `${country} has ${population} million people, so it's about ${per} of world population`;
};

console.log(describePopulation("India", 1406));
console.log(describePopulation("Finland", 6));
console.log(describePopulation("Japan", 125));

// Introduction to Arrays

const population = [1406, 6, 125, 1448];

if ((population.length = 4)) {
  console.log(true);
} else console.log(false);

const percentage = [
  percentageOfWorld1(population[0]),
  percentageOfWorld1(population[1]),
  percentageOfWorld1(population[2]),
  percentageOfWorld1(population[3]),
];
console.log(percentage);

// Basic Array Operations (Methods)

const neighbours = [
  "Pakistan",
  "Afghanistan",
  "Nepal",
  "Myanmar",
  "Bhutan",
  "Bangladesh",
  "China",
];

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (neighbours.includes("Germany")) {
  console.log("A central european country");
} else console.log("Probably not a central european country :D");

console.log(neighbours.indexOf("Nepal"));
neighbours[2] = "Republic of Nepal";
console.log(neighbours);

// Introduction to Object

const myCountry = {
  country: "India",
  capital: "Delhi",
  language: "Hindi",
  population: 1406,
  neighbours: [
    "China",
    "Nepal",
    "Myanmar",
    "Pakistan",
    "Afghanistan",
    "Bangladesh",
    "Bhutan",
  ],
  // Object Methods
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and capital city is ${this.capital}`
    );
  },
  checkIsland: function () {
    console.log(this.neighbours.length === 0 ? true : false);
  },
};
myCountry.describe();

myCountry.checkIsland();

console.log(myCountry);

// Dot vs. Bracket Notation

console.log(
  `${myCountry["country"]} has ${myCountry["population"]} million ${myCountry["language"]}-speaking people, ${myCountry.neighbours.length} neighbouring countries and capital city is ${myCountry["capital"]}`
);

console.log(myCountry.population + 2);
console.log(myCountry["population"] - 2);

// Iteration: The for Loop

for (let vot = 1; vot <= 50; vot++) {
  console.log(`voter number ${vot} is currently voting`);
}

// Looping Arrays, Breaking and Continuing

const population2 = [1406, 6, 125, 1448];
const percentages2 = [];

for (let i = 0; i < population2.length; i++) {
  percentages2.push(percentageOfWorld1(population2[i]));
}
console.log(percentages2);

// Looping Backwards and Loops in Loops

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  console.log(listOfNeighbours[i]);

  for (let r = 0; r < listOfNeighbours[i].length; r++) {
    console.log(`Neighbour: ${listOfNeighbours[i][r]}`);
  }
}

// The While Loop

const percentages3 = [];

let i = 0;
while (i < population2.length) {
  percentages3.push(percentageOfWorld1(population[i]));
  i++;
}
console.log(percentages3);
