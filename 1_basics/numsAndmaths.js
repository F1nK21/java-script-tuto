//++Number++
const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString()); //gets converted into string
// console.log(balance.toFixed(2)); //give decimal value after the given value

const otherNum = 23.6296;
// console.log(otherNum.toPrecision(3)); //gives the roundoff the given value

const otherNum2 = 1000000;
// console.log(otherNum2.toLocaleString('en-IN'));//gives "," after the given type

//++Maths++
// console.log(Math);
// console.log(Math.abs(-4)); //returns the absolute values
// console.log(Math.round(4.7)); //returns the round-off values
// console.log(Math.ceil(4.7)); //returns the round-off and always retuen the greater values
// console.log(Math.floor(4.7)); //returns the round-off and always returns the lower values
// console.log(Math.min(1,2,3,4,5,6)); //returns the min value in the array
// console.log(Math.max(4,5,7,1)); //returns the the max value in the array

// console.log(Math.random());//retuens decimal b/w 0 and 1
console.log(Math.random() * 10 + 1);

const min = 10;
const max = 20;

const result = Math.floor(Math.random() * (max - min + 1) + min); //formula
console.log(result);
