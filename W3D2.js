/*
1- Write a function called countNumOfStrings that takes an array of
mixed elements (different data types)*/
function countNumOfStrings(data){
	var counter = 0;
	for(var i = 0; i < data.length; i++){
		if(typeof data[i] === 'string'){
			counter++;
		}
	}
	return counter;
}
console.log(countNumOfStrings(["hello", "world", 5, true, {}])); //2
console.log(countNumOfStrings(["foo", 2, 10, "bar", 5, false, {}, "baz"])); //3
console.log(countNumOfStrings(["There is only one string in this example"])); //1

/*
2- Write a function called listLengthOfAllWords that takes an array
of words (strings),
and returns an array of numbers representing the length of each word.
Calling your function should result in:
listLengthOfAllWords(['hello', 'world', 'I', 'can', 'code']); //[5, 5,
1, 3, 4];
*/
function listLengthOfAllWords(arrfstrings){
	var arrOfLength = [];
	for(var i = 0; i < arrfstrings.length; i++){
		arrOfLength.push(arrfstrings[i].length);
	}
	return arrOfLength;
}
console.log(listLengthOfAllWords(['hello', 'world', 'I', 'can', 'code']));
/*
Write a function called flipPairs that takes a string a parameter
and returns the given string after Flip every pair of characters.
Example:
var input = 'check out how interesting this problem is, it\'s insanely
interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei
,si 't sniasenyli tnreseitgn!*/
function flipPairs(string){
	
	var container="";
	for(var i = 0; i < string.length; i++){
		if(!(string[i]==='') && !(string[i+1]==='') ){
			container = string[i];
			string[i] = string[1+i];
			string[1+i]= container;
			i++
		}
	    else if(!(string[i] === '') && string[i+1] ===' '){
	    	
	    	container = string[i];
	    	string[i] = string[i+2];
	    	string[i+2] = container;
	    	i+=2;
	    }}
	    return string}

var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);	
console.log(output)
