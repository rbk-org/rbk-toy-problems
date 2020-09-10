/*
1-Write a function myFavoriteSong which takes in no arguments (input values), 
but returns an object with the properties title, artist, 
and durationInSeconds. The values of each property is up to you, 
and you can explicitly type out these values, 
but these three properties should exist within the object your function returns.



Calling your function should result in something like:

myFavoriteSong(); //{title: "Countdown", artist: "Beyonce", durationInSeconds: 212}

*/
function myFavoriteSong() {
	return {
	title: "Love song",
	 artist: "Rihanna",
	  durationInSeconds: 180
	}

}

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

function nextTwoBusTimes(array){
	var bus1=array[0];
	var bus2=array[1];
	for(var t=2;t<array.length;t++){
		if(array[t]<bus1){
			if(array[t]<bus2){
				bus2=array[t]
			}bus1=array[t]
		}
	}if(bus1>bus2){
		return "The next 2 busses arrive in "+bus2+" and "+bus1+" minutes."
	}else {
		return "The next 2 busses arrive in "+bus1+" and "+bus2+" minutes."
	}
}
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
function nextAndLastBusTimes(array){
	var last=array[0];
	var first=array[0]
	for(var i=1;i<array.length;i++){
		if(array[i]>last){
        last=array[i]
		}
		if(array[i]<first){
			first=array[i]
		}
	}
	return "The next bus is in "+first+" minutes. The last bus is in "+last+" minutes."
}


