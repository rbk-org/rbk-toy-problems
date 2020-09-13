/*
1-Write a function myFavoriteSong which takes in no arguments (input values), 
but returns an object with the properties title, artist, 
and durationInSeconds. The values of each property is up to you, 
and you can explicitly type out these values, 
but these three properties should exist within the object your function returns.
*/
function myFavoriteSong() {
    return {
        title: "Written in the Scars",
        artist: "The Script",
        durationInSeconds: 227
    }
}


//Calling your function should result in something like:

myFavoriteSong(); //{title: "Countdown", artist: "Beyonce", durationInSeconds: 212}


/*
2-Write a function called nextTwoBusTimes that takes an array of numbers representing (in minutes)
when the busses come for the day.
Your function should return a string which denotes when the nearest bus arrives, and the one after that.
*/
function nextTwoBusTimes(timesArr) {
    var nearest = timesArr[0]
    var nextnearest = timesArr[1]
    for (var i = 1; i < timesArr.length; i++) {
        if (nearest > timesArr[i]) {
            nextnearest = nearest
            nearest = timesArr[i]
        }
        else if (nextnearest > timesArr[i] && nearest < timesArr[i]) {
            nextnearest = timesArr[i]
        }
    }
    return "The next 2 busses arrive in " + nearest + " and " + nextnearest + " minutes."
    // in case the timesArr is sorted return "The next 2 busses arrive in "+ timesArr[0] +" and "+ timesArr[1] +" minutes."


}


//Calling your function should result in something like:

var bus10Schedule = [12, 24, 35, 47, 60];
nextTwoBusTimes(bus10Schedule); //"The next 2 busses arrive in 12 and 24 minutes."



/*

3-Write a function called nextAndLastBusTimes that takes an array of numbers representing (in minutes)
when the busses come for the day.
Your function should return a string which denotes when the nearest bus arrives, and the last for the day.
*/
function nextAndLastBusTimes(timesArr) {
    var nearest = timesArr[0]
    var last = timesArr[0]
    for (var i = 1; i < timesArr.length; i++) {
        if (nearest > timesArr[i]) {
            nearest = timesArr[i]
        }
        else if (last < timesArr[i]) {
            last = timesArr[i]
        }
    }
    return "The next bus is in " + nearest + " minutes. The last bus is in " + last + " minutes."

    // in case the timesArr is sorted return "The next bus is in "+ timesArr[0] +" minutes. The last bus is in "+ timesArr[timeArr.length - 1 ] +" minutes."
}

//Calling your function should result in something like:

var bus10Schedule = [12, 24, 35, 47, 60];
nextAndLastBusTimes(bus10Schedule); //"The next bus is in 12 minutes. The last bus is in 60 minutes.



