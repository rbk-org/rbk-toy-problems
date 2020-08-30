/*
1- Write a function called countNumOfStrings that takes an array of
mixed elements (different data types)
and returns the number of strings there are in the array.
Calling your function should result in:
countNumOfStrings(["hello", "world", 5, true, {}]); //2
countNumOfStrings(["foo", 2, 10, "bar", 5, false, {}, "baz"]); //3
countNumOfStrings(["There is only one string in this example"]); //1
Hint: Recall typeof? If not: check it out on MDN. :-)
*/
function countNumOfStrings(arr){
  var count = 0
  if(arr.type() === string){
  count++
  }
  return count
}
console.log(countNumOfStrings(["hello", "world", 5, true, {}]))
/*
2- Write a function called listLengthOfAllWords that takes an array
of words (strings),
and returns an array of numbers representing the length of each word.
Calling your function should result in:
listLengthOfAllWords(['hello', 'world', 'I', 'can', 'code']); //[5, 5,
1, 3, 4];
*/
function listLengthOfAllWords(arr){
  var num = []
  for(var i = 0; i<arr.length;i++){
    num[i] = arr[i].length
  }
  return num
/*
Write a function called flipPairs that takes a string a parameter
and returns the given string after Flip every pair of characters.
Example:
var input = 'check out how interesting this problem is, it\'s insanely
interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei
,si 't sniasenyli tnreseitgn!*/
function flipPairs(input){
  var output = " "
  for (var i = 0; i < input.length; i--){
    output = output + input.charAt(i)
  }
  return output
}
console.log(flipPairs("check out how interesting this problem is, it\'s insanely"))