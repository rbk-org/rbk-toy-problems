
// 1- Write a function called countNumOfStrings that takes an array of
// mixed elements (different data types)
// and returns the number of strings there are in the array.
// Calling your function should result in:
// countNumOfStrings(["hello", "world", 5, true, {}]); //2
// countNumOfStrings(["foo", 2, 10, "bar", 5, false, {}, "baz"]); //3
// countNumOfStrings(["There is only one string in this example"]); //1
// Hint: Recall typeof? If not: check it out on MDN. :-)



function  countNumOfStrings(array)
{
var sum=0;
	for(var i=0;i<array.length;i++)
	{
     if(typeof array[i] == "string")
     {
      sum +=1;
     }
	}
	return sum;
}

countNumOfStrings(["foo", 2, 10, "bar"])



// 2- Write a function called listLengthOfAllWords that takes an array
// of words (strings),
// and returns an array of numbers representing the length of each word.
// Calling your function should result in:
// listLengthOfAllWords(['hello', 'world', 'I', 'can', 'code']); //[5, 5,1, 3, 4];


function listLengthOfAllWords(array)
{
  var x=[];
  for(var i=0;i<array.length;i++)
  {
  x.push(array[i].length);
  }
  return x;
}


listLengthOfAllWords(['hello', 'world', 'I', 'can', 'code'])


// Write a function called flipPairs that takes a string a parameter
// and returns the given string after Flip every pair of characters.
// Example:
// var input = 'check out how interesting this problem is, it\'s insanely
// interesting!';
// var output = flipPairs(input);
// console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei

function flipPairs(string)
{
  var x=''
  for(var i=1;i<string.length;i+=2)
  {
    x+=string[i]+string[i-1];
  }
  return x;
}

flipPairs("heck out how interesting this problem is, it\'s insanely interesting!")





