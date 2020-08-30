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

function countNumOfStrings(array){
	t=0
	for(i=0;i<array.length;i++){
		if(typeof(array[i])==="string"){t++}
	}
return t
}
countNumOfStrings(["hello", "world", 5, true, {}])
countNumOfStrings(["foo", 2, 10, "bar", 5, false, {}, "baz"])
countNumOfStrings(["There is only one string in this example"])

/*
2- Write a function called listLengthOfAllWords that takes an array
of words (strings),
and returns an array of numbers representing the length of each word.
Calling your function should result in:
listLengthOfAllWords(['hello', 'world', 'I', 'can', 'code']); //[5, 5,
1, 3, 4];
*/

function listLengthOfAllWords(x){
	t=[]
	for(i=0;i<x.length;i++){
		if(typeof(x[i])==="string"){t.push(x[i].length)}
	}
return t
}
listLengthOfAllWords(['hello', 'world', 'I', 'can', 'code'])

/*
Write a function called flipPairs that takes a string a parameter
and returns the given string after Flip every pair of characters.
Example:
var input = 'check out how interesting this problem is, it\'s insanely
interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei
,si 't sniasenyli tnreseitgn!*/

function flipPairs(x){
t=""
for(i=0;i<x.length;i=i+2){
   if(x[i+1]===undefined){t=t+x[i];break;}
t=t+x[i+1]+x[i]
}
return t
}
flipPairs('check out how interesting this problem is, it\'s insanely interesting!')