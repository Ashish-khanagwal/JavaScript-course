"use strict";
console.log("JavaScript-Fundamentals-1-Challenge-1");
// Coding Challenge #1

let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;

let markBMI = markMass / markHeight ** 2;
console.log(markBMI);

let johnBMI = johnMass / johnHeight ** 2;
console.log(johnBMI);

console.log(markBMI > johnBMI);

// Coding Challenge #2

if (markBMI > johnBMI)
  console.log(`mark's BMI ${markBMI}is is higher than john's BMI ${johnBMI}`);
else console.log(`mark's BMI ${markBMI} is lower than john's BMI ${johnBMI}`);

// Coding Challenge #3

let d1, d2, d3;
let k1, k2, k3;
d1 = 96;
d2 = 108;
d3 = 89;

k1 = 88;
k2 = 91;
k3 = 110;

let dAvg = (d1 + d2 + d3) / 3;
let kAvg = (k1 + k2 + k3) / 3;
console.log(dAvg, kAvg);

// 2.

if (dAvg > kAvg) console.log("Team Dolphin wins the trophy🏆");
else if (dAvg < kAvg) console.log("Team Koalas wins the trophy🏆");
else console.log("Match Draws");

// 3.

(d1 = 97), (d2 = 112), (d3 = 101);
(k1 = 109), (k2 = 95), (k3 = 123);
dAvg = (d1 + d2 + d3) / 3;
kAvg = (k1 + k2 + k3) / 3;
console.log(dAvg, kAvg);
if (dAvg > kAvg && dAvg >= 100) console.log("Team Dolphin wins the trophy🏆");
else if (kAvg > dAvg && kAvg >= 100)
  console.log("Team Koalas wins the trophy🏆");
else if (dAvg === kAvg) console.log("Match is drawn, no-one wins the trophy🏆");

// 4.

(d1 = 97), (d2 = 112), (d3 = 101);
(k1 = 109), (k2 = 95), (k3 = 106);
dAvg = (d1 + d2 + d3) / 3;
kAvg = (k1 + k2 + k3) / 3;
console.log(dAvg, kAvg);
if (dAvg > kAvg && dAvg >= 100) console.log("Team Dolphin wins the trophy🏆");
else if (kAvg > dAvg && kAvg >= 100)
  console.log("Team Koalas wins the trophy🏆");
else if (dAvg === kAvg && dAvg >= 100 && kAvg >= 100)
  console.log("Match is drawn, Both team wins the trophy🏆");
else "No-one wins the trophy";

// Coding Challenge #4

let bill = 275;

const myTip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;

console.log(
  `the bill was ${bill}, the tip was ${myTip} and the total value is ${
    bill + myTip
  }`
);
