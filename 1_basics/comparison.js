// console.log(2 > 1); //greater then
// console.log(2 >= 1); //greater then equals to
// console.log(2 < 1); //less then
// console.log(2 <= 1); //less then equals to
// console.log(2 == 1); //is it equal or not
// console.log(2 != 1); //not equals to

console.log("2" != 1); //"2" gets converted into number
console.log("02" > 1); //"02" gets converted into number

// ==**Avoid this type of code**==

//null conversion may vary b/w 0 and NaN
console.log(null > 0); //returns false
console.log(null == 0); //returns false
console.log(null >= 0); //returns true *null gets converted in to 0

//returns false for all 3 code
console.log(undefined < 0);
console.log(undefined > 0);
console.log(undefined == 0);

// === strict check (also checks datatypes)
console.log("2" === 2); //returns false
