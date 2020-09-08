/*
1-Write a function myFavoriteSong which takes in no arguments (input values), 
but returns an object with the properties title, artist, 
and durationInSeconds. The values of each property is up to you, 
and you can explicitly type out these values, 
but these three properties should exist within the object your function returns.
*/
function myFavoriteSong() {
return {
    title:'on the floor',
    artist:'Jennifer lopez',
    durationInSeconds:225
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
    timesArr1=timesArr.sort((a,b)=>a-b)
    return `The next 2 busses arrive in ${timesArr1[0]}and ${timesArr1[1]} minutes.`
}
/*
Calling your function should result in something like:

var bus10Schedule = [12, 24, 35, 47, 60];
nextTwoBusTimes(bus10Schedule); //"The next 2 busses arrive in 12 and 24 minutes."
*/


/*

3-Write a function called nextAndLastBusTimes that takes an array of numbers representing (in minutes) 
when the busses come for the day. 
Your function should return a string which denotes when the nearest bus arrives, and the last for the day.
*/
function nextAndLastBusTimes(timesArr) {
var res =timesArr.sort((a,b)=>a-b)
return `The next bus is in ${res[0]} minutes. The last bus is in ${res[res.length-1]} minutes`
}
/*
Calling your function should result in something like:

var bus10Schedule = [12, 24, 35, 47, 60];
nextAndLastBusTimes(bus10Schedule); //"The next bus is in 12 minutes. The last bus is in 60 minutes.
*/


