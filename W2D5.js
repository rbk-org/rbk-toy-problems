/*
1.You wrote a function called guessMyNumber before... that simulated a guessing game: 
the idea is that the function picks a random number between 0 and 5, 
and you invoke the function with your guess -- if you and the function are thinking of the same number,
 you win! Otherwise, the function informs you that your guess was incorrect. 
 A version of this game might look like this (the randInt function is included for convenience):
*/
 
 // function guessMyNumber(n) { 
 // if (n > 5) { 
 // return 'Out of bounds! Please try a number between 0 and 5.'; 
 // } else if (n === randInt(5)) { 
 // return 'You guessed my number!'; 
 // } 
 // return "Nope! That wasn't it!"; 
 // } 
 // function randInt(n) { 
 // return Math.floor(Math.random() * (n + 1)) 
 // }

 /*
 Read and test both of the functions in your console.
 and then invoke the functions from the console) and affirm that you understand how they work; 
 then, answer the following questions: 
 At present, the guess should be between 0 and 5. 
 We can think of 5 as the upper bound of the guess.
 */
 // How many times is the upper bound repeated? 
 //        in the code: 3 times (in line 9 + line 10 + line 11)
 //        possibility of getting a 5 out of (0,1,2,3,4,5) is (1 in 6) or 17%
 // What if we wanted to change the upper bound to 6? 
 //        we should change the "5"s (in line 9 + line 10 + line 11) to "6"s
 // How many changes would be required? 
 //        changing 3 numbers
 // Create a variable called upperBound to hold the upper bound, and then reference it instead of the number 5. 

        //   var UpperBound=7
        // function guessMyNumber(n) { 
        //     if (n > UpperBound) { 
        //     return 'Out of bounds! Please try a number between 0 and '+UpperBound+'.'; 
        //     } else if (n === randInt(UpperBound)) { 
        //     return 'You guessed my number!'; 
        //     } 
        //     return "Nope! That wasn't it!"; 
        //     } 
        //     function randInt(n) { 
        //     return Math.floor(Math.random() * (n + 1)) 
        //     }

//  If you were asked to change the upper bound to some other number (e.g. 7), you should only have to make one change. 
//  Modify guessMyNumber so that if the guess is incorrect, guessMyNumber includes the correct guess in its output, 
//   e.g. 'Nope! The correct number was: X' (where X would have been the correct number).
 
// 2. At present, the guessing game picks a new random number every time it is 'played' (invoked). 
// Now that you know how to make information persistent between function invocations, 
// change the guessing game so that it picks a random number once and allows you to guess until you get the correct answer.

// var UpperBound=7
// y=randInt(UpperBound)

//         function guessMyNumber(n) { 
          
//             if (n > UpperBound) { 
//             return 'Out of bounds! Please try a number between 0 and '+UpperBound+'.'; 
            
//             } else if (n === y) { 
//             console.log(y)
//             y=randInt(UpperBound)
//             return 'You guessed my number!'; 
            
//             } 
//             console.log(y)
//             return "Nope! That wasn't it!"; 
           
//             } 


//             function randInt(n) { 
//             return Math.floor(Math.random() * (n + 1)) 
//             }
            
// 3.it would be really cool if, after the answer was guessed, the message included the number of guesses 
// it had taken to find the answer; for example, 'You guessed my number in 3 guesses.'

// var UpperBound=7
// y=randInt(UpperBound)
// x=0
//         function guessMyNumber(n) { 
//             if (n > UpperBound) { 
//             return 'Out of bounds! Please try a number between 0 and '+UpperBound+'.'; 
//             } else if (n === y) { 
//             x++
//             y=randInt(UpperBound)
//             return 'You guessed my number in '+x+' guesses.'; 
          
//             } 
//             x++
//             return "Nope! That wasn't it!, you have tried guessing "+x+" times."
//             } 
//             function randInt(n) { 
//             return Math.floor(Math.random() * (n + 1)) 
//             }    

//  Tangential Problem: What happens if you get the number right on the first try? Does it say, 'You guessed my number in 1 guesses.'? 
//  If so, perhaps the wording should be different? Some better ideas are: 
//        'You guessed my number in 1 guess.', 
//        'Congratulations! You guessed my number on the first try!'

// var UpperBound=7
// y=randInt(UpperBound)
// x=0
//         function guessMyNumber(n) { 
//             if (n > UpperBound) { 
//             return 'Out of bounds! Please try a number between 0 and '+UpperBound+'.'; 
//             } else if (n === y) { 
//             x++
//             y=randInt(UpperBound)
//             if(x===1){x=0;return 'You guessed my number in 1 guess.'}
//             r=x;x=0;return 'You guessed my number in '+r+' guesses.'; 
          
//             } 
//             x++
//             return "Nope! That wasn't it!, you have tried guessing "+x+" times."
//             } 
//             function randInt(n) { 
//             return Math.floor(Math.random() * (n + 1)) 
//             }    

// 4.Implement a way to limit the number of guesses that can be made so that a player loses after exceeding the limit.

// var UpperBound=7
// y=randInt(UpperBound)
// x=0
//         function guessMyNumber(n) { 
//             if (n > UpperBound) { 
//             return 'Out of bounds! Please try a number between 0 and '+UpperBound+'.'; 
//             } else if (n === y) { 
//             x++
//             y=randInt(UpperBound)
//             if(x===1){x=0;return 'You guessed my number in 1 guess.'}
//             if(x<=5){r=x;x=0;return 'You guessed my number in '+r+' guesses.'}
//             if(x>5){return 'You have exceeded the guesses limit'}
//             } 
//             x++
//             if(x<=5){
//             return "Nope! That wasn't it!, you have tried guessing "+x+" times."}
//             if(x>5){return 'You have exceeded the guesses limit'}
//             } 
//             function randInt(n) { 
//             return Math.floor(Math.random() * (n + 1)) 
//             }      

// 5.Keep track of a high score (the lowest number of guesses) between games, and, 
// when the correct number has been guessed in a record number of times, 
// include in the message something that indicates that a new high score has been set.

// var UpperBound=7
// y=randInt(UpperBound)
// x=0
// h=0
//         function guessMyNumber(n) { 
//             if (n > UpperBound) { 
//             return 'Out of bounds! Please try a number between 0 and '+UpperBound+'.'; 
//             } if (n === y) { 
//             x++

//             y=randInt(UpperBound)
//             if(x===1){h=1;x=0;return 'You guessed my number in 1 guess, highscore = '+h}
//             if(x<=5){if(x<h){h=x};r=x;x=0;return 'You guessed my number in '+r+' guesses, highscore = '+h}
//             if(x>5){return 'You have exceeded the guesses limit'}
//             } 
//             x++

//             if(x<=5){
//             return "Nope! That wasn't it!, you have tried guessing "+x+" times."}
//             if(x>5){return 'You have exceeded the guesses limit'}
//             } 
//             function randInt(n) { 
//             return Math.floor(Math.random() * (n + 1)) 
//             }  

// 6.Whenever a player wins, increase the difficulty by increasing the upperBound;
//  whenever a player loses, decrease the difficulty by decreasing the upperBound.

// var UpperBound=7
// y=randInt(UpperBound)
// x=0
// h=0
//         function guessMyNumber(n) { 
//             if (n > UpperBound) { 
//             return 'Out of bounds! Please try a number between 0 and '+UpperBound+'.'; 
//             } 
            
//             else if (n === y) { 
//               UpperBound++
//             x++
//             y=randInt(UpperBound)
//             if(x===1){h=1;x=0;return 'You guessed my number in 1 guess, the difficulty was increased, highscore = '+h}
//             if(x>1){if(x<h){h=x};r=x;x=0;return 'You guessed my number in '+r+' guesses, the difficulty was increased, highscore = '+h}
   
//             }     
//             x++
//             if(x===5){x=0;if(UpperBound!==0){UpperBound--};y=randInt(UpperBound); return "Nope! That wasn't it!, you have tried guessing 5 times, the number has changed, and the difficulty was decreased."}
//             return "Nope! That wasn't it!, you have tried guessing "+x+" times."
//             } 
     
//             function randInt(n) { 
//             return Math.floor(Math.random() * (n + 1)) 
//             }  

// 7.Implement a high/low hinting system to tell the the user that the guess is either too high or too low. 
// You may want to increase the upperBound on the guess.

// var UpperBound=7
// y=randInt(UpperBound)
// x=0
// h=0
//         function guessMyNumber(n) { 
//             if (n > UpperBound) { 
//             return 'Out of bounds! Please try a number between 0 and '+UpperBound+'.'; 
//             } 
            
//             if (n === y) { 
//               UpperBound++
//             x++
//             y=randInt(UpperBound)
//             if(x===1){h=1;x=0;return 'You guessed my number in 1 guess, the difficulty was increased, highscore = '+h}
//             if(x>1){if(x<h){h=x};r=x;x=0;return 'You guessed my number in '+r+' guesses, the difficulty was increased, highscore = '+h}}

//             if(n>y){
//             x++
//             if(x<5){
//             return "Nope! That wasn't it!, you have tried guessing "+x+" times, your guess is bigger than the number."}
//                         if(x===5){x=0;if(UpperBound!==0){UpperBound--};y=randInt(UpperBound); return "Nope! That wasn't it!, you have tried guessing 5 times, the number has changed, and the difficulty was decreased."}

//             }
             
//             if(n<y){
//             x++
//             if(x<5){
//             return "Nope! That wasn't it!, you have tried guessing "+x+" times, your guess is smaller than the number."}
//                         if(x===5){x=0;if(UpperBound!==0){UpperBound--};y=randInt(UpperBound); return "Nope! That wasn't it!, you have tried guessing 5 times, the number has changed, and the difficulty was decreased."}

//              }}

//             function randInt(n) { 
//             return Math.floor(Math.random() * (n + 1)) 
//             }  

             

//             function randInt(n) { 
//             return Math.floor(Math.random() * (n + 1)) 
//             }  

// .All of the following exercises involve augmenting the guessMyNumber function.

// Your code is here

var UpperBound=7
y=randInt(UpperBound)
x=0
h=0
        function guessMyNumber(n) { 
            if (n > UpperBound) { 
            return 'Out of bounds! Please try a number between 0 and '+UpperBound+'.'; 
            } 
            
            if (n === y) { 
              UpperBound++
            x++
            y=randInt(UpperBound)
            if(x===1){h=1;x=0;return 'You guessed my number in 1 guess, the difficulty was increased, highscore = '+h}
            if(x>1){if(x<h){h=x};r=x;x=0;return 'You guessed my number in '+r+' guesses, the difficulty was increased, highscore = '+h}}

            if(n>y){
            x++
            if(x<5){
            return "Nope! That wasn't it!, you have tried guessing "+x+" times, your guess is bigger than the number."}
                        if(x===5){x=0;if(UpperBound!==0){UpperBound--};y=randInt(UpperBound); return "Nope! That wasn't it!, you have tried guessing 5 times, the number has changed, and the difficulty was decreased."}

            }
             
            if(n<y){
            x++
            if(x<5){
            return "Nope! That wasn't it!, you have tried guessing "+x+" times, your guess is smaller than the number."}
                        if(x===5){x=0;if(UpperBound!==0){UpperBound--};y=randInt(UpperBound); return "Nope! That wasn't it!, you have tried guessing 5 times, the number has changed, and the difficulty was decreased."}

             }}

            function randInt(n) { 
            return Math.floor(Math.random() * (n + 1)) 
            }  