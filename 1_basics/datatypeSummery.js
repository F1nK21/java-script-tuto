//Primitive DataType

//7 Types : String, Number, Boolean, Null, Undefined, Symbol:used to make value unique, BigInt
//E.G.

const score = "100"; //String
const scoreValue = 100.3; //num
const isLoggedin = false; //bool
let userEmail; //undefined
const id = Symbol("123"); //Symbol
const anotherId = Symbol("123"); //symbol
const bigNumber = 1234567890n; //bigint

//Non-Primitive or Reference Datatypes

//3 Types: Array, Objects, Functions

//Is JS dynamically typed or statically typed lang
//Ans : Dynamically typed
//E.G.
const cars = ["Audi", "Lamborgini", "POrshe"]; //Array
let myObj = {
  name: "Kaustav",
  age: 23,
}; //Object
//Function
const myFunction = function () {
  console.log("Hello World");
};
