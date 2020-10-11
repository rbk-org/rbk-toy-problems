
Using filter to write the following function:
-Write a function called evenMult that takes an array of numbers as a parameter, 
and returns an array of only the even numbers in the parameter that are also multiple of 2
evenMult([2,3,1,4,10,0,44]) ====> [2,10,44]



Using filter, write a function called endsWithChar that takes two parameters: an array of strings, and a character (e.g. "a"), 
and returns an array of only the strings that end with that character:
var words=”we just love RBK world"
endsWithChar(words, “e"); // => [”we”,”love"]


function each(array, func) {

for (var i = 0; i < array.length; i++) {

func(array[i], i);

}

}

function filter(array, predicate) {

var acc = [];

each(array, function(element) {

if (predicate(element)) {

acc.push(element);

}

});

return acc;

}

function evenMult(numbers) {

return filter(numbers, function(numbers) {

return numbers%2 === 0;

});
}


function endsWithChar(array,cha) {

return filter(array, function(array,cha) {

if (str.includes(cha, 0)===true{
	return str;
}

});

}