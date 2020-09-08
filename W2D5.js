/*
1.You wrote a function called guessMyNumber before... that simulated a guessing game: 
the idea is that the function picks a random number between 0 and 5, 
and you invoke the function with your guess -- if you and the function are thinking of the same number,
 you win! Otherwise, the function informs you that your guess was incorrect. 
 A version of this game might look like this (the randInt function is included for convenience):
*/
 function guessMyNumber(n) { 
 if (n > 5) { 
 return 'Out of bounds! Please try a number between 0 and 5.'; 
 } else if (n === randInt(5)) { 
 return 'You guessed my number!'; 
 } 
 return "Nope! That wasn't it!"; 
 } 
 function randInt(n) { 
 return Math.floor(Math.random() * (n + 1)) 
 }

 /*
 Read and test both of the functions in your console.
 and then invoke the functions from the console) and affirm that you understand how they work; 
 then, answer the following questions: 
 At present, the guess should be between 0 and 5. 
 We can think of 5 as the upper bound of the guess. 
 How many times is the upper bound repeated? 
 twice
 What if we wanted to change the upper bound to 6? 
 How many changes would be required? 
 two:(n>6)/(n === randInt(6))
 Create a variable called upperBound to hold the upper bound, and then reference it instead of the number 5. 
 If you were asked to change the upper bound to some other number (e.g. 7), you should only have to make one change. 
 Modify guessMyNumber so that if the guess is incorrect, guessMyNumber includes the correct guess in its output, 
  e.g. 'Nope! The correct number was: X' (where X would have been the correct number).
  */
 function guessMyNumber(n) { 
 	var upperBound = 5
 	var guessMyNumber= randInt(upperBound)
 if (n > upperBound) { 
 return 'Out of bounds! Please try a number between 0 and 5.'; 
 } else if (n === randInt(upperBound)) { 
 return 'You guessed my number!'; 
 } 
 return ("Nope! The correct number was:"+ guessMyNumber)


 // Read and test both of the functions in your console.
 // and then invoke the functions from the console) and affirm that you understand how they work; 
 // then, answer the following questions: 
 // At present, the guess should be between 0 and 5. 
 // We can think of 5 as the upper bound of the guess. 
 // How many times is the upper bound repeated? 
 // one time

 What if we wanted to change the upper bound to 6? 
 one time


 // How many changes would be required? 
 // Create a variable called upperBound to hold the upper bound, and then reference it instead of the number 5. 
 // If you were asked to change the upper bound to some other number (e.g. 7), you should only have to make one change. 
 // Modify guessMyNumber so that if the guess is incorrect, guessMyNumber includes the correct guess in its output, 
 //  e.g. 'Nope! The correct number was: X' (where X would have been the correct number).
 //  or 
  (var i = 0; i =<7; i++)
 
// 2. At present, the guessing game picks a new random number every time it is 'played' (invoked). 
// Now that you know how to make information persistent between function invocations, 
// change the guessing game so that it picks a random number once and allows you to guess until you get the correct answer.

function guessMyNumber(n) { 
 if (n > 5) { 
 return 'Out of bounds! Please try a number between 0 and 5.'; 
 } else if (n === randInt(5)) { 
 return 'You guessed my number!'; 
 } 
 return  (n+1); 
 console.log (n+1);
  if (n > 5) { 
 return 'Out of bounds! Please try a number between 0 and 5.'; 
 } else if (n === randInt(5)) { 
 return 'You guessed my number!'; 

 } 
 function randInt(n) { 
 return Math.floor(Math.random() * (n + 1)) 
 }

 /*
2. At present, the guessing game picks a new random number every time it is 'played' (invoked). 
Now that you know how to make information persistent between function invocations, 
change the guessing game so that it picks a random number once and allows you to guess until you get the correct answer.
*/
var upperBound = 5
var randomNumber = Math.floor(Math.random() * (upperBound + 1)) 
function guessMyNumber(n) { 
 if (n > upperBound) { 
 return 'Out of bounds! Please try a number between 0 and 5.'; 
 } else if (n === randomNumber) { 
 return 'You guessed my number!'; 
 } 
 return ("Nope! please try again")
 } 
 
 /*
3.it would be really cool if, after the answer was guessed, the message included the number of guesses 
it had taken to find the answer; for example, 'You guessed my number in 3 guesses.'
*/
var upperBound = 5
var randomNumber = Math.floor(Math.random() * (upperBound + 1)) 
var counter=0
function guessMyNumber(n) { 
 if (n > upperBound) { 
 return 'Out of bounds! Please try a number between 0 and 5.'; 
 } else if (n === randomNumber) { 
 return "You guessed my number in " + counter " guesses"; 
 } counter++
 return ("Nope! please try again")
 } 
 
 /*



// 3.it would be really cool if, after the answer was guessed, the message included the number of guesses 
// it had taken to find the answer; for example, 'You guessed my number in 3 guesses.'



4.Implement a way to limit the number of guesses that can be made so that a player loses after exceeding the limit.
*/
var upperBound = 5
var randomNumber = Math.floor(Math.random() * (upperBound + 1)) 
var counter=0
function guessMyNumber(n) { 
	counter++
 if (n > upperBound) { 
 return 'Out of bounds! Please try a number between 0 and 5.'; 
 } else if (n === randomNumber) { 
 	if(counter===1){
 		counter=0
 		return "Congratulations! You guessed my number on the first try!"
 	}
 console.log ("You guessed my number in " + counter + " guesses")
 counter=0
 return""
 }
 if (counter===10){
 	return("you lost")
 }
 return ("Nope! please try again")
 } 
 /*
5.Keep track of a high score (the lowest number of guesses) between games, and, 
when the correct number has been guessed in a record number of times, 
include in the message something that indicates that a new high score has been set.
*/
var upperBound = 5
var randomNumber = Math.floor(Math.random() * (upperBound + 1)) 
var counter=0
var highscore=10
function guessMyNumber(n) { 
	counter++
 if (n > upperBound) { 
 return 'Out of bounds! Please try a number between 0 and 5.'; 
 } else if (n === randomNumber) { 
 	randomNumber = Math.floor(Math.random() * (upperBound + 1))
 	if(counter===1){
 		counter=0
 		return "Congratulations! You guessed my number on the first try!"
 	}
 console.log ("You guessed my number in " + counter + " guesses")
 counter=0
 return""
 }
 if (counter===10){
 	randomNumber = Math.floor(Math.random() * (upperBound + 1))
 	return("you lost")
 }
 return ("Nope! please try again")
 } 
 /*
6.Whenever a player wins, increase the difficulty by increasing the upperBound;
 whenever a player loses, decrease the difficulty by decreasing the upperBound.
 */
var upperBound = 5
var randomNumber = Math.floor(Math.random() * (upperBound + 1)) 
var counter=0
var highscore=10
function guessMyNumber(n) { 
	counter++
 if (n > upperBound) { 
 return 'Out of bounds! Please try a number between 0 and 5.'; 
 } else if (n === randomNumber) { 
 	upperBound++
 	randomNumber = Math.floor(Math.random() * (upperBound + 1))
 	if(counter===1){
 		counter=0
 		return "Congratulations! You guessed my number on the first try!"
 	}
 console.log ("You guessed my number in " + counter + " guesses")
 counter=0
 return""
 }
 if (counter===10){
 	upperBound--
 	randomNumber = Math.floor(Math.random() * (upperBound + 1))
 	return("you lost")
 }
 return ("Nope! please try again")
 } 
/*
7.Implement a high/low hinting system to tell the the user that the guess is either too high or too low. 
You may want to increase the upperBound on the guess.
*/
var upperBound = 15
var randomNumber = Math.floor(Math.random() * (upperBound + 1)) 
var counter=0
var highscore=10
function guessMyNumber(n) { 
	counter++
 if (n > upperBound) { 
 return 'Out of bounds! Please try a number between 0 and 5.'; 
 } else if (n === randomNumber) { 
 	upperBound++
 	randomNumber = Math.floor(Math.random() * (upperBound + 1))
 	if(counter===1){
 		counter=0
 		return "Congratulations! You guessed my number on the first try!"
 	}
 console.log ("You guessed my number in " + counter + " guesses")
 counter=0
 return("")
 }
 if (counter===10){
 	upperBound-=1
 	randomNumber = Math.floor(Math.random() * (upperBound + 1))
 	return("you lost")
 }
 if(n>1.5*randomNumber){
 	console.log("too high")
 }else if (n<0.5*randomNumber){
 	console.log("too low")}
 return ("Nope! please try again")
 } 
 /*
.All of the following exercises involve augmenting the guessMyNumber function.
*/

var upperBound = 15
var randomNumber = Math.floor(Math.random() * (upperBound + 1)) 
var counter=0
var highscore=10
function guessMyNumber(n) { 
	counter++
 if (n > upperBound) { 
 return 'Out of bounds! Please try a number between 0 and 5.'; 
 } else if (n === randomNumber) { 
 	upperBound++
 	randomNumber = Math.floor(Math.random() * (upperBound + 1))
 	if(counter===1){
 		counter=0
 		return "Congratulations! You guessed my number on the first try!"
 	}
 console.log ("You guessed my number in " + counter + " guesses")
 counter=0
 return("")
 }
 if (counter===10){
 	upperBound-=1
 	randomNumber = Math.floor(Math.random() * (upperBound + 1))
 	return("you lost")
 }
 if(n>1.5*randomNumber){
 	console.log("too high")
 }else if (n<0.5*randomNumber){
 	console.log("too low")}
 return ("Nope! please try again")
 }








