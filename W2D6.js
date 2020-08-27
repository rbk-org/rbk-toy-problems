
// 1-Write a function called loopAString that takes one parameter, a string of characters, 
// and logs all of its characters (one at a time) to the console. 
// Your function should use a while loop to log each character 
// from the beginning to the end of the string, then return nothing. 
// Below is an example of the code running.

// loopAString('nodeJS');
// console output:
  // n
  // o
  // d
  // e
  // J
  // S

// loopAString('abcd');
// console output:
  // a
  // b
  // c
  // d


function loopAString(string) {
  // create an index variable
  i=0
  // create a loop which iterates over the input string
  while(i<string.length){
  // log current string character to the console
  console.log(x[i])
  // increment value of index variable
  i++}
}
console.log("Welcome")
console.log(reverseStr("Welcome"))

// 2-Write a function called reverseStr that takes a string as an parameter 
//and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// reverseStr('hello'); "o1l2l3e4h"
// Your code is here

function reverseStr(x){
	i=x.length-1
	s=""
	t=1
	while(i>=0){
      s+=x[i]+t
      t++
      i--
	}
return s
}
console.log("")
console.log("Welcome")
console.log(reverseStr("Welcome"))
