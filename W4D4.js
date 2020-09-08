/*
1-Write a function myFavoriteSong which takes in no arguments (input values), 
but returns an object with the properties title, artist, 
and durationInSeconds. The values of each property is up to you, 
and you can explicitly type out these values, 
but these three properties should exist within the object your function returns.
*/
function myFavoriteSong(title,artist,durationInSeconds) {
	var object={}
	object.title=title;
	object.artist=artist;
	object.durationInSeconds=durationInSeconds;

	return object;
}
var favorite=myFavoriteSong("Till I collapse","Eminem",298);
// this is on how you could assign value 
favorite.durationInSeconds=300;
console.log(favorite);

//********************** this is how you ask for ***************/
function myFavoriteSong(title,artist,durationInSeconds) {
	var object={title: "Countdown", artist: "Beyonce", durationInSeconds: 212}

	return object;
}

console.log(myFavoriteSong());
/*
Calling your function should result in something like:

myFavoriteSong(); //{title: "Countdown", artist: "Beyonce", durationInSeconds: 212}

*/

/*
2-Write a function called nextTwoBusTimes that takes an array of numbers representing (in minutes) 
when the busses come for the day. 
Your function should return a string which denotes when the nearest bus arrives, and the one after that.
*/
var bus10Schedule = [12, 24,39, 35, 47, 60];
function nextTwoBusTimes(timesArr) {
	//array must be sorted
		timesArr=timesArr.sort();
	//return and shift values;
	return "The next 2 busses arrive in "+timesArr.shift()+" and "+timesArr.shift()+" minutes."

}
//nextTwoBusTimes(bus10Schedule); //"The next 2 busses arrive in 12 and 24 minutes."
console.log(nextTwoBusTimes(bus10Schedule))
/*

3-Write a function called nextAndLastBusTimes that takes an array of numbers representing (in minutes) 
when the busses come for the day. 
Your function should return a string which denotes when the nearest bus arrives, and the last for the day.

Calling your function should result in something like:

var bus10Schedule = [12, 24, 35, 47, 60];
nextAndLastBusTimes(bus10Schedule); //"The next bus is in 12 minutes. The last bus is in 60 minutes.
*/


function nextAndLastBusTimes(timesArr) {
	//array must be sorted
		timesArr=timesArr.sort();
	//return and shift values;
	return"The next bus is in "+timesArr.shift()+" minutes. The last bus is in "+timesArr.pop()+" minutes."


}
var bus10Schedule = [12, 24, 35, 47, 60];
//"The next bus is in 12 minutes. The last bus is in 60 minutes.
console.log(nextAndLastBusTimes(bus10Schedule)); 

