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
 var index=0;
 while(index!==string.length){
  console.log(string[index]);
  index+=1;
 }
}
 loopAString("rawan");


// 2-Write a function called reverseStr that takes a string as an parameter 
//and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// reverseStr('hello'); "o1l2l3e4h"
// Your code is here
function reverseStr(str){
  var l=str.length;
  var index=l-1;
l-=1;
  var str2="";
  while(index>=0){
   str2=str2.concat(str[index],l-index);
   //console.log(str2);
   index-=1;
  }
  return str2;
}
 reverseStr("rawan");


