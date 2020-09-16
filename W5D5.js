function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}
function filter(arr, predicate) {
  var acc = []
  each(arr, function(elem, i) {
    if (predicate(elem, i)) {
      acc.push(elem)
    }
  })
  return acc
}


/*
Using filter to write the following function:
-Write a function called evenMult that takes an array of numbers as a parameter, 
and returns an array of only the even numbers in the parameter that are also multiple of 2
evenMult([2,3,1,4,10,0,44]) ====> [2,10,44]
*/
function evenMult(arr) { // what do you mean? all even numbers are multiples of 2! even 4, so am going to asume you are talking about index
	return filter(arr, function(elem, i) {
		if (elem % 2 === 0 && i %2 === 0) {
			return elem
		}
	})
}
console.log(evenMult([2, 3, 1, 4, 10, 0, 44])) // [ 2, 10, 44 ]

/*
Using filter, write a function called endsWithChar that takes two parameters: an array of strings, and a character (e.g. "a"), 
and returns an array of only the strings that end with that character:
var words=”we just love RBK world"
endsWithChar(words, “e"); // => [”we”,”love"]
*/
function endsWithChar(str, char) {
	var arr = str.split(' ')
	return filter(arr, function(elem) {
		if (elem[elem.length - 1] === char) {
			return elem
		}
	})
} 
console.log(endsWithChar('we are the champions', 'e')) // [ 'we', 'are', 'the' ]