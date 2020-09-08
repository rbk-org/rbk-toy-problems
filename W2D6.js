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
var x= string.length

while(x<=string.length){return (console.log( string[0],
string[string.length-1])


)}

}


loopAString('hgyt')




function loopAString(string) {
var x= string.length

while(x<=string.length){retun console.log string}
}

function loopAString(string) {
var x= string.length-1

while(x<=string.length){return (string.length-1)&&(console.log (string))}
}

loopAString('hgyt')












// function executiveSummary(email) {
//    if (email.length>15 || str[0]="U"){return  email}

var x= ""
function loopAString(string) {

while(x<=string.length){return [x]}
}
loopAString('hgyt')

// */
// // function loopAString(string) {
// // var x= string.length

// while(x<=string.length){return (string.length-1)&&(console.log (string))}
// x++;
// }

// loopAString('hgyt')

//-------------------------------------
function loopAString(string) {
var x= string.length 
y=(string[0])
while(x<=string.length){return 
 (console.log (y))
}

}

loopAString('hgyt')








// 2-Write a function called reverseStr that takes a string as an parameter 
//and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// reverseStr('hello'); "o1l2l3e4h"
// Your code is here
function reverseStr(string){
var i = string.length-1
var total=""
while(i>=0){
total+=(string[i]+i)
  i=i-1
}return total
}


