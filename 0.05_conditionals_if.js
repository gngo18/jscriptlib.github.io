//If statements: Are used to tell JS which statements to execute based on a condition

var isOn = true;
var isHot = true;

//Shorthand way for checking for true

if(isOn){
	console.log("The light is on");
}

//Longhand way for checking for true
if(isOn === true){
	console.log("The light is still on");
}

//Conditional Operators: AND, OR, NOT
//AND --> &&
//OR --> ||
//NOT -->!

isOn = true
isHot = true

if(isOn && isHot){
	console.log("The light is on and it is hot");
}

if(isOn || isHot){
	console.log("I'm not sure what to say");
}

if(!isOn){
	console.log("The light is not on");
}
