
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
  var i=0;
  // create a loop which iterates over the input string
  while(i<string.length){

  // log current string character to the console
  console.log(string[i])
  // increment value of index variable
  i++;
}
}
loopAString("nodeJS");
//recursive
function loopAStringRecursive(s,i=0){
  if(i===s.length) return "";
  console.log(s.split("").shift());
  
  return loopAStringRecursive(s.substr(i+1,s.length-1))
}
loopAStringRecursive("nodeJS");





// 2-Write a function called reverseStr that takes a string as an parameter 
//and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// reverseStr('hello'); "o1l2l3e4h"
// Your code is here
function reverseStr(s){
  var i=s.length-1;
  while(i>=0){
    console.log(s[i]);
    i--
  }
}
reverseStr("nodeJS");

//
function reverseStrRecursive(s){
  if(s.length===0) return "";
  console.log(s.split("").pop());
  
  return reverseStrRecursive(s.substr(0,s.length-1))
}
loopAStringRecursive("nodeJS");

