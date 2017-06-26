//Functions: executes action or actions and allows us to reuse code without retyping it and makes code cleaner

function hello(){
	console.log("hello world");
}

hello();

function printOneNumber(){
	console.log(1);
}

printOneNumber();

function divider(){
	console.log("--------")
}

divider();

//Scope with variables
//Think as rifle scope



function add(){
	var x = 2
	var y = 7
	console.log(x+y)
}

add();

function subtract(){
	var x = 4
	var y = 1
	console.log(x-y)
}

subtract();

divider();

//Parameters/Arguments (Basically the same thing)
	//Parameters are what the names in the function definition
	//Arguments are what is passed to the function

function numberEntered(x){//parameter (x)
	console.log("Number entered:",x);
}

numberEntered(7);//argument


//Can have as many parameters as you want

function addTwoNums(x,y){
	console.log(x+y)
}

addTwoNums(4,7);

divider();

//Return Keyword
//When JS hists the return keyword, it will stop executing the function, and return it's argument

function mood(){
	return "I'm feeling great!";
}

console.log(mood()); //mood becomes the argument

function multiply (x,y){
	return x*y;
}

console.log(multiply(3,8));

//write a function that takes 2 arguments, a first and last name and combines them to return firstname lastname
// print return value to function

function addNames (firstname, lastname){
	return firstname+lastname;
}

console.log(addNames("George ", "Go" ));

//divider();

//Loops (small preview)

for(var i = 0, i<5; i++){
	divider();
}