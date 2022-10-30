const js1 = "JavaScript-Fundamentals-part-1";
console.log(js1);

let js = "amazing";
// if (js === "amazing") alert("Javascript is fun!");

// 40 + 56 + 23 - 103;
// This code will not execute in browser, that's why we used code written below

// Whenever we want output from our browser we have to use console.log()

console.log(40 + 56 + 23 - 103);
// It's answer will be visible in console tab in browser.

console.log("Ashish");
console.log(23);

// Basically here --> Ashish and 23 is the value.
// Value is the smallest unit of information that we have in javascript.
// WE can store values in variables.

let fistName = "Ashish";
// Here firstname --> is variable and "Ashish" --> is Value
console.log(fistName);
// It will print the value assigned to the variable.

// There are some rules in JavaScript to assign variable names.

// CAMELCASE RULE --->>

// Like if there is multiple words in a variable then the first word's first letter should be in lowercase and second word's first letter should be in uppercase.

// as we did above -->> firstName --< like this
// We can't do it like firstname <-- This is not a good practice.
// always --> firstNamePerson <- we have to write like this.

let firsNamePerson = "Khanagwal";
console.log(firsNamePerson);

// And also first_name_person <-- this is majorly used in other languages like ruby but this is not a good practice in javascript.
// Besides letter and numbers only ($ and _) These two are allowed to be used in varibale names.
// We also cannot start a variable name with uppercase letter.
// Also use descriptive words whenever you are assigning names to variables

// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>
// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>

// DATA TYPES --->>

// Actually it is the value that holds tha data types not the variable.

// 7 premitive data types -->

/* 1. Number ; 2. String ; 3. Boolean ; 4. Undefined ; 5. null ; 6. Symbol ; 7. BigInt */

let javascriptIsFun = true;
console.log(javascriptIsFun);

// Here, True is boolean data type.

// if we write like this -:
true;
console.log(true);
// This will also print true.

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Ashish");

// typeof is used to know the type of data type we used in code.

// DYNAMIC TYPING --> we can change the value of pre defined variable, like see below -:
// But we don't use let again, because we are overwriting its value not stating the value again.

javascriptIsFun = "Yellowlemon";
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

// UNDEFINED DATA TYPE :-
let year;
console.log(year);
// This will give output as undefined
console.log(typeof year);

year = 2001;
console.log(typeof year);

// NULL DATA TYPE :-
console.log(typeof null);
// This will give output as Object, which is not defined yet but taken as error in javascript. This is considered as the weird behaviour of javascript and treated as bug.

// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>
// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>

// Let, Const & Var

let age = 30;
age = 31;

// Let only can be used when you surely know that the value is gonna be change in future
// Changing values of variable is known as mutating.

const birthYear = 2001;
// birthYear = 2000;
// Above commented code will show you an error.because, const is unmutable.

// const is used so that values can't be change or assigned variables values stay constant forever, even if you try to change it.
// Hence, const is unmutable.
// using const  is recommended.

// var is also same as let, but this is an old javascript material so in nowadays we don't use var.

var profession = "Programmer";
profession = "Teacher";
console.log(profession);

// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>
// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>

// BASIC OPERATORS

// Basically, operators allow us to transform values or combine multiple values.

// Math Operators

const now = 2022;
const ageAshish = now - 2001;
const ageNidhi = now - 2001;
console.log(ageAshish, ageNidhi);

console.log(ageAshish * 2, ageAshish / 10, ageAshish ** 2, 2 ** 3);
// Here, 2 ** 3 means, 2 to the power 3, which is equals to 8.

const firstName = "Ashish";
const lastName = "Khanagwal";
console.log(firstName + " " + lastName);
// We added " " <- This for adding space between firstname and lastname.

// Assignment operators

let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 2; // x = x * 2 = 50
x++; //x = x + 1
x--;
x--;
console.log(x);

// Comparison Operators
// Basically these operators are stored the boolean values.

console.log(ageAshish >= ageNidhi);
// > , < , >= , <=
console.log(ageNidhi >= 18);

const isFullAge = ageNidhi >= 18;

console.log(now - 2001 >= now - 2001);
// JavaScript knows really well, that which function it have to perform first.
// It means JavaScript follows operators precedence rule.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// Here, is the link, go and checkout there all about info operators precedence.

const averageAge = (ageAshish + ageNidhi) / 2;
console.log(ageAshish, ageNidhi, averageAge);

// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>
// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>

// STRINGS & TEMPLATE LITERALS

const myName = "Ashish";
const job = "Software Engineer";
const yearNow = 2022;

// This is The STRINGS WAY

const ashish =
  "I'm " + myName + ", a " + (yearNow - birthYear) + " year's old " + job;
console.log(ashish);

// TEMPLATE LITERALS WAY

const ashishNew = `I'm ${myName}, a ${yearNow - birthYear} year's old ${job}`;
console.log(ashishNew);

// This is the way to add new line space --> \n\
console.log("Strings with \n\
multiple \n\
lines");

// But in TEMPLATE LITERALS we just hace to use backticks for the same.
console.log(`Strings with
multiple
lines`);

// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>
// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>

// If / Else Statements

// This if/else structure of code is known as control Structure.
const myAge = 14;
const isOldEnough = myAge >= 18;

if (isOldEnough) {
  console.log("Ashish can start driving.");
} else {
  const yearsLeft = 18 - myAge;
  console.log(`Ashish is too young, wait another ${yearsLeft} years`);
}

const comeYear = 2001;
let century;

if (comeYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>
// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>

// TYPE CONVERSION

// --> Converting one data type to another data type.
// This can be done only in strings and numebrs.

const inputYear = "2001";
// console.log(inputYear + 21);
// its output will be 200121, because here "2001" is a string now not a numebr anymore.
// That's why it is impossible to add number in string.
// Here the type casting comes in to play.

console.log(Number(inputYear), inputYear);
// we use Numebr(inputYear to convert string into number)
// Now, we can easily add number in string.
console.log(Number(inputYear) + 21);

console.log(Number("Ashish"));
// Output will be Nan <-- This stands for invaid number.
console.log(typeof NaN);
// NaN <-- It is a type of number but not a number, it is a invalid numebr.

console.log(String(23), 23);
// Here, first 23 is string and second 23 is number.

// TYPE COERCION
// this is automatic behviour of JAVASCRIPT to type cast automatically.
// BOOLEAN CONVERSION IS ALSO TYPE COERCION.

console.log("I am " + 21 + " year's old programmer");
// Here, 21 which is numebr is automatically conevrted into string.

console.log("23" - "12" - 3);
// This will give output --> 8, minus operator will perform calculation on after type conevrsion(Automatically done by JavaScript).

console.log("23" + "12" + 3);
// This will give output --> 23123, plus operator is just opposite of minus operator, this needs type conversion which can't be automatically by JavaScript.

// SAME AS MINUS OPERATOR.
console.log("23" / 2);
console.log("23" * 2);

let n = "11" + 1;
n = n - 2;
console.log(n);

// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>
// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>

// TRUTHY & FALSY VALUES

// Falsy values are values that are not exactly false but will become false when we try to convert them into boolean.
// BOOLEAN CONVERSION IS ALSO TYPE COERCION, THAT JAVASCRIPT DOES AUTOMATICALLY BEHIND THE SCENES.

// There are only 5 falsy values :- 0, '' <- empty string, undefined, Nan, null.

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Ashish")); // This is a string, not a empty string.
console.log(Boolean({}));
// {} <<- This is known as a OBEJCT.
console.log(Boolean("")); // Empty string.

//For better understanding, have a look down.

const money = 0;
if (money) {
  console.log("Don't spend it at all !");
  /* Here, money is defined as 0, which is a falsy value and in if condition, javascript converts this 0 into boolean nd as we know
falsy values will come as false after type coercion */
} else {
  console.log("Go and get a job first!");
}
// It's output will be --> Go and get a job first!
// because look at line 295, That's why ouput is different as you expected.

let height = 0;
if (height) {
  console.log("Yay! height is defined");
} else {
  console.log("Oops! height is not defined");
}
// Output will be --> Oops! height is not defined
// But if we set height to a defined value than the ouput will be different.

// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>
// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>

// EQUALITY OPERATORS --> "==" & "==="

const nowAge = 21;
if (nowAge === 21) console.log("You are an adult :D (Strict)");
// "===" This is strict equality operator, This used to check exact equals values, no type coercion works here.

if (nowAge == 21) console.log("You are an adult :D (loose)");
// "==" This is loose equality operator, This can check equality between two different data type objects (string == number), Type coercion takes place here if necessary.

// Like IN 1). -->> "===" "23" === 23 <-- This is false cause "23" is string and 23 is numeber.
// But the same ques. in "==" operator stands for equality, because type coercion takes place and made it True.

// This is recommended always to use "===" strict operator, keeping in mind not to relying on "==" operator's automatically type coercion habit.

/* const favourite = prompt("What is your faourite number");
// console.log(favourite);
// Its output will be a string 23, not a number so, we have to convert it into number for our "===" strict equal operator.
*/

/*
const favourite = Number(prompt("What is your faourite number"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool!, 23 is a amazing number.");
} else if (favourite === 7) {
  console.log("Yay!, 7 is also an cool number");
} else if (favourite === 9) {
  console.log("ooh, 9 That's seems like your lucky number");
} else {
  console.log("Why? Not any number among 23, 7 and 9");
}

// Different equality operator
if (favourite !== 23) {
  console.log("Do you have any problem with number 23");
} */
// same here, != is loose and !== is Strict

// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>
// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>

// LOGICAL OPERATORS

const hasDriveCar = true; // A
const hasGoodVision = true; // B

console.log(hasDriveCar && hasGoodVision);
console.log(hasDriveCar || hasGoodVision);
console.log(!hasDriveCar);

if (hasDriveCar && hasGoodVision) {
  console.log("Ashish can drive the car");
} else {
  console.log("Someone else should drive the car");
}

const isTired = false;
console.log(hasDriveCar && hasGoodVision && isTired);

if (hasDriveCar && hasGoodVision && !isTired) {
  console.log("Ashish is able to drive the car");
} else {
  console.log("Someone else should drive the car");
}

// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>
// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>

// THE SWITCH STATEMENTS
/* REFER SWITCH STATEMENTS NOTES OF JAVA FOR BETTER EXPLANATION */

let day = "Monday";

switch (
  day // day === Monday
) {
  case "Monday":
    console.log("Attend labs");
    break;
  case "Tuesday":
    console.log("Do Web Development");
    break;
  case "Wednesday":
  case "Thursday":
    console.log("Do Java");
    break;
  case "Friday":
    console.log("Do DEVOPS");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Enjoy the Weekend");
    break;
  default:
    console.log("Not a valid day");
}

day = "Wednesday";

if (day === "Monday") {
  console.log("Attend labs");
} else if (day === "Tuesday") {
  console.log("Do Web Development");
} else if (day === "Wednesday" || day === "Thursday") {
  console.log("Do Java");
} else if (day === "Friday") {
  console.log("Do DEVOPS");
} else if (day === "Saturday" || day === "Sunday") {
  console.log("Enjoy the Weekend");
} else {
  console.log("Not a valid day");
}

// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>
// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>

// STATEMENTS & EXPRESSIONS

// Expressions -: These produces values like;
3 + 4;
1991;
true && false && !false;
// Above written are values and examples of expressions.

// Statements -: Statements are like full sentences that translate our actions, so the actions that we want to run the program.
let he = true;
if (he) {
  console.log("BOY");
} else {
  console.log("GIRL");
}
// Above written is the example of statements.

// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>
// <<<<<------------------------------------------------------------------------------------------------------------------------------------------------------------>>>>>

// The Conditional (Ternary) Operator
// This is also like if/else but a shorter and easy version of if/else.
// It doesn't mean that we don't have to use if/else now, we have to use if/else in bigger code, and this ternary operator is only best suitable in easy code program like we did below.

const hisAge = 21;

hisAge >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink water 💧 ");

// This Ternary operator is expression so, it can also provide values. it means we can assign it to a variable, like i did below.

const drink = hisAge >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);
console.log(`I like to drink ${drink}`);
// Like we did it above, we assigned our ternary operator as value to a variable and used it in a placeholder.

// We can assign value of if/else to variable but this is not a good practice.

let drink2;
if (hisAge >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${hisAge >= 18 ? "wine 🍷" : "water 💧"}`);
