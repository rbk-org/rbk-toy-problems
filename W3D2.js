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
function countNumOfStrings(arr) {
	var count = 0
	for (var i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'string') {
			count++
		}
	}
	return count
}
var arr = [1, '2', '3', '4', '5', 6, 7]
console.log(countNumOfStrings(arr))
/*
2- Write a function called listLengthOfAllWords that takes an array
of words (strings),
and returns an array of numbers representing the length of each word.
Calling your function should result in:
listLengthOfAllWords(['hello', 'world', 'I', 'can', 'code']); //[5, 5,
1, 3, 4];
*/
function listLengthOfAllWords(arr) {
	var arr1 = []
	for (var i = 0; i < arr.length; i++) {
		arr1.push(arr[i].length)
	}
	return arr1
}
var arr2 = ['a', 'as', 'asd', 'asdf', 'asdfg', 'asdfgh']
console.log()
console.log(listLengthOfAllWords(arr2))
/*
3- Write a function called flipPairs that takes a string a parameter
and returns the given string after Flip every pair of characters.
Example:
var input = 'check out how interesting this problem is, it\'s insanely
interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei
,si 't sniasenyli tnreseitgn!*/

function flipPairs(str) {
	var str1 = ''
	for (var i = 1; i < str.length; i+=2) {
		str1+= str[i] + str[i-1]
	}
	if (str[i - 1] !== undefined) {
		str1+= str[i - 1]
	}
	return str1
}
var str1 = 'rami okkeh'
var str2 = 'hello world'
console.log()
console.log(flipPairs(str1))
console.log(flipPairs(str2))





