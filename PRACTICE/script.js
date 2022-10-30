const country = "India";
const continent = "Asia";
let population = 1405;
console.log(country, continent, population);

let isIsland = false;
const language = "hindi";

console.log(
  typeof isIsland,
  typeof continent,
  typeof population,
  typeof country
);

let halfPop = population / 2;
console.log(halfPop, population - halfPop);
console.log((population += 1));
finPop = 6;
console.log(population > finPop);
avgPop = 33;
console.log(avgPop > population);

let description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;
console.log(description);

description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

if (population > avgPop)
  console.log(`${country}'s population is above average`);
else {
  console.log(
    `${country} population is ${avgpPop - population / 2} milion below average`
  );
}

// let numNeighbours = Number(
//   prompt("How many neighbour countires does your country have?")
// );

// if (numNeighbours === 1) console.log("Only one border");
// else if (numNeighbours > 1) console.log("More than 1 border");
// else console.log("no borders");

if (language === "english" && population < 50 && !isIsland) {
  console.log(`you should live in ${country} :)`);
} else console.log(`${country} does not meet your criteria`);

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("Most number of native speakers");
    break;
  case "spanish":
    console.log("2nd most spoken language");
    break;
  case "english":
    console.log("3rd most spoken language");
    break;
  case "hindi":
    console.log("best language in the world");
    break;
  default:
    console.log("Great language too :)");
}

population > 33
  ? console.log(`${country}'s population is above average`)
  : console.log(`${country}'s population is below average`);
