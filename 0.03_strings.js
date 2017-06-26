//Strings are a group of characers and MUST go in "" or ''

console.log("I'm intercontinental when I eat French Toast");
var tweet = "Kanye is broke. No joke!";
console.log(tweet);
var username = 'gngo18';
console.log(username);

var birthCity= "Indianapolis"
var birthState= "Indiana"
console.log(birthCity + birthState)
//console.log(birthCity + birthstate) = console.log(birthCity + Indiana)

//Mixing Strings and Integers
var ageInAugust = 40;
var highSchool = "Carmel HS";
var graduatedHS = 1994;

console.log(highSchool + ", " + graduatedHS);
console.log("My age in August:",ageInAugust);

var graduationYear = 2014;
var HS = "Crawfordsville High School";
var iGraduated = "I graduated from ";
console.log("I graduated from " + HS + " in " + graduationYear);
console.log(iGraduated + HS + " in " + graduationYear);

//String Methods (functions)
console.log(highSchool.length);
console.log(highSchool.toUpperCase());
console.log(highSchool.toLowerCase());
console.log(highSchool.split(" "));
//Slice before the the specified number
console.log(highSchool.slice(3));