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
<<<<<<< HEAD

 function randInt(n) { 
 return Math.floor(Math.random() * (n + 1)) 

 }

console.log(guessNumber (3));
console.log(guessNumber(2));



=======
 function randInt(n) { 
 return Math.floor(Math.random() * (n + 1)) 
 }
>>>>>>> 5c30afd41c768e5f8dac4664635c3f3a099b3c3b
 /*
 Read and test both of the functions in your console.
 and then invoke the functions from the console) and affirm that you understand how they work; 
 then, answer the following questions: 
<<<<<<< HEAD

All above is done. 

 At present, the guess should be between 0 and 5. 
 We can think of 5 as the upper bound of the guess. 
 How many times is the upper bound repeated? 

it will repeat 120 

 What if we wanted to change the upper bound to 6? 

  Change number 5 to 6.

=======
 At present, the guess should be between 0 and 5. 
 We can think of 5 as the upper bound of the guess. 
 How many times is the upper bound repeated? 
 What if we wanted to change the upper bound to 6? 
>>>>>>> 5c30afd41c768e5f8dac4664635c3f3a099b3c3b
 How many changes would be required? 
 Create a variable called upperBound to hold the upper bound, and then reference it instead of the number 5. 
 If you were asked to change the upper bound to some other number (e.g. 7), you should only have to make one change. 
 Modify guessMyNumber so that if the guess is incorrect, guessMyNumber includes the correct guess in its output, 
  e.g. 'Nope! The correct number was: X' (where X would have been the correct number).
<<<<<<< HEAD

 function guessMyNumber(n) { 
 var upperBound = 7;
 if (n > 7) { 
 return 'Out of bounds! Please try a number between 0 and 5.'; 
 } else if (n === randInt(5)) { 
 return 'You guessed my number!'; 
 } 
 return "Nope! That wasn't it!"; 
 } 
 function randInt(n) { 
 return Math.floor(Math.random() * (n + 1)) 
 }

 guessMyNumber(7)

=======
>>>>>>> 5c30afd41c768e5f8dac4664635c3f3a099b3c3b
 
2. At present, the guessing game picks a new random number every time it is 'played' (invoked). 
Now that you know how to make information persistent between function invocations, 
change the guessing game so that it picks a random number once and allows you to guess until you get the correct answer.

<<<<<<< HEAD
 function guessMyNumber(n) { 
 var upperBound = 7;
 if (n > 7) { 
 return 'Out of bounds! Please try a number between 0 and 5.'; 
 } else if (n === randInt(5)) { 
 return 'You guessed my number!'; 
 } 
 return "Nope! That wasn't it!"; 
 } 
 function randInt(n) { 
 return Math.floor(Math.random() * (n + 1)) 
 }

 guessMyNumber(7)




3.it would be really cool if, after the answer was guessed, the message included the number of guesses 
it had taken to find the answer; for example, 'You guessed my number in 3 guesses.'


 function guessMyNumber(n) { 
 var upperBound = 7;
 var guessedNumber = " ";
 if (n > 7) { 
 return 'Out of bounds! Please try a number between 0 and 5.'; 
 } else if (n === randInt(5)) { 
 return 'You guessed my number in + " " + guesses."; 
 } 
 return "Nope! That wasn't it!"; 
 } 
 function randInt(n) { 
 return Math.floor(Math.random() * (n + 1)) 
 }

 guessMyNumber(7)




=======
3.it would be really cool if, after the answer was guessed, the message included the number of guesses 
it had taken to find the answer; for example, 'You guessed my number in 3 guesses.'

>>>>>>> 5c30afd41c768e5f8dac4664635c3f3a099b3c3b
 Tangential Problem: What happens if you get the number right on the first try? Does it say, 'You guessed my number in 1 guesses.'? 
 If so, perhaps the wording should be different? Some better ideas are: 
       'You guessed my number in 1 guess.', 
       'Congratulations! You guessed my number on the first try!'

<<<<<<< HEAD
 function guessMyNumber(n) { 
 var upperBound = 7;
 var guessedNumber = " ";
 if (n > 7) { 
 return 'Out of bounds! Please try a number between 0 and 5.'; 
 } else if (n === randInt(5)) { 
 return 'You guessed my number in + " " + guesses."; 
  + 'Congratulations! You guessed my number on the first try!'
 } 
 return "Nope! That wasn't it!"; 
 } 
 function randInt(n) { 
 return Math.floor(Math.random() * (n + 1)) 
 }

 guessMyNumber(7)





4.Implement a way to limit the number of guesses that can be made so that a player loses after exceeding the limit.





=======
4.Implement a way to limit the number of guesses that can be made so that a player loses after exceeding the limit.

>>>>>>> 5c30afd41c768e5f8dac4664635c3f3a099b3c3b
5.Keep track of a high score (the lowest number of guesses) between games, and, 
when the correct number has been guessed in a record number of times, 
include in the message something that indicates that a new high score has been set.

<<<<<<< HEAD



6.Whenever a player wins, increase the difficulty by increasing the upperBound;
 whenever a player loses, decrease the difficulty by decreasing the upperBound.





7.Implement a high/low hinting system to tell the the user that the guess is either too high or too low. 
You may want to increase the upperBound on the guess.





=======
6.Whenever a player wins, increase the difficulty by increasing the upperBound;
 whenever a player loses, decrease the difficulty by decreasing the upperBound.

7.Implement a high/low hinting system to tell the the user that the guess is either too high or too low. 
You may want to increase the upperBound on the guess.

>>>>>>> 5c30afd41c768e5f8dac4664635c3f3a099b3c3b
.All of the following exercises involve augmenting the guessMyNumber function.
/*

// Your code is here








