//Switch statements
//Very similar to if statements

//How it works:
//The value is evaluated once
// It is then compared with casese
// If a matching case is found, executes code

var marginOfSuperBowlWin = 17;
var result;


switch(marginOfSuperBowlWin){
	case 3:
		result = "That will be a good game";
		break;
	case 7:
		result = "I like it. Pretty close game";
		break;
	case 17:
		result = "Sweet, we can just focus on the commercials";
		break;
	default:
		result = "I don't know, let's see what happens";
}

console.log("Switch Result:",result);