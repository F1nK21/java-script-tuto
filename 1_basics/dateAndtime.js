//Dates
// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(typeof(myDate));

// let myCreatedDate = new Date(2025, 0, 23, 14, 30, 56)//month start from 0 in js for arrey
// let myCreatedDate = new Date("2025-01-14")//yy-mm-dd
let myCreatedDate = new Date("01-14-2023"); //mm-dd-yy
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.getTime());

let myTimeStamp = Date.now(); //gives format in mili seconds
// console.log(myTimeStamp);
// console.log(Math.floor(myTimeStamp/1000));

let anotherDate = new Date();
console.log(anotherDate.getDay());
console.log(anotherDate.getMonth());

// `${anotherDate.getDay()} and time is`//Syntax

anotherDate.toLocaleDateString("default", {
  weekday: "long",
});
