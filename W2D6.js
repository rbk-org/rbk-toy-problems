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
  var index = 0
  // create a loop which iterates over the input string
  while (index < string.length) {
    // log current string character to the console
    console.log(string[index])
    // increment value of index variable
    index++
  }
}


// 2-Write a function called reverseStr that takes a string as an parameter 
//and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// reverseStr('hello'); "o1l2l3e4h"
// Your code is here


function reverseStr(str) {
  var i = str.length - 1
  var newstr = ''
  if (str !== '') {
    while (i > 0) {
      newstr += str[i] + (str.length - i)
      i--

    }
    newstr += str[(str.length - 1)]
  }
  return newstr
}

//using recursion
//we declare a variable result to store the reversed string, when the string is empty we will return the result, 
// otherwise we will pass the last letter of the string into the result string
function reverseStr(str, res){
  var res =  res || ""
  if (str.length === 0 ){
    return res;
  }
  res += str[str.length - 1]
   return reverseStr2(str.slice(0, -1), res)
}
reverseStr("str")


