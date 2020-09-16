/*
Using filter to write the following function:
-Write a function called evenMult that takes an array of numbers as a parameter, 
and returns an array of only the even numbers in the parameter that are also multiple of 2
evenMult([2,3,1,4,10,0,44]) ====> [2,10,44]
*/
function each(coll, fn) {
	if (Array.isArray(coll) || typeof coll === 'string'){
		for (var i = 0; i < coll.length; i++) {
			fn(coll[i], i)
		}
	} else {
		for (var key in coll) {
			fn(coll[key], key)
		}
	}
}
//////////////////////////////////
function filter(coll, predicate) {
	var acc = [];
 	if(!Array.isArray(coll)) {
    	acc = {};
    	each(coll, function(val, key) {
    		if (predicate(val, key)) {
    			acc[key] = val
    		}
    	})
  	} else {
		each(coll, function(elem, i) {
			if (predicate(elem, i)) {
				acc.push(elem);
			}
		})
	}
	return acc;
}
//////////////////////////////////////////
function evenMult(array) {
	return filter(array , function(num,i){
		if(num % 2 === 0){
			return num 
		}
	}
}
evenMult([2,3,1,4,10,0,44]) //====>[ 2, 4, 10, 44 ]

/*
Using filter, write a function called endsWithChar that takes two parameters: an array of strings, and a character (e.g. "a"), 
and returns an array of only the strings that end with that character:
var words=”we just love RBK world"
endsWithChar(words, “e"); // => [”we”,”love"]
*/
var words="we just love RBK world"
function endsWithChar(array , char) {
	var arr = array.split(' ');
	return filter(arr , function(str , i){
		if(str[str.length-1] === char){
			return str;
		}
	})
}
endsWithChar(words, "e");// => ["we","love"]