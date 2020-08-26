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
 At present, the guess should be between 0 and 5. True
 We can think of 5 as the upper bound of the guess. T
 How many times is the upper bound repeated?  1
 What if we wanted to change the upper bound to 6? We change 5 to 6 here -->  else if (n === randInt(6))
 How many changes would be required? only one

 Create a variable called upperBound to hold the upper bound, and then reference it instead of the number 5. 
 If you were asked to change the upper bound to some other number (e.g. 7), you should only have to make one change.
*/

 function guessMyNumber(n,upperBound ) { 
 if (n > upperBound ) { 
 return 'Out of bounds! Please try a number between 0 and '+ upperBound  ; 
 } else if (n === randInt(upperBound )) { 
 return 'You guessed my number!'; 
 } 
 return "Nope! That wasn't it!"; 
 } 

 /*

 Modify guessMyNumber so that if the guess is incorrect, guessMyNumber includes the correct guess in its output, 
  e.g. 'Nope! The correct number was: X' (where X would have been the correct number).
*/
  function guessMyNumber(n,upperBound ) { 
  var x = randInt(upperBound)
 if (n > upperBound ) { 
 return 'Out of bounds! Please try a number between 0 and '+ upperBound .'; 
 } else if (n === x) { 
 return 'You guessed my number!'; 
 } 
 return "Nope! The correct number was: "+ x ; 
 } 
 /*
 
2. At present, the guessing game picks a new random number every time it is 'played' (invoked). 
Now that you know how to make information persistent between function invocations, 
change the guessing game so that it picks a random number once and allows you to guess until you get the correct answer.
*/

unction guessMyNumber(n,upperBound ) { 
  var f = -1;
  var c; 
  if (f === -1){
    c = randInt(upperBound );//2
    f = 1;
  }
  if (n > upperBound ) { 
 return 'Out of bounds! Please try a number between 0 and '+ upperBound  ; 
 } else if (n === c ) { 
   f = -1
  return 'You guessed my number!'; 
 } 
 else
 {
   return "Nope! That wasn't it!" ;
 
 }
 }  
  guessMyNumber(0,3)

/*
3.it would be really cool if, after the answer was guessed, the message included the number of guesses 
it had taken to find the answer; for example, 'You guessed my number in 3 guesses.'
*/

function guessMyNumber(n,upperBound ) { 
  var f = -1;
  var c; 
  
  if (f === -1){
    var counter = 0
    c = randInt(upperBound );//2
    f = 1;
  }
  if (n > upperBound ) { 
 return 'Out of bounds! Please try a number between 0 and '+ upperBound  ; 
 } else if (n === c ) { 
   f = -1

  return 'You guessed my number in '+ counter +'  guesses.'
 } 
 else
 { 
   counter = counter +1
   console.log( counter)
   return "Nope! That wasn't it!  ";
 
   }
 }

/*
 Tangential Problem: What happens if you get the number right on the first try? Does it say, 'You guessed my number in 
 1 guesses.'? 
 If so, perhaps the wording should be different? Some better ideas are: 
       'You guessed my number in 1 guess.', 
       'Congratulations! You guessed my number on the first try!'
*/

function guessMyNumber(n,upperBound ) { 
  var f = -1;
  var c; 
  
  if (f === -1){
    var counter = 0
    c = randInt(upperBound );//2
    f = 1;
  }
  if (n > upperBound ) { 
 return 'Out of bounds! Please try a number between 0 and '+ upperBound  ;
 	}
 	else if (n===c && counter === 0) {
 		return 'Congratulations! You guessed my number on the first try!'
 	}
 	 else if (n === c ) { 
   f = -1

  return 'You guessed my number in '+ counter +'  guesses.'
 } 
 else
 { 
   counter = counter +1
   console.log( counter)
   return "Nope! That wasn't it!  " +c;
 
   }
 }

/*

4.Implement a way to limit the number of guesses that can be made so that a player loses after exceeding the limit.
*/

function guessMyNumber(n,upperBound ) { 
  var f = -1;
  var c; 
  var theLimit =5
  
  if (f === -1 && counter <= theLimit ){
    var counter = 0
    c = randInt(upperBound );//2
    f = 1;
  }
  if (n > upperBound ) { 
 return 'Out of bounds! Please try a number between 0 and '+ upperBound  ;
 	}
 	else if (n===c && counter === 0) {
 		return 'Congratulations! You guessed my number on the first try!'
 	}
 	 else if (n === c ) { 
   f = -1

  return 'You guessed my number in '+ counter +'  guesses.'
 } 
 	else if(counter > theLimit){
 		counter =0
 		return ' Game Over '
 	}
 else
 { 
   counter = counter +1
   console.log( counter)
   return "Nope! That wasn't it!  " +c;
 
   }
 }

/*

5.Keep track of a high score (the lowest number of guesses) between games, and, 
when the correct number has been guessed in a record number of times, 
include in the message something that indicates that a new high score has been set.
*/

function guessMyNumber(n,upperBound ) { 
  var flag = -1;
  var myNumber;
  var highScore;

  
  	if (flag === -1 && counter <= theLimit){
    var counter = 0
    c = randInt(upperBound );//2
    flag = 1;
  }
 	if (n > upperBound ) { 
 return 'Out of bounds! Please try a number between 0 and '+ upperBound  ;
 	}
 	else if (n === myNumber && counter === 0) {
 		flag = -1
 		return 'Congratulations! You guessed my number on the first try!'
 	}
 	else if (n === myNumber ) { 
   flag = -1
   			if (highScore < counter){
   				highScore = counter
   			}

  	return 'You guessed my number in '+ counter +'  guesses.'
 	} 
 	else if(counter > theLimit){
 		counter =0
 		return ' Game Over '
 	}
 	else
 	{ 
   counter = counter +1
   console.log( counter)
   return "Nope! That wasn't it!  " ;
   }

 }
 /*

6.Whenever a player wins, increase the difficulty by increasing the upperBound;
 whenever a player loses, decrease the difficulty by decreasing the upperBound.
*/
var highScore=5
function guessMyNumber(n) { 
  var flag = -1;
  var myNumber;
  var theLimit =5
  var highScore;
  var upperBound =10
  var hint;
  var comment;
  

  
  	if (flag === -1 && counter <= theLimit){
    var counter = 0
    c = randInt(upperBound );//2
    flag = 1;
  }
 	if (n > upperBound ) { 
 return 'Out of bounds! Please try a number between 0 and '+ upperBound  ;
 	}
 	else if (n === myNumber && counter === 0) {
 		flag = -1
 		return 'Congratulations! You guessed my number on the first try!'
 	}
 	else if (n === myNumber ) { 
   flag = -1
   			if (highScore > counter){
   				highScore = counter
   				upperBound += 1
   			}else upperBound -= 1

  	return 'You guessed my number in '+ counter +'  guesses.'
 	} 
 	else if(counter > theLimit){
 		counter =0
 		return ' Game Over '
 	}
 	else
 	{ 
   counter = counter +1
   return "Nope! That wasn't it!  " ;

   }

 }

/*
7.Implement a high/low hinting system to tell the the user that the guess is either too high or too low. 
You may want to increase the upperBound on the guess.

.All of the following exercises involve augmenting the guessMyNumber function.
/*

// Your code is here
*/
var highScore=5
function guessMyNumber(n) { 
  var flag = -1;
  var random;
  var theLimit =5
  var highScore;
  var upperBound =10
  var hint ;

  
  	if (flag === -1 && counter <= theLimit){
    var counter = 0
    random = randInt(upperBound );//2
    flag = 1;
  }
 	if (n > upperBound ) { 
 return 'Out of bounds! Please try a number between 0 and '+ upperBound  ;
 	}
 	else if (n === random && counter === 0) {
 		flag = -1
 		return 'Congratulations! You guessed my number on the first try!'
 	}
 	else if (n === random ) { 
   flag = -1
   			if (highScore > counter){
   				highScore = counter
   				upperBound += 1
   			}else upperBound -= 1

  	return 'You guessed my number in '+ counter +'  guesses.'
 	} 
 	else if(counter > theLimit){
 		counter =0
 		return ' Game Over '
 	}
 	else
 	{ 
   counter = counter +1
   hint = n - random
   if (hint > 0){
   		comment = "that's too high"
   }
   	else comment = "that's too high" 

   return "Nope! That wasn't it! "+ comment ;

   }

 }

