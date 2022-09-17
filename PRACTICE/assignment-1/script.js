"use strict";

console.log("JavaScript-Fundamentals-Assignment-1");

//  Values and Variables
const country = "India";
const continent = "Asia";
let population = 1406;
console.log(country, continent, population);

// Data Types

const isIsland = false;
let language;

console.log(
  typeof country,
  typeof continent,
  typeof population,
  typeof isIsland,
  typeof language
);

// let, const and var

language = "Hindi";
console.log(typeof language);

// Basic Operators

let eachHalf = population / 2;
console.log(
  `If my country spilts into two halfs then each-half will contain ${eachHalf} million of population`
);

population += 1;
console.log(population);

let finlandPop = 6;
console.log(finlandPop > population);

let avgPop = 33;
console.log(population < avgPop);

let description =
  "India is in Asia and its 1406 million population speaks hindi";
console.log(description);

// Strings and Template Literals

description = `${country} is in ${continent} and its ${population} speaks ${language}`;
console.log(description);

// Taking Decisions: if / else Statements

const decide =
  population > 33
    ? `${country}'s population is above average`
    : `${country}'s population is ${33 - population} below average`;

console.log(decide);

// population = 130;
if (population > 33) console.log(`${country}'s population is above average`);
else console.log(`${country}'s population is ${33 - population} below average`);

// Type Conversion and Coercion
console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("121" > 51);
console.log(5 + 6 - "4" + 9 - 4 - 2);

// Equality Operators: == vs. ===

// let numNeighbours = Number(
//   prompt("How many neighbour country does your country have?")
// );

// if (numNeighbours === 1) console.log("Only one border");
// else if (numNeighbours > 1) console.log("More than 1");
// else console.log("No borders");

//  Logical Operators

let isPopulation = false;
let isLanguage = false;

if (isPopulation && isLanguage && isIsland)
  console.log("You should live in India");
else console.log("India does not meet your criteria");

// The switch Statement

language = "Hindi";

switch (language) {
  case "Chinese" || "Mandarin":
    console.log("Most Native Speakers");
    break;
  case "Spanish":
    console.log("2nd place in terms of native speaker");
    break;
  case "English":
    console.log("3rd place");
    break;
  case "Hindi":
    console.log("4th place");
    break;
  case "Arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

// The Conditional (Ternary) Operator

population = 1406;

population > 33
  ? console.log(`${country}'s population is above average`)
  : console.log(`${country}'s population is below average`);
