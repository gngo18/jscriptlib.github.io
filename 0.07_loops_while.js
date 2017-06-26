//Loops are used to do things multiple times easily
//The while loop tells JS to repeaet statements until a condition is false

//Example
var score = 0;

while(score<10){
	score++;//Shorthand for score= score +1
	console.log("Score is:",score);
}

//Another example
var age = 0

while(age<100){
	age+=10; //SH for age=age+10
	console.log("Our age is:",age);
}
if(age === 100){
	console.log("I'm a century old! Literally..");
}

//Write a while loop that prints 10-100 by 10s at 50 half way there

var count = 0;

while(count<100){
	count+=10;
	console.log(count);
if(count===50){
	console.log("Half way there!");
}
}
