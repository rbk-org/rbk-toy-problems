/*
1-Write a function myFavoriteSong which takes in no arguments (input values), 
but returns an object with the properties title, artist, 
and durationInSeconds. The values of each property is up to you, 
and you can explicitly type out these values, 
but these three properties should exist within the object your function returns.
*/
function myFavoriteSong() {
return {
	title: "Ocean Man"
	artist :"Ween"
	durationInSeconds:"128"
}

}
/*
Calling your function should result in something like:

myFavoriteSong(); //{title: "Countdown", artist: "Beyonce", durationInSeconds: 212}

*/

/*
2-Write a function called nextTwoBusTimes that takes an array of numbers representing (in minutes) 
when the busses come for the day. 
Your function should return a string which denotes when the nearest bus arrives, and the one after that.
*/
function nextTwoBusTimes(timesArr) {
	var first=timesArr[0]
for(var i=0;i<timesArr.length;i++){
	if(first<timesArr[i]){
		first=timesArr[i]
	}
}
timesArr.splice(first,1)
var sec=timesArr[timesArr.length-1]
for (var j=timesArr.length-1;j>0;j--){
	if(sec<timesArr[j]){
		sec=timesArr[j]
	}
}
return "The next 2 busses arrive in "+first+" and "+sec+" minutes."

}
//Calling your function should result in something like:

var bus10Schedule = [12, 24, 35, 47, 60];
nextTwoBusTimes(bus10Schedule); //"The next 2 busses arrive in 12 and 24 minutes."



/*

3-Write a function called nextAndLastBusTimes that takes an array of numbers representing (in minutes) 
when the busses come for the day. 
Your function should return a string which denotes when the nearest bus arrives, and the last for the day.
*/
function nextTwoBusTimes(timesArr) {
	var first=timesArr[0]
for(var i=0;i<timesArr.length;i++){
	if(first>timesArr[i]){
		first=timesArr[i]
	}
}
timesArr.splice(first,1)
var sec=timesArr[timesArr.length-1]
for (var j=timesArr.length-1;j>0;j--){
	if(sec>timesArr[j]){
		sec=timesArr[j]
	}
}
timesArr.splice(sec,1)
var last=timesArr[timesArr.length-1]
for (var j=timesArr.length-1;j>0;j--){
	if(last<timesArr[j]){
		last=timesArr[j]
	}
}
return "The next 2 busses arrive in "+first+" and "+sec+" minutes. The last bus is in "+last+" minutes"

}
Calling your function should result in something like:

var bus10Schedule = [12, 24, 35, 47, 60];
nextAndLastBusTimes(bus10Schedule); //"The next bus is in 12 minutes. The last bus is in 60 minutes.



