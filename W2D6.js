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
  function loopAstring(string) {
  var i = 0
  while(i < string.length){
    console.log(string[i])
    i++
  }
  console.log(loopAstring('Mahmoud'))
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
function reverseStr(string){
  var i = string.length
  var arr1 = []
  while(i < 0){
   string[i-1] + [i]
  return arr1 
  i--
  }
}
console.log(reverseStr('Mahmoud'))


