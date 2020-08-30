<<<<<<< HEAD
/*
1-Write a function called loopAString that takes one parameter, a string of characters, 
and logs all of its characters (one at a time) to the console. 
Your function should use a while loop to log each character 
from the beginning to the end of the string, then return nothing. 
Below is an example of the code running.

loopAString('nodeJS');
// console output:
  // n
  // o
  // d
  // e
  // J
  // S

loopAString('abcd');
// console output:
  // a
  // b
  // c
  // d

*/
function loopAString(string) {
  // create an index variable
  var i = 0
  // create a loop which iterates over the input string
  while (string[i] !== undefined) {
  // log current string character to the console
  console.log(string[i])
  // increment value of index variable
  i++
 }
}


// 2-Write a function called reverseStr that takes a string as an parameter 
//and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// reverseStr('hello'); "o1l2l3e4h"
// Your code is here

function reverseStr(str) {
  var i = str.length - 1
  var e = 1
  var rev = ""
  while (str[i] !== undefined) {
    rev += str[i] + e
    i--
    e++
  }
  return rev
}


||||||| 198e8c5
=======
/*
1-Write a function called loopAString that takes one parameter, a string of characters, 
and logs all of its characters (one at a time) to the console. 
Your function should use a while loop to log each character 
from the beginning to the end of the string, then return nothing. 
Below is an example of the code running.

loopAString('nodeJS');
// console output:
  // n
  // o
  // d
  // e
  // J
  // S

loopAString('abcd');
// console output:
  // a
  // b
  // c
  // d

*/
function loopAString(string) {
  // create an index variable
  // create a loop which iterates over the input string
  // log current string character to the console
  // increment value of index variable
}


// 2-Write a function called reverseStr that takes a string as an parameter 
//and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// reverseStr('hello'); "o1l2l3e4h"
// Your code is here



>>>>>>> 5c30afd41c768e5f8dac4664635c3f3a099b3c3b
