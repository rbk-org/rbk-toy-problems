<<<<<<< HEAD

// 1-Write a function myFavoriteSong which takes in no arguments (input values), 
// but returns an object with the properties title, artist, 
// and durationInSeconds. The values of each property is up to you, 
// and you can explicitly type out these values, 
// but these three properties should exist within the object your function returns.

function myFavoriteSong(){
	var o = {
		title: "Follow Your Arrow",
		artist: "Kacey Musgraves",
		duration: "300"
	}
}

// Calling your function should result in something like:

myFavoriteSong();

// 2-Write a function called nextTwoBusTimes that takes an array of numbers representing (in minutes) 
// when the busses come for the day. 
// Your function should return a string which denotes when the nearest bus arrives, and the one after that.

function nextTwoBusTimes(array){
return "the nearest bus will arrive in " +array[0]+' minutes, and the one after that will arrive in '+array[1]+' minutes'
}

// Calling your function should result in something like:


var bus10Schedule = [12, 24, 35, 47, 60];
nextTwoBusTimes(bus10Schedule); 


// 3-Write a function called nextAndLastBusTimes that takes an array of numbers representing (in minutes) 
// when the busses come for the day. 
// Your function should return a string which denotes when the nearest bus arrives, and the last for the day.

function nextAndLastBusTimes(array){
return "the nearest bus will arrive in " +array[0]+' minutes, and the last one will arrive in '+array[array.length-1]+' minutes'
}


// Calling your function should result in something like:

var bus10Schedule = [12, 24, 35, 47, 60];
nextAndLastBusTimes(bus10Schedule); 
=======
/*
1-Write a function myFavoriteSong which takes in no arguments (input values), 
but returns an object with the properties title, artist, 
and durationInSeconds. The values of each property is up to you, 
and you can explicitly type out these values, 
but these three properties should exist within the object your function returns.

function myFavoriteSong() {

}

Calling your function should result in something like:

myFavoriteSong(); //{title: "Countdown", artist: "Beyonce", durationInSeconds: 212}

*/

/*
2-Write a function called nextTwoBusTimes that takes an array of numbers representing (in minutes) 
when the busses come for the day. 
Your function should return a string which denotes when the nearest bus arrives, and the one after that.

function nextTwoBusTimes(timesArr) {

}
Calling your function should result in something like:

var bus10Schedule = [12, 24, 35, 47, 60];
nextTwoBusTimes(bus10Schedule); //"The next 2 busses arrive in 12 and 24 minutes."
*/


/*

3-Write a function called nextAndLastBusTimes that takes an array of numbers representing (in minutes) 
when the busses come for the day. 
Your function should return a string which denotes when the nearest bus arrives, and the last for the day.

function nextAndLastBusTimes(timesArr) {

}
Calling your function should result in something like:

var bus10Schedule = [12, 24, 35, 47, 60];
nextAndLastBusTimes(bus10Schedule); //"The next bus is in 12 minutes. The last bus is in 60 minutes.
*/


>>>>>>> 438e988d833412954477946cba8b0bfa77275643
