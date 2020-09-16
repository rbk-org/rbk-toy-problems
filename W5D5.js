function filter(arr, predicate) {
  var acc1 = [];
  each(arr, function(element, i) {
    if (predicate(element, i)) {
      acc1.push(element);
    }
  })
  return acc1;


/*
Using filter to write the following function:
-Write a function called evenMult that takes an array of numbers as a parameter, 
and returns an array of only the even numbers in the parameter that are also multiple of 2
evenMult([2,3,1,4,10,0,44]) ====> [2,10,44]
*/

  function evenMult(numbers){
  	return filter(numbers, fuction(element){
  		return element.length % 2 === 0 && i % 2 === 0 
  	})
  }
/*
Using filter, write a function called endsWithChar that takes two parameters: an array of strings, and a character (e.g. "a"), 
and returns an array of only the strings that end with that character:
var words=”we just love RBK world"
endsWithChar(words, “e"); // => [”we”,”love"]
*/

function endsWithChar (array, string){
	return filter(array, function(element){
return element [0] - 1 === string
	})
}