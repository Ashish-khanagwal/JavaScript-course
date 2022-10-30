console.log("hello world!");

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
console.log(describeCountry("India", 1405, "Delhi"));
console.log(describeCountry("Japan", 125, "Tokyo"));
console.log(describeCountry("Finland", 6, "Helsinki"));

// Function Decelaration

function percentageOfWorld1(country, population) {
  const per1 = (population / 7900) * 100;
  return `${country} has ${population} million people and its about ${per1}% of the world population`;
}

console.log(percentageOfWorld1("India", 1405));
console.log(percentageOfWorld1("Japan", 125));
console.log(percentageOfWorld1("Finland", 6));

// Function Expression

const percentageOfWorld2 = function (country, population) {
  const per1 = (population / 7900) * 100;
  return `${country} has ${population} million people and its about ${per1}% of the world population`;
};

console.log(percentageOfWorld1("India", 1405));
console.log(percentageOfWorld1("Japan", 125));
console.log(percentageOfWorld1("Finland", 6));

// Arrow function

const percentageOfWorld3 = (country, population) => {
  const per1 = (population / 7900) * 100;
  return `${country} has ${population} million people and its about ${per1}% of the world population`;
};

console.log(percentageOfWorld1("India", 1405));
console.log(percentageOfWorld1("Japan", 125));
console.log(percentageOfWorld1("Finland", 6));

// Functions Calling Other Functions

const percentageOfWorld4 = (population) => (population / 7900) * 100;

function describePopulation(country, population) {
  const dPop = percentageOfWorld4(population);
  return `${country} has ${population} million people, which is about ${dPop} of world population`;
}
console.log(describePopulation("India", 1405));

// Arrays

const populationArr = new Array(1405, 6, 125, 1420);
console.log(populationArr.length === 4);

const percentages = [
  percentageOfWorld4(populationArr[0]),
  percentageOfWorld4(populationArr[1]),
  percentageOfWorld4(populationArr[populationArr.length - 2]),
  percentageOfWorld4(populationArr[populationArr.length - 1]),
];
console.log(percentages);

const neighbours = ["Pakistan", "Srilanka", "Nepal", "China"];
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop("Utopia");
console.log(neighbours);

if (neighbours.includes("Germany")) {
  console.log("Probably a europian country");
} else console.log("Not a europian country");

console.log(neighbours.indexOf("Nepal"));
neighbours[2] = "Republic of Nepal";
console.log(neighbours);

// Objects

const myCountry = {
  country: "India",
  capital: "Delhi",
  language: "Hindi",
  population: 1405,
  neighbours: ["Pakistan", "Srilanka", "Bangladesh", "Nepal", "China"],

  describe: function () {
    return `${this.country} has ${this.population}million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countires and a capital called ${this.capital}`;
  },

  checkIsland: function () {
    // this.isIsland = this.neighbours.length === 0 ? true : false;
    this.isIsland = !Boolean(this.neighbours.length);
  },
};

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);

console.log((myCountry.population += 2));
console.log((myCountry["population"] -= 2));
console.log(myCountry.describe());
console.log(myCountry.checkIsland());

// Iteration: The for Loop

for (let voter = 1; voter <= 50; voter++) {
  console.log(`voter number ${voter} is currently voting`);
}

const population2 = [1405, 6, 125, 1420];
const percentages2 = [];

for (let i = 0; i < population2.length; i++) {
  const perc = percentageOfWorld1(population2[i]);
  percentages2.push(perc);
}
console.log(percentages2);
