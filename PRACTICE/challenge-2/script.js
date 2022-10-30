"use strict";

console.log("JavaScript-Fundamentals-Challenge-2");

// Challenge-1

const calcAverage = (a, b, c) => (a + b + c) / 3;
const scDolphins = calcAverage(85, 54, 41);
const scKoalas = calcAverage(23, 34, 27);
console.log(scDolphins, scKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins wins, ${scDolphins} vs ${scKoalas}`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas wins, ${scKoalas} vs ${scDolphins}`);
  } else {
    console.log("No on wins");
  }
};
checkWinner(scDolphins, scKoalas);

// Challenge-2

const bills = [125, 555, 44];
const tips = [];

const calcTip = (bill) => {
  if (bill >= 50 && bill <= 300) {
    tips.push(bill * 0.15);
  } else {
    tips.push(bill * 0.2);
  }
};
calcTip(bills[0]);
calcTip(bills[1]);
calcTip(bills[2]);
console.log(bills, tips);

const total = [];

for (let i = 0; i < bills.length; i++) {
  total.push(bills[i] + tips[i]);
}
console.log(total);

// Challenge-3

const Mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.markBMI = this.mass / this.height ** 2;
    return this.markBMI;
  },
};
console.log(Mark.calcBMI());

const John = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.johnBMI = this.mass / this.height ** 2;
    return this.johnBMI;
  },
};
console.log(John.calcBMI());

console.log(
  Mark.markBMI > John.johnBMI
    ? `Mark's BMI (${Mark.markBMI}) is higher than John's BMI (${John.johnBMI})`
    : `John's BMI (${John.johnBMI}) is higher than Mark's BMI (${Mark.markBMI})`
);

// Challenge-4

function calcTip2(bill) {
  const Tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
  return Tip;
}

const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips2 = [];
const totals2 = [];

for (let i = 0; i < bills2.length; i++) {
  tips2.push(calcTip2(bills2[i]));
  totals2.push(bills2[i] + tips2[i]);
}
console.log(tips2);
console.log(totals2);
