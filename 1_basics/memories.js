// Stack and Heap memory in javascript
//Stack is used in Premitive Datatype
//Heap is used in Reference DataType
// Stack example
let myFullname = "Kaustav Roy";
let anotherName = myFullname;
anotherName = "Fink Ray";
//Stores a copy of previous value
console.log(myFullname);
console.log(anotherName);

// Heap example
//Provide the reference of the original value
let userOne = {
  email: "kaustavroy002@gmail.com",
  upi: "kaustavroy002@ok-sbi",
};

let userTwo = userOne;

userTwo.email = "finkray002@gmail.com" //access using "." for objects

console.log(userOne.email);
console.log(userTwo.email);

