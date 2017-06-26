 //If/Else statements
//Else: Give JS an alternative statement to execute

var elevatorUp = true;
var elevatorDown = true;
var elevatorBroken = true;
var elevatorStuckWhileWeAreOnIt = true;
var elevatorNumber = 13;

if(elevatorUp === true){
	console.log("Going up");}else{
		console.log("Going down");
	}

//With an if/else statement
//Describe if the elevator is broken or not

if(elevatorBroken === true){
	console.log("The elevator is broken");
}
else{
	console.log("The elevator is not broken");
}

//Combining variable types for conditionals
if(elevatorStuckWhileWeAreOnIt && elevatorNumber === 13){
	console.log("Today is NOT our lucky day");
}
else{
	console.log("Total Frat Move");
}