"use strict";

// CODING CHALLENGE-1

const calcAverage = (a, b, c) => (a + b + c) / 3;
const scDolphins = calcAverage(85, 54, 41);
const scKoalas = calcAverage(23, 34, 27);
console.log(scDolphins, scKoalas);

// DATA-1

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas)
    console.log(`Dolphins win (${scDolphins} vs ${scKoalas})`);
  else if (avgKoalas >= 2 * avgDolphins)
    console.log(`Dolphins win (${scDolphins} vs ${scKoalas})`);
  else console.log("No one wins");
}
checkWinner(scDolphins, scKoalas);

//  CODING-CHALLENGE-2

function calcTip(bill) {
  const Tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
  return Tip;
}

const bills = [125, 555, 44];
const tips = [
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[bills.length - 1]),
];
console.log(bills, tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);

// CODING-CHALLENGE-3

const Mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.MBMI = this.mass / this.height ** 2;
    return this.MBMI;
  },
};

const John = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.JBMI = this.mass / this.height ** 2;
    return this.JBMI;
  },
};

console.log(Mark.calcBMI(), John.calcBMI());
console.log(
  `${
    Mark.calcBMI() > John.calcBMI()
      ? `${Mark.fullName}'s BMI ${Mark.calcBMI()} is higher than ${
          John.fullName
        }'s BMI ${John.calcBMI()}`
      : `${John.fullName}'s BMI ${John.calcBMI()} is higher than ${
          Mark.fullName
        }'s BMI ${Mark.calcBMI()}`
  }`
);

// CODING-CHALLENGE-4

function calcTip(bill) {
  const Tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
  return Tip;
}

const billsYou = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tipsYou = [];
const totalYou = [];

for (let i = 0; i < billsYou.length; i++) {
  tipsYou.push(calcTip(billsYou[i]));
  totalYou.push(billsYou[i] + tipsYou[i]);
}
console.log(tipsYou);
console.log(totalYou);
