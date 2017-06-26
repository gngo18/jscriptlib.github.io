//--------------------------------------------------------DOM Access Methods*/

//Finding DOM nodes by id:
        //document.getElementById(id);
        
//Finding DOM nodes by tag name:
        //document.getElementsByTagName(tagName);
        
//Finding DOM nodes by class name:
        //document.getElementsByClassName(className);
//Finding DOM nodes by query selector:
          //document.querySelector(cssQuery);
          //document.querySelectorAll(cssQuery);

     
//---------JavaScript and use Chrome Dev Tools to see the console.log

//By ID
var hobbiesList = document.getElementById('hobby-list');
console.log(hobbiesList);

//By Tag Name
var hobbies = document.getElementsByTagName('li');
console.log(hobbies);
console.log(hobbies[0].innerHTML);

//By Class Name
var alsoHobbies = document.getElementsByClassName('hobby');
console.log(alsoHobbies);

//By CSS Query
var firstHobby = document.querySelector('ul li.hobby');
console.log(firstHobby);
var allOfThem = document.querySelectorAll('ul li.hobby');
console.log(allOfThem)

//Rendering to HTML
//Each DOM node has an innerHTML attribute
//You can set innerHTML yourself to replace the contents of a node

function favoriteSong(){
	document.getElementById("favorite").innerHTML = "Eric Wright"
}
favoriteSong();

function worstSong(){
	document.getElementById("worst").innerHTML = "Bad and Boujee"
}
worstSong();
function bestSong(){
	document.getElementById("best").innerHTML = "Southern Rock"
}
bestSong();

function addSong(){
	document.getElementById("best").innerHTML += " and Acapella"
}
addSong();

//MORE HTML MANIPULATIONS

// Adding and Deleting Elements

// document.createElement(element)      Create an HTML element
// document.removeChild(element)        Remove an HTML element
// document.appendChild(element)        Add an HTML element
// document.replaceChild(element)       Replace an HTML element
// document.write(text)                 Write into the HTML output stream

function addButton(){
var	btn = document.createElement("BUTTON");
var text= document.createTextNode("I JUST GOT ADDED!!");
btn.appendChild(text)
document.body.appendChild(btn);
}

function removeList(){
	var list = document.getElementById('music')
	document.body.removeChild(list);
}

//function waterToWine(){
	//var textnode = document.createTextNode("Wine!!!")
	//var item = document.getElementById("myList").childNode[0]
	//item.replaceChild(textnode, item.childNodes[0]);
//}

function writeWords(){
	document.write("Tif Added me!!!!");
}