// JAVASCRIPT-FUNDAMEMTALS-PART-2
"use strict";

// FUNCTIONS

function describeCountry(country, population, capitalCity) {
  const desAll = `${country} has ${population} million people and it capital city is ${capitalCity}`;
  return desAll;
}
describeCountry("Finland", 6, "Helsinki");
describeCountry("India", 1405.2, "New Delhi");
describeCountry("Japan", 126.22, "Tokyo");
console.log(describeCountry("Finland", 6, "Helsinki"));
console.log(describeCountry("India", 1405.2, "New Delhi"));
console.log(describeCountry("Japan", 126.22, "Tokyo"));

// FUNCTION DECALARATION AND EXPRESSION

// Function Declarations
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

// Function Expression
const percentageOfWorld2 = function percentageOfWorld2(population) {
  return (population / 7900) * 100;
};

const indiaPop1 = percentageOfWorld2(1405);
console.log(
  `India has 1405 million people,so it's about ${indiaPop1}% of the world population`
);
const japanPop1 = percentageOfWorld2(126);
console.log(
  `Japan has 126 million people,so it's about ${japanPop1}% of the world population`
);
const finlandPop1 = percentageOfWorld2(6);
console.log(
  `Finland has 6 million people,so it's about ${finlandPop1}% of the world population`
);

// ARROW FUNCTIONS

const percentageOfWorld3 = (population) => (population / 7900) * 100;
const indiaPop3 = percentageOfWorld3(1405);
console.log(
  `India has 1405 million people,so it's about ${indiaPop3}% of the world population`
);

// FUNCTIONS CALLING OTHER FUNCTIONS

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

function decribePopulation(Country, population) {
  const percentage = percentageOfWorld1(population);
  return `${Country} has ${population} million people,which is about ${percentage}% of the world`;
}
console.log(decribePopulation("India", 1405));
console.log(decribePopulation("Japan", 126));
console.log(decribePopulation("Finland", 6));

// INTRODUCTION TO ARRAYS

const population = [1405, 6, 126, 332];
console.log(population.length);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentages = [
  percentageOfWorld1(population[0]),
  percentageOfWorld1(population[1]),
  percentageOfWorld1(population[2]),
  percentageOfWorld1(population[3]),
];
console.log(percentages);

// BASIC ARRAY OPERATIONS (Methods)

const neighbours = ["pakistan", "bangladesh", "nepal"];
console.log(neighbours);

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop("Utopia");
console.log(neighbours);

if (neighbours.includes("Germany")) {
  console.log("Probably central European country :D");
} else {
  console.log("Probably not a central European country :D");
}

console.log(neighbours.indexOf("nepal"));

neighbours[2] = "Republic of nepal";
console.log(neighbours);

// Introduction to Objects

const myCountry = {
  country: "India",
  capital: "Delhi",
  language: "Hindi",
  population: 1405.2,
  neighbours: ["Pakistan", "Bangladesh", "Nepal", "Sri-lanka"],

  // Object Methods

  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
  },

  checkIsland: function () {
    this.isIsland = this.neighbours == 0 ? "isIsland" : "Not a Island";
    return this.isIsland;
  },
};
console.log(myCountry);
console.log(myCountry.describe());
console.log(myCountry.checkIsland());
// console.log(myCountry.isIsland);

// Dot vs. Bracket Notation

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

console.log((myCountry.population += 2));
console.log((myCountry.population -= 2));

// Iteration: The for Loop

for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}

// Looping Arrays, Breaking and Continuing

const population1 = [1405, 6, 126, 332];
const percentages2 = [];

for (let i = 0; i < population1.length; i++) {
  percentages2.push((population1[i] / 7900) * 100);
}
console.log(percentages2);

// Looping Backwards and Loops in Loops

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  // console.log(`'Neighbour: ${listOfNeighbours[i]}'`);

  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}

// The WHILE LOOP

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentages3 = [];
let i = 0;
while (i < population1.length) {
  const per = percentageOfWorld1(population1[i]);
  percentages3.push(per);
  i++;
}
console.log(percentages3);
