//For loops
//Similar to while loops in that they let us repeat statements
//However more specialized

//for(counter; condition; increment)

// for(var i =1; i<50; i+=5){
// 	console.log(i);
// }

// for(var i =0; i<=100; i+=5){
// 	console.log(i);
// }

// for(var i =3; i<40; i+=7){
// 	console.log(i);
// }

//break statement <- covered in switch earlier
//breaks are used to prematurely exit a loop

for(var i =0; i<20; i++){
	console.log("testing:", i);
	if(i===13){
		console.log("Found 13");
		break;
	}
}

//for in loops
//do while loops