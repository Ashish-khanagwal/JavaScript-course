"use strict";
// This is known as strict mode; Strict mode is the special mode, that we can activate in javascript to write a secure javascript code.
// It should be the first code writtn in our code.
// Basically it helps developers to avoid accidental errors.
// Without the strict mode, if we did any accidental error then javascript won't tell us about the error but when strict mode is on, then javascript always alert us with the error on our accidental error.

const js2 = "JAVASCRIPT-FUNDAMENTALS-PART-2";
console.log(js2);

// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>
// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>

// FUNCTIONS

// Function is simply a piece of code that we can reuse over and over again in our code.
// Function and variables are somehow similar like - Variable holds the value and Function can hold one or more complete line of code.
// Function can also recieve data and return it back.

function logger() {
  console.log("My name is Ashish");
}

// Calling / invoking / running a function

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and with ${oranges} oranges`;
  return juice;
  // With return, we can return any value from the function.
}
// in fruitprocessor() <- in paranthese, values are called parameters. These parameters are variables that are specific to this function and they will get defined once we call this function.
fruitProcessor(6, 0);
// Once this function has been executed then this code can be replaced by the result of the function.
// To return the value we have to capture it in the variable, like see below.
const appleJuice = fruitProcessor(6, 0);
console.log(appleJuice);

// Capturing it in the variable is not necessary, we can do it directly.
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// We have to call the function at least once because if we never call the fucntion then the code in the function will never be executed.

// FUNCTIONS allow us to write more maintainable code, because with functions we can create reusable chunks of code instead of manually write the code over and over again.

// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>
// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>

// FUNCTION DECALARATION AND EXPRESSION

// Difference between Function DECALARATION and Function EXPRESSION is that in function declaration we can call the function before the code and it will give the output exactly same as if we call it after the code,
//  but in function expression we can't call it before the code, it requires initialization.

// FUNCTION DECALARATION

function calcAge1(birthYear) {
  return 2022 - birthYear;
}
const age1 = calcAge1(2001);
console.log(age1);
// Here, we can call the function before the code.

// FUNCTION EXPRESSION
// In JavaScript, Functions are values, so we can store it in variable.

const calcAge2 = function calcAge2(birthYear) {
  return 2022 - birthYear;
};
const age2 = calcAge2(2001);
console.log(age2);
// WE can't call the function before the code.

// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>
// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>

// ARROW FUNCTIONS

const calcAge3 = (birthYear) => 2022 - birthYear;
console.log(calcAge3(2001));
// In simple function we don't need return statement.
// Also we don't need paranthese and curly brackets.

// This arrow function, we can call it shorthand of default function type.

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearUntilRetirement(2001, "Ashish"));
// In terms of using multiple parameters, we need curly braces and parantheses.

// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>
// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>

// FUNCTIONS CALLING OTHER FUNCTIONS

function cutFruitPieces(fruit) {
  return fruit * 4;
}
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apples and with ${orangePieces} pieces of oranges`;
  return juice;
}
console.log(fruitProcessor(3, 4));

// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>
// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>

// INTRODUCTION TO ARRAYS

// If one should have to add his/her freinds name then, one way to do is:-
const friend1 = "Manish";
const friend2 = "Lalit";
const friend3 = "Ashish";

console.log(friend1, friend2, friend3);

// But we can do above task in pretty easy way, using array.
// An array is a special variable, which can hold more than one value

const friends = ["Manish", "Lalit", "Ashish"];
console.log(friends);

console.log(friends[0]);
console.log(friends[2]);
// It will print -> Mainsh, because Arrays are zero based.
// Zero-based means at index zero, we count it as our first element, as we does above.

// To get the length of the array we use a fucntion, look below
console.log(friends.length);
// It will print 3 as output. It will not print 0 because we are talking about lenght here, array is zero based not matter here.

// WE can also replace elements of specific index
friends[2] = "Mridul";
console.log(friends);
// yea! i know that we mentioned friend as constant so how it can change, because array is a primitive data type.
// here, we are changing element of specific index, not the whole friends variable. we still can't change whole friends variable, it will show error.

/*
friends = ["Bhuvan", "Sarthak", "Aditya"];
console.log(friends);
*/

// This will throw an error.

// An different way we can create an array.
const yourBirthYear = new Array(2001, 2002, 2004);
console.log(yourBirthYear);

// Arrays can hold the values of different Data types.like : See Below

const firstName = "Ashish";
const Info = [
  firstName,
  "Khanagwal",
  2022 - 2001,
  "Programmer and Enterpreneur",
  friends,
];
console.log(Info);

// Here, we don't need other variables to store different values, Only a simple array is sufficient.

// EXERCISE
// Here we have to calculate age of array mentioned below.

function calcAge1(birthYear) {
  return 2022 - birthYear;
}
const year = [2001, 2002, 2004, 1983];
// We can't do it like done below.
console.log(calcAge1(year));
// It'll throw an error of Nan <- Because year stores an array so, whole array is gonna participate in that calcAge1 function.

// So, the best way is....
// First way
const Age1 = calcAge1(year[0]);
const Age2 = calcAge1(year[1]);
const age3 = calcAge1(year[year.length - 2]);
const age4 = calcAge1(year[year.length - 1]);
console.log(Age1, Age2, age3, age4);

// Second way
const ages = [
  calcAge1(year[0]),
  calcAge1(year[1]),
  calcAge1(year[year.length - 2]),
  calcAge1(year[year.length - 1]),
];
console.log(ages);

// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>
// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>

// BASIC ARRAY OPERATIONS (Methods)

// 1. PUSH METHOD
// PUSH method allow us to add elements at the end of the array.
const myFriends = ["Manish", "Lalit", "Ashish"];

const newLength = myFriends.push("Bhuvan");
console.log(newLength);
console.log(myFriends);
// Path is function, so it also can return the value and here it'll return the length of the array.

// 2. UNSHIFT Method
// It'll add element at the very beginning of the array.
myFriends.unshift("Sarthak");
console.log(myFriends);

// 3. POP method
// It'll remove element from the last of the array.
// it is also an function. so, it'll also return the value but this time we'll get the removed element.

const popped = myFriends.pop();
console.log(popped);
console.log(myFriends);

// 4. SHIFT method
// It'll remove the element from the beginning of the array
myFriends.shift();
console.log(myFriends);

// TO check the index of any particular element of array we use few method, look below
console.log(myFriends.indexOf("Ashish"));
// Output => 2
console.log(myFriends.indexOf("Bhuvan"));
// output => -1 , Because bhuvan is not in the array

// In ES6 we use includes instead of indexof. Have a look below
myFriends.push(23);
console.log(myFriends.includes("Ashish"));
// Displays true, it follows strict mode.
console.log(myFriends.includes("23"));
// Displays False
// Its better use in conditionals, example below.

if (myFriends.includes("Bhuvan")) {
  console.log("You have a friend called Bhuvan");
}
// Displays False, because follows Strict mode.

// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>
// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>

// INTRODUCTION TO OBJECTS
// We use Objects to essentially group together different variables that really belong together.

// Big difference between Objects and array is that order in object doesn't matter at all when we want to retrive them

// IN ARRAYS
const ashishArray = ["Ashish", "Khanagwal", 2022 - 2001, "Programmer"];
console.log(ashishArray);
// Here, no value have specific variable/name in array, so here Objects come into play.

// IN OBJECTS
const Ashish = {
  firstName: "Ashish",
  lastName: "Khanagwal",
  age: 2022 - 2001,
  job: "Programmer",
  friends: ["Just me"],
};
console.log(Ashish);
// SO, In objects we can assign values thier individual names, and also we can call them by thier assigned names.

// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>
// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>

// DOTS & BRACKET NOTATION
// Two ways to call property of the object.

// 1. DOTS
console.log(Ashish.firstName);

// 2. BRACKET
console.log(Ashish["firstName"]);

// Difference between both is that in DOT notation we have to use final property name to call the property but it's not compulsory in BRACKET notation.

const nameKey = "Name";
console.log(Ashish["last" + nameKey]);
// output => Khanagwal
// It is not possible in DOT notation.

/*
const interestedIn = prompt(
  "What do you want to know about Ashish? firstName, lastName, age, Job"
);
*/

// console.log(Ashish.interestedIn);
// It'll displays error, it won't work like this.

// console.log(Ashish[interestedIn]);
// That's why we use bracket notation.

/*
if (Ashish[interestedIn]) {
  console.log(Ashish[interestedIn]);
} else {
  console.log("Wrong Request!, choose one from firstName, lastName, age, Job");
}
*/

// We can also use DOT & BRACKET method to add elements.

Ashish.location = "BHARAT";
Ashish["twitter"] = "@iashishkhangwal";
console.log(Ashish);

// CHALLENGE
// "Ashish has 5 friends, and his best friend is called Ashish"

console.log(
  `"${Ashish.firstName} has ${Ashish.friends.length} friends, and his best friend is called ${Ashish.friends[4]}"`
);

// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>
// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>

// OBJECTS METHOD

const Ashish1 = {
  firstName: "Ashish",
  lastName: "Khanagwal",
  birthyear: 2001,
  job: "Programmer",
  friends: ["Ashish", "Manish", "Lalit"],
  hasDriverLicense: false,

  // calcAge: function (birthyear) {
  //   return 2022 - birthyear;
  // },

  // Here, we can use function as a property of the object.

  /*
  calcAge: function () {
    // console.log(this);
    // This will also return the value of Object.
    return 2022 - this.birthyear;
    // Here, this <= is calling the function.
    // this <- Points toward our object Ashish1, that's why this.birthyear calls 2001.
  },
  */

  // ANOTHER METHOD
  calcAge: function () {
    this.age = 2022 - this.birthyear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      this.job
    }, and he has ${this.hasDriverLicense ? "a" : "no"} driver's license`;
  },
};
console.log(Ashish1.calcAge());
console.log(Ashish1.age);
console.log(Ashish1.age);
console.log(Ashish1.age);
// Here, at every time we have to call birthyear to get age, but what if variable name gets change, then we have to change this birthyear at every time.
// So, to avoid this contradiction we'll use some other method which is THIS METHOD.
// Here, Ashish1 is calling the function. so, we'll use something similar to it.

// CHALLENGE:
// "Ashish is a 21 year old programmer, and he has no driver's license"
console.log(Ashish1.getSummary());

// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>
// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>

// The FOR Loop
// Loops can execute a block of code a number of times.

// Like if we have to print, see example:
console.log("lifting weigth repetetion 🏋️‍♂️ 1 ");
// What if we have to print it like 100 times then, it obviously violates the DRY code rule.

// so, to overcome that kind of thing we use FOR LOOP
// For loop keeps running while the condition is true.

for (let rep = 1; rep <= 10; rep++) {
  console.log(`lifting weight repetetion ${rep}`);
}

// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>
// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>

// LOOPING ARRAYS, BREAKING & CONTINUING
const ashishArray1 = [
  "Ashish",
  "Khanagwal",
  2022 - 2001,
  "Programmer",
  ["Ashish", "Mannish", "Lalit"],
  true,
];
const types = [];
// Empty array, which will furthur store the types of properties mentioned in above array.

// WE used, 0 as initialization for array, cause we know array is zero based.
for (let i = 0; i < ashishArray1.length; i++) {
  // we used =>> i < ashishArray1.length, cause its length will be 6 & as we know i must be less than 6, to be executed.
  // It will read value from ashishArray1.
  console.log(ashishArray1[i], typeof ashishArray1[i]);

  // Filling types of arrays.
  // first way
  types[i] = typeof ashishArray1[i];

  // Second way is by push method.
  types.push(typeof ashishArray1[i]);
}
console.log(types);

// Another Example

const yearsO = [2001, 2002, 1983, 2004];
const agesO = [];

for (let i = 0; i < yearsO.length; i++) {
  agesO.push(2022 - yearsO[i]);
}
console.log(agesO);

// CONTINUE AND BREAK
// Continue is to exit the current iteration of the loop & continue to the next one.
// Break is to completely termiate the whole loop.

console.log("---- Only Strings ----");
for (let i = 0; i < ashishArray1.length; i++) {
  if (typeof ashishArray1[i] !== "string") continue;

  console.log(ashishArray1[i], typeof ashishArray1[i]);
}
// Print only strings

console.log("---- Break with numbers ----");
for (let i = 0; i < ashishArray1.length; i++) {
  if (typeof ashishArray1[i] === "number") break;

  console.log(ashishArray1[i], typeof ashishArray1[i]);
}
// It'll break the loop whenever it find the number as type in array.

// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>
// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>

// LOOPING BACKWARDS & LOOPS IN LOOPS

// What if we want to print the array from backwards, so we will use looping backwards for it.

for (let i = ashishArray1.length - 1; i >= 0; i--) {
  console.log(i, ashishArray1[i]);
}
// Here, we did => i = ashishArray1.length - 1 , cause to executed it from the backward and for it i should be less than 0...

// LOOPS IN LOOPS

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`------- Starting exercise ${exercise} `);

  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Exercise ${exercise}: lifting weight repetetion ${rep}`);
  }
}

// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>
// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>

// The WHILE LOOP

let rep = 1;
while (rep <= 10) {
  console.log(`lifting weight repetetion ${rep}`);
  rep++;
}
// While loop doesn't depend on counter.

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
// It'll immediately stops when we get six in very first turn.
