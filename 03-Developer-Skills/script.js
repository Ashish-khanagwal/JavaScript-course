// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// CODING-CHALLENGE

// DATA-1

const test1 = [17, 21, 23];
const test2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]} degree Celcius in ${i + 1} days ... `;
  }
  console.log("... " + str);
};
printForecast(test1);
