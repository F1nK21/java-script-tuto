// //array
// //Array in Js is re-sizable

// const myArr = [0, 1, 2, 3, 4, 5];
// const marvelHeros = ["Hulk", "Thor", "Fury"];
// const dcHeros = ["Flash", "BatMan", "SuperMan"];

// const myArr2 = new Array(1, 2, 3, 4, 5);
// console.log(myArr[1]);

// //Array Methods

// //push, pop

// myArr.push(6); //6 gets pushed in the array list
// myArr.push(9); //9 gets pushed in the array list
// myArr.pop(); //last value in the array gets deleted

// //shift, unshift

// myArr.unshift(11); //11 gets added to at the beginning of the array list
// myArr.shift(); //element gets removed from the begenning of the array list

// // includes, indexOf, join

// console.log(myArr.includes(9)); //checks if the given value is present in the arrey or not retuers boolean value in this case false
// console.log(myArr.indexOf(4)); //shows the value in that index in this case print 4
// const newArr = myArr.join(); //Adds all the elements of an array into a string, separated by the specified separator string.
// console.log(newArr);
// console.log(typeof newArr); //shows the type of array in this case after using join() gives String as output

// //slice, splice

// console.log("A ", myArr);
// const myn1 = myArr.slice(1, 3); //return range from given 1st index to given last index-1 inthis case returns [1, 2]
// console.log("After Slice", myn1);
// console.log("B ", myArr);
// const myn2 = myArr.splice(1, 3); //return range from given 1st inedx to given last index in this case retuens [1, 2, 3] and manipulates the original array in this case returns [0, 4, 5]
// console.log("After Splice", myn2);
// console.log(myArr);

// //array behavior
// //concat, spread

// marvelHeros.push(dcHeros);
// console.log(marvelHeros); //array takes any type of entry data in this case returns the whole dcHeros as an element aka [ 'Hulk', 'Thor', 'Fury', [ 'Flash', 'BatMan', 'SuperMan' ] ]

// const allHeros = marvelHeros.concat(dcHeros); //Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// console.log(allHeros);

// const all_Heros = [...marvelHeros, ...dcHeros]; //spread out values
// console.log(all_Heros);

// const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// const combArr = anotherArr.flat(Infinity); //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// console.log(combArr);

// console.log(Array.isArray("Kaustav")); //checks if the given datatype is array or not. retuens boolean
// console.log(Array.from("Kaustav")); //converts given value to array
// console.log(Array.from({ name: "Kaustav" })); //intresting

// let score1 = 50;
// let score2 = 100;
// let score3 = 200;

// console.log(Array.of(score1, score2, score3)); //Returns a new array from a set of elements.


//++++++++++++++++++++++Corrected++++++++++++++++++++++++++


// Array
// Arrays in JavaScript are resizable and can hold mixed data types

const myArr = [0, 1, 2, 3, 4, 5];
const marvelHeros = ["Hulk", "Thor", "Fury"];
const dcHeros = ["Flash", "BatMan", "SuperMan"];

const myArr2 = new Array(1, 2, 3, 4, 5);
console.log(myArr[1]); // prints element at index 1 → 1

// Array Methods

// push, pop
myArr.push(6); // adds 6 at the end of the array
myArr.push(9); // adds 9 at the end of the array
myArr.pop();   // removes the last element (here 9)

// shift, unshift
myArr.unshift(11); // adds 11 at the beginning of the array
myArr.shift();     // removes the first element (here 11)

// includes, indexOf, join
console.log(myArr.includes(9)); // checks if 9 exists in the array → false
console.log(myArr.indexOf(4));  // returns the index of 4 → 4
const newArr = myArr.join();    // joins all elements into a string separated by commas
console.log(newArr);
console.log(typeof newArr);     // type is string

// slice, splice
console.log("A ", myArr);
const myn1 = myArr.slice(1, 3); // returns elements from index 1 up to index 3 (exclusive) → [1, 2]
console.log("After Slice", myn1);
console.log("B ", myArr);
const myn2 = myArr.splice(1, 3); // removes elements from index 1 to 3 (inclusive) and returns them → [1, 2, 3]
console.log("After Splice", myn2);
console.log(myArr);              // original array is modified → [0, 4, 5]

// Array behavior
// concat, spread
marvelHeros.push(dcHeros);
console.log(marvelHeros); // pushes dcHeros as a single element → [ 'Hulk', 'Thor', 'Fury', [ 'Flash', 'BatMan', 'SuperMan' ] ]

const allHeros = marvelHeros.concat(dcHeros); // merges arrays into a new one → [ 'Hulk', 'Thor', 'Fury', [Array], 'Flash', 'BatMan', 'SuperMan' ]
console.log(allHeros);

const all_Heros = [...marvelHeros, ...dcHeros]; // spreads elements of both arrays into a new one
console.log(all_Heros);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const combArr = anotherArr.flat(Infinity); // flattens nested arrays completely
console.log(combArr);

console.log(Array.isArray("Kaustav")); // checks if "Kaustav" is an array → false
console.log(Array.from("Kaustav"));    // converts string into array of characters
console.log(Array.from({ name: "Kaustav" })); // returns [] because object is not iterable (needs a mapping function)

// Array.of
let score1 = 50;
let score2 = 100;
let score3 = 200;

console.log(Array.of(score1, score2, score3)); // creates a new array from given values → [50, 100, 200]