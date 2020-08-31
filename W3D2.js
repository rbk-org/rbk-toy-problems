<<<<<<< HEAD

// 1- Write a function called countNumOfStrings that takes an array of
// mixed elements (different data types)
// and returns the number of strings there are in the array.
// Calling your function should result in:
// countNumOfStrings(["hello", "world", 5, true, {}]); //2
// countNumOfStrings(["foo", 2, 10, "bar", 5, false, {}, "baz"]); //3
// countNumOfStrings(["There is only one string in this example"]); //1
// Hint: Recall typeof? If not: check it out on MDN. :-)


function countNumOfStrings(array){
	let count =0;
	for (let i =0 ; i<array.length;i++){
		if(typeof array[i]==='string'){count++}
	}
return count
}
countNumOfStrings (["hello", "world", 5, true, {}])

// 2- Write a function called listLengthOfAllWords that takes an array
// of words (strings),
// and returns an array of numbers representing the length of each word.
// Calling your function should result in:
// listLengthOfAllWords(['hello', 'world', 'I', 'can', 'code']); //[5, 5,
// 1, 3, 4];

function listLengthOfAllWords(array){
	let A =[]
for(let i =0;i<array.length;i++){{
	A.push(array[i].length)
}
}
return A
}
listLengthOfAllWords(['hello', 'world', 'I', 'can', 'code'])
=======
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
/*
2- Write a function called listLengthOfAllWords that takes an array
of words (strings),
and returns an array of numbers representing the length of each word.
Calling your function should result in:
listLengthOfAllWords(['hello', 'world', 'I', 'can', 'code']); //[5, 5,
1, 3, 4];
*/
>>>>>>> 56a0b96d4505240c3e20e604060f6ba6f035be9e
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

// var input = 'check out how interesting this problem is, it\'s insanely interesting!';
// var output = 'hcce kuo toh wnietertsni ghtsip orlbmei ,si \'t sniasenyli tnreseitgn!';

function flipPairs(input){
  var output=''
  if (input.length % 2 === 0){
    for (var i=0; i<input.length; i+=2){
      output+=input[i+1];
      output+=input[i];
    }
  }else{
    for (var n=0; n< input.length-1; n+=2){
      output+=input[n+1];
      output+=input[n];
    }
    output+=input[input.length-1];
  }
  console.log (output);
}
flipPairs('check out how interesting this problem is, it\'s insanely interesting!')
=======
>>>>>>> 56a0b96d4505240c3e20e604060f6ba6f035be9e
