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

console.log(guessMyNumber(3));
console.log(guessMyNumber(5));

 /*
 Read and test both of the functions in your console.
 and then invoke the functions from the console) and affirm that you understand how they work; 
 then, answer the following questions: 
 At present, the guess should be between 0 and 5. 
 We can think of 5 as the upper bound of the guess. 
 Q1:How many times is the upper bound repeated? 
 A1:twice both in first condition and secound condition.

 Q2:What if we wanted to change the upper bound to 6? 
 A1:change both conditions from 5 to 6.

 Q3:How many changes would be required? 
 A3:2.

 Q4:Create a variable called upperBound to hold the upper bound, and then reference it instead of the number 5. 
 A4:(see code)*/
 function guessMyNumber(n) {
 var upperBound=5; 
 if (n > upperBound) { 
 return 'Out of bounds! Please try a number between 0 and 5.'; 
 } else if (n === randInt(upperBound)) { 
 return 'You guessed my number!'; 
 } 
 return "Nope! That wasn't it!"; 
 } 
 function randInt(n) { 
 return Math.floor(Math.random() * (n + 1)) 
 }

console.log(guessMyNumber(3));
console.log(guessMyNumber(5));

/* Q5:If you were asked to change the upper bound to some other number (e.g. 7), you should only have to make one change. 
 Modify guessMyNumber so that if the guess is incorrect, guessMyNumber includes the correct guess in its output, 
  e.g. 'Nope! The correct number was: X' (where X would have been the correct number).
 A5: by creating the upperBound var now , we only to change the code once to test diffrent upper bond numbers.

2. At present, the guessing game picks a new random number every time it is 'played' (invoked). 
Now that you know how to make information persistent between function invocations, 
change the guessing game so that it picks a random number once and allows you to guess until you get the correct answer. */
function guessMyNumber(n) {
 var upperBound=5; 
 while (n <= upperBound && n!=upperBound){
 if (n === randInt(upperBound)) { 
    return 'You guessed my number!';
     } 
    return "try agian"; 
 }
 }
 function randInt(n) { 
 return Math.floor(Math.random() * (n + 1)) }

console.log(guessMyNumber(3));

/*3.it would be really cool if, after the answer was guessed, the message included the number of guesses 
it had taken to find the answer; for example, 'You guessed my number in 3 guesses.'*/
function guessMyNumber(n) {
 var upperBound=5; count=0;
 while (n <= upperBound && n!=upperBound){
 if (n === randInt(upperBound)) { 
    return 'You guessed my number!'+"in "+count+"guesses";
     } 
    return "try agian"; 
    count ++;
 }
 }
 function randInt(n) { 
 return Math.floor(Math.random() * (n + 1)) }
 
console.log(guessMyNumber(3));

 /*Tangential Problem: What happens if you get the number right on the first try? Does it say, 'You guessed my number in 1 guesses.'? 
 If so, perhaps the wording should be different? Some better ideas are: 
       'You guessed my number in 1 guess.', 
       'Congratulations! You guessed my number on the first try!'*/
function guessMyNumber(n) {
 var upperBound=5; count=0;
 while (n <= upperBound && n!=upperBound){

 if (n === randInt(upperBound) && count ===0 ) { 
 	return 'Congratulations! You guessed my number on the first try!'}
 	
 else if (n === randInt(upperBound)&& count !=0 ){
    return 'You guessed my number '+"in "+count+" guesses";
     } 
    return "try agian";  count ++;
 }
 }
 function randInt(n) { 
 return Math.floor(Math.random() * (n + 1)) }
 
console.log(guessMyNumber(3));

/*4.Implement a way to limit the number of guesses that can be made so that a player loses after exceeding the limit.*/
function guessMyNumber(n) {
 var upperBound=5; count=0; limit =5;
 while (n <= upperBound && n!=upperBound && count!=limit){

 if (n === randInt(upperBound) && count ===0 ) { 
 	return 'Congratulations! You guessed my number on the first try!'}
 	
 else if (n === randInt(upperBound)&& count !=0 ){
    return 'You guessed my number '+"in "+count+" guesses";
     } 
else return "try agian"
 count ++;
 }
 }
 function randInt(n) { 
 return Math.floor(Math.random() * (n + 1)) }
 
console.log(guessMyNumber(3));

/*5.Keep track of a high score (the lowest number of guesses) between games, and, 
when the correct number has been guessed in a record number of times, 
include in the message something that indicates that a new high score has been set.*/
function guessMyNumber(n) {
 var upperBound=5; count=0; limit =5; highScore=0;
 while (n <= upperBound && n!=upperBound && count!=limit){

 if (n === randInt(upperBound) && count ===0 ) { 
 	return 'Congratulations! You guessed my number on the first try!'
   highyScore=1;
   return highScore;
 }
 else if (n === randInt(upperBound)&& count !=0 ){
    return 'You guessed my number '+"in "+count+" guesses";
    if (count< highScore){
      highScore=count;
      return highScore;
    }
     } 
else return "try agian"
 count ++;
 }
 }
 function randInt(n) { 
 return Math.floor(Math.random() * (n + 1)) }
 
console.log(guessMyNumber(3));

/*6.Whenever a player wins, increase the difficulty by increasing the upperBound;
 whenever a player loses, decrease the difficulty by decreasing the upperBound.*/
 function guessMyNumber(n) {
 var upperBound=5; count=0; limit =5; highScore=0;
 while (n <= upperBound && n!=upperBound && count!=limit){

 if (n === randInt(upperBound) && count ===0 ) { 
 	return 'Congratulations! You guessed my number on the first try!'
   highyScore=1;
   return highScore;
   upperBound+=1;
 }
 else if (n === randInt(upperBound)&& count !=0 ){
    return 'You guessed my number '+"in "+count+" guesses";
    if (count< highScore){
      highScore=count;
      return highScore;
      upperBound+=1;
    }
     } 
else return "try agian"
upperBound-=1;
 count ++;
 }
 }
 function randInt(n) { 
 return Math.floor(Math.random() * (n + 1)) }
 
console.log(guessMyNumber(3));

/*7.Implement a high/low hinting system to tell the the user that the guess is either too high or too low. 
You may want to increase the upperBound on the guess.*/
function guessMyNumber(n) {
 var upperBound=100; count=0; limit =5; highScore=0;
 while (n <= upperBound && n!=upperBound && count!=limit){

 if (n === randInt(upperBound) && count ===0 ) { 
 	return 'Congratulations! You guessed my number on the first try!'
   highyScore=1;
   return highScore;
   upperBound+=1;
 }
 else if (n === randInt(upperBound)&& count !=0 ){
    return 'You guessed my number '+"in "+count+" guesses";
    if (count< highScore){
      highScore=count;
      return highScore;
      upperBound+=1;
    }
     } 
else if (n<upperBound){
   return "your guess is too low"
   count ++;
     }
else return "try agian"
upperBound-=1;
 count ++;
 }
 }
 function randInt(n) { 
 return Math.floor(Math.random() * (n + 1)) }
 
console.log(guessMyNumber(3));
/*
.All of the following exercises involve augmenting the guessMyNumber function.
/*

// Your code is here








