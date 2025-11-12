let score = 33; // number type data
let score1 = "33abc"; // string type data
let score2 = null;
let score3 = true;

console.log(typeof score);
console.log(typeof score1);

// type conversion
// from All to Number
let valueInNumber = Number(score1);
let valueUpdate = Number(score2);
let valueUpdate2 = Number(score3);

console.log(typeof valueInNumber);
console.log(valueInNumber); //return NaN aka Not a Number
console.log(valueUpdate);
console.log(valueUpdate2);

/* 33 gets easily converted into 33
    "33abs" => NaN
    true => 1 ; false => 0
*/

// from All to Boolean
let isLoggedIn = 1;
let isLoggedOut = 0;
let isLoggedIn2 = "";
let isLoggedIn3 = "Kaustav";

let booleanIsLoggedIn = Boolean(isLoggedIn);
let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
let booleanIsLoggedIn3 = Boolean(isLoggedIn3);
let booleanIsLoggedOut = Boolean(isLoggedOut);

console.log(booleanIsLoggedIn); //returns true
console.log(booleanIsLoggedIn2); //returns false
console.log(booleanIsLoggedIn3); //returns true
console.log(booleanIsLoggedOut); //returns false

/* 1 => true, 0 => false
    "" => false
    "Kaustav" => true */

// form All to String
let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

// **Operation**
let value = 3;
let negValue = -value;
console.log(negValue);

// console.log(2+2); //addition
// console.log(2-2); //substraction
// console.log(2*2); //multiplication
// console.log(2**3); //power
// console.log(2/2); //division
// console.log(2%2); //remainder

let str1 = "Hello";
let str2 = " Kaustav";

let str3 = str1 + str2;
// console.log(str3); //returns Hello Kaustav
// console.log(1 + "2"); //returns 12
// console.log("1" + 2); //returns 12
// console.log("1" + 2 + 2); //returns 122
// console.log(1 + 2 + "2"); //returns 32
// console.log(+true); // returns 1
// console.log(+""); //returns 0

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
gameCounter++; //postfix ops
console.log(gameCounter);
++gameCounter; //prefix ops
console.log(gameCounter);
