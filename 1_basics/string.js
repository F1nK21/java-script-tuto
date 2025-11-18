const name = "Kaustav";
const repoCount = 50;

// console.log(`Hello my name is ${name}`);//use baptics for string
// console.log(`My repo count is ${repoCount}`);

const gameName = new String("Clair-Obscur");
// console.log(gameName[0]); //access keyvalue pairs
// console.log(gameName.__proto__); //access object

// console.log(gameName.length);
// console.log(gameName.toUpperCase());//No change in original value

// console.log(gameName.charAt(2));//show the character at that index
// console.log(gameName.indexOf('O'));//shows the index of the given char

// const newString = gameName.substring(0, 5);//Output Clair noes not include the last value
// console.log(newString);

// const anotherString = gameName.slice(-8, 4)//can give "-" nagetive value
// console.log(anotherString);

const newString2 = "    Kaustav     ";
// console.log(newString2.trim());//remove starting and ending spaces

const url = "https://kaustavroy002gmail.com/kaustav%20roy";

// console.log(url.replace("%20", "-"));

// console.log(url.includes("Fink")); //check if the given char is present or not gives result in Boolean

console.log(gameName.split("-"));//Split the given string in parts on the basis of given value

