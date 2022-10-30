// CODING CHALLENGE - 1

// TEST-DATA-1

let massMark = 78;
let massJohn = 92;
let heightMark = 1.69;
let heightJohn = 1.95;

console.log(massMark, massJohn, heightMark, heightJohn);

let bmiMark = massMark / heightMark ** 2;
let bmiJohn = massJohn / heightJohn ** 2;

console.log(bmiMark, bmiJohn);
let markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

// TEST-DATA-2

/*
massMark = 95;
massJohn = 85;
heightMark = 1.88;
heightJohn = 1.76;

console.log(massMark, massJohn, heightMark, heightJohn);

bmiMark = massMark / heightMark ** 2;
bmiJohn = massJohn / heightJohn ** 2;
console.log(bmiMark, bmiJohn);
markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);*/

// CODING CHALLENGE-2

if (bmiMark > bmiJohn) {
  console.log("Mark's BMI is higher than John's!");
} else {
  console.log("John's BMI is higher than Mark's!");
}

bmiMark = 28.3;
bmiJohn = 23.9;
if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
} else {
  console.log(`John's BMI (${bmiMark}) is higher than Mark's (${bmiJohn})!`);
}

// CODING CHALLANGE-3

const Dolphins1 = 96;
const Dolphins2 = 108;
const Dolphins3 = 89;

let avgDolphins = (Dolphins1 + Dolphins2 + Dolphins3) / 3;
console.log(avgDolphins);

const Koalas1 = 88;
const Koalas2 = 91;
const Koalas3 = 110;

let avgKoalas = (Koalas1 + Koalas2 + Koalas3) / 3;
console.log(avgKoalas);

if (avgDolphins > avgKoalas) {
  console.log("Dolphins are winner");
} else if (avgDolphins === avgKoalas) {
  console.log("Match is Drawn");
} else {
  console.log("Koalas is winner");
}

// BONUS-1

avgDolphins = (97 + 112 + 101) / 3;
avgKoalas = (109 + 95 + 123) / 3;
console.log(avgDolphins, avgKoalas);

if (avgDolphins > avgKoalas && avgDolphins >= 100) {
  console.log("Dolphins will win the trophy");
} else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
  console.log("Koalas will win the trophy");
} else if (avgDolphins === avgKoalas) {
  console.log("No-one will win the trophy, Match is drawn");
}

// BONUS-2

avgDolphins = (97 + 112 + 101) / 3;
avgKoalas = (109 + 95 + 106) / 3;
console.log(avgDolphins, avgKoalas);

if (avgDolphins > avgKoalas && avgDolphins >= 100) {
  console.log("Dolphins will win the trophy");
} else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
  console.log("Koalas will win the trophy");
} else if (
  avgDolphins === avgKoalas &&
  avgDolphins >= 100 &&
  avgKoalas >= 100
) {
  console.log("Both will win the trophy, Match is drawn");
} else {
  console.log("No winner");
}

// CODING CHALLENGE-4

// MY CODE

let billValue = 275;
let tip = (billValue * 15) / 100;
let totalValue = billValue + tip;

billValue <= 300 && billValue >= 50
  ? console.log(
      `The bill was ${billValue}, the tip was ${tip}, and the total value is ${totalValue}`
    )
  : console.log("different value.");

billValue = 430;
tip = (billValue * 20) / 100;
totalValue = billValue + tip;

billValue >= 300 || billValue <= 50
  ? console.log(
      `The bill was ${billValue}, the tip was ${tip}, and the total value is ${totalValue}`
    )
  : console.log("different value.");

billValue = 40;
tip = (billValue * 20) / 100;
totalValue = billValue + tip;

billValue >= 300 || billValue <= 50
  ? console.log(
      `The bill was ${billValue}, the tip was ${tip}, and the total value is ${totalValue}`
    )
  : console.log("different value.");

// JONAS CODE

const bill = 275;
const myTip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `the bill was ${bill}, the tip was ${myTip}, and the total value is ${
    bill + myTip
  }`
);
