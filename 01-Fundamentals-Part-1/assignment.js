// JAVASCRIPT FUNDAMENTALS - PART 1

// VALUES AND VARIABLES

let country = "India";
let continent = "Asia";
let population = 1405.2;

console.log(country, continent, population);

// DATA TYPES

let isIsland = false;
console.log(isIsland);
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// let, const & var
language = "Hindi";
console.log(language);

// BASIC OPERATORS

const halfPop1 = population / 2;
const halfPop2 = population / 2;
console.log(halfPop1, halfPop2);

population++;
console.log(population);

let popFinland = 6;
const popComp = population > popFinland;
console.log(popComp);

let avgPop = 33;
const compAvg = population < avgPop;
console.log(compAvg);

let description =
  "Portugal is in Europe, and its 11 million people speak portuguese";

console.log(description);

// STRINGS & TEMPLATE LITERALS

const contr = "Portugal";
const where = "Europe";
const pop = 11;
const lang = "portuguese";

description = `${contr} is in ${where}, and its ${pop} million people speak ${lang}`;
console.log(description);

// Taking Decisions: if / else Statements

// population = 25;
if (population > 33) {
  console.log("India's population is above average");
} else {
  const rem = 33 - population;
  console.log(`India's population is ${rem} million below average`);
}

population = 13;
if (population > 33) {
  console.log("India's population is above average");
} else {
  const rem = 33 - population;
  console.log(`India's population is ${rem} million below average`);
}

population = 130;
if (population > 33) {
  console.log("India's population is above average");
} else {
  const rem = 33 - population;
  console.log(`India's population is ${rem} million below average`);
}
population = 1405.2;

// Type Conversion and Coercion

console.log("19" - "13" + "17");
console.log("123" > 57);
console.log("19" - "13" + 17);
console.log(5 + 6 + "4" + 9 - 4 - 2);

// Equality Operators: == vs. ===

/*
const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);
console.log(numNeighbours);

if (numNeighbours === 1) {
  console.log("Only 1 border");
} else if (numNeighbours > 1) {
  console.log("More than one border");
} else {
  console.log("No borders");
} */

// LOGICAL Operators

language = false;
population = false;
isIsland = false;

if (language && population && !isIsland) {
  console.log("You can live in India :)");
} else {
  console.log("India does not meet your criteria");
}

// THE SWITCH STATEMENTS

language = "hindi";

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place in number of native speakers");
    break;
  case "hindi":
    console.log("Number 4, but Great language");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Greet language too :D ");
}
