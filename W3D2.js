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
	var numberOfString=0;
	for(var i=0;i<array.length;i++){
		if(typeof array[i] === 'string'){
			numberOfString++;
		}
	return 'no string available';

	}
	return numberOfString;
}






/*
2- Write a function called listLengthOfAllWords that takes an array
of words (strings),
and returns an array of numbers representing the length of each word.
Calling your function should result in:
listLengthOfAllWords(['hello', 'world', 'I', 'can', 'code']); //[5, 5,
1, 3, 4];
*/

function listLengthOfAllWords(arrayOfString){
  var resultArray=[];
  for(var i=0;i<arrayOfString.length;i++){
    resultArray.push(arrayOfString[i].length);
  }
  return resultArray;
}



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
  var res=[];
  var finalrestult='';
  var splitstring=string.split('');
  if(splitstring.length%2 === 0){
    for(var i=0;i<splitstring.length;i=i+2){
      res.push(splitstring[i+1]);
       res.push(splitstring[i])
        
    }
  finalrestult =res.join(finalrestult);
    return finalrestult;
  }
}
