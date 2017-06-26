//Objects

var emptyObject= {};
var name= "George";
var johnQualls= {
	//Properties
	name 	 :"John Qualls",
	age 	 : 49,
	vocation : "President of Eleven Fifty Academy",
	isRetired: false,
	//Methods
	greeting :function(){
		console.log("Hello, I am" + this.name + "." + "I am" + this.age)
	},
	ageGreet :function(){
		console.log("Hello, I am " + this.name + "." + "I am " + this.age)
	},
	extendGreeting :function(){
		this.greeting();
		this.ageGreet();
	}
};
johnQualls.ageGreet();
johnQualls.extendGreeting();

console.log("#####################")
console.log(johnQualls);
console.log(johnQualls.name);
console.log(johnQualls.age);
console.log(johnQualls.middleName); //Undefined, however allowed to add them on the fly and delete them w/ (delete johnQualls.----)
console.log("--------")

var animal= {
	type		    :"bear",
	habitats        :"woods",
	weight		    :500,
	commonInIndiana :false
}

console.log(animal.weight);
//or
console.log(animal["weight"])

var goodFriend= {
	type		:"Respectful",
	age			:"Happy",
	hobbys		:"Sports or Games",
	closeInArea : false
}

console.log(goodFriend.hobbys)

var movie= {
	type		:"Superhero",
	length		:2,
	happyEnding : false
}


var music= {
	bestGenre		 :"Blues",
	bestArtist		 :["Ed Sheeran", "John Mayer", "BB King"],
	hardestInstrument: "Banjo",
	musicIsAllTheSame: true
}

//properties can be more than just string, booleans, and numbers--can be arrays and other objects

console.log(music.bestArtist[1]);
console.log(Object.keys(music));

//Inheritance---longish way
var car= {
	make :"",
	model:"",
	year :0,
	constructor:function(make, model, year){
		this.make= make;
		this.model= model;
		this.year= year;
	}
};

var myCar = Object.create(car);
console.log(myCar);
myCar.constructor("Toyota", "Solara", 2007);
console.log(myCar.year)

//shorthand way
var book= {
	title: "",
	yearPublished: 0,
	numPages: 0,
	constructor: function(title, yearPublished, numPages){
		this.title= title;
		this.yearPublished= yearPublished;
		this.numPages= numPages;
		return this;
	}
};
var myFavBook = new book.constructor("Steelheart", 2015, 300);
console.log(myFavBook.title)

//shorter hand
//JS is da shizznit

function computer(screenSize, hardDriveSize, hasNumPad){
	this.screenSize=screenSize;
	this.hardDriveSize=hardDriveSize;
	this.hasNumPad=hasNumPad;
}

var myPC= new computer(17, "1 TB", true);
console.log(myPC.screenSize);

//Objects are references

var pcOne = new computer(12, "500gb", false);
var pcTwo = new computer(14, "2TB", true);
var pcThree= pcTwo
console.log(pcOne.hardDriveSize);
console.log(pcTwo.screenSize);

pcTwo.screenSize = 15;
console.log(pcTwo.screenSize);
console.log(pcThree.screenSize);