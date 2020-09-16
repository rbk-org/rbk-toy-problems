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
<<<<<<< HEAD

function countNumOfStrings (array){
	var n =0
	for (i=0; i<array.length; i++){
		if (typeof (array[i]) === "string"){ 
			n++}
	}
	return n
}

countNumOfStrings(["hello", "world", 5, false, {}, "baz"])

=======
>>>>>>> 843a4d3baf0be5ff2acf5c73ddc55a5f3021c969
/*
2- Write a function called listLengthOfAllWords that takes an array
of words (strings),
and returns an array of numbers representing the length of each word.
Calling your function should result in:
listLengthOfAllWords(['hello', 'world', 'I', 'can', 'code']); //[5, 5,
1, 3, 4];
*/
<<<<<<< HEAD
function listLengthOfAllWords (array){
	var n =[]
	for (i=0; i<array.length; i++){
		if (typeof (array[i])=== "string"){ 
			n.push(array[i].length)}
	}
	return n
}
listLengthOfAllWords(["hello", "world", "I", "can", "code"])
=======
>>>>>>> 843a4d3baf0be5ff2acf5c73ddc55a5f3021c969
/*
Write a function called flipPairs that takes a string a parameter
and returns the given string after Flip every pair of characters.
Example:
var input = 'check out how interesting this problem is, it\'s insanely
interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei
,si 't sniasenyli tnreseitgn!*/
<<<<<<< HEAD




function flipPairs (string){
	string1=""
	for (var i=1; i<string.length; i+=2){
		string1+= string[i] + string[i-1]
	}
if (string[i-1]!== undefined){
	string1+= string[i-1]
}
return string1
}

flipPairs("hello world") 

or 
=======
>>>>>>> 843a4d3baf0be5ff2acf5c73ddc55a5f3021c969
