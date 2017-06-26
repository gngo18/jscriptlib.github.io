//Booleans only takes the value of true or false

var tired = false;
var awake = true;
var hungry = true;
var sad = false
var happyToWorkWithYall = true;
var corny = true;

console.log(corny)

//Comparisons
// == means Equality
// === meanns strict equality
// != Inequality
// !== strict inequality
// >
// <
// >= greater than or equal to
// <=

console.log(3<2)
console.log(185*4 > 200*5)

console.log("  ")
//when checking for equality, you always want to use === over the == in JS
2 == "2"  //true
2 === "2" //false
2 === 2   //true

//inequality
"Joey" !== "Tif"  //true
10 !== 10         //false

//Logical Operators
//Operator     Meaning     True Expressions
// &&          AND	        4 > 0 && -2 < 0    TRUE
// ||           or          4 > 0 || -2 > 0    TRUE
// !            not			!(5<0)             TRUE
console.log("&& operator:", 2===2 && 1===1);
console.log("|| operator:", 2===2 || 2===1);
console.log("!= operator:", 2 != 1);