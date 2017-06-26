//Arrays are a collection of things
//Define them using []s

var rainbowColors = ["Red","Orange","Yellow","Green","Blue","Indigo","Violet"];
var raceWinners = [33, 72, 64];
var myFavorite = ["Broccoli",2,"T-Swizzle"]

console.log(rainbowColors);

//Arrays have indexes

var countries = ["USA", "Russia", "Germany"];
//indexes          0        1          2

// console.log(countries[])

//Iterating over arrays
//Tricky at first, but gets easy

var movies = ["Die Hard", "Dumb and Dumber", "LOTR", "The Departed", "Fight Club", "Harry Potter"]

for(var i = 0; i<movies.length; i++){
	console.log("The index is:",i)
	console.log(movies[i])
}

var actors = ["RDJ","Chris Hemsworth","Mark Ruffalo", "Chris Evans"]

for(var i = 0; i<actors.length; i++){
	console.log("The index is:", i)
	console.log(actors[i])
}