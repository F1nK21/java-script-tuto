// declare constant
const accountId = 144553;
let accountEmail = "kaustavroy002@gmail.com";
/* prefer not to use var.
Issues in block scope and functional scope */
var accountPassword = "12345";
// never use like this
accountCity = "Delhi"; //can also be used without specifying type
let accountState;

accountEmail = "freakyray002@gmail.com";
accountPassword = "629645";
accountCity = "West Bengal";

// accountId = 244551;
// console.log(accountId);
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
