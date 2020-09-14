/*
1- Using map, Write a function called uppercaseValues that, given an object as a parameter,
 returns a new object with all of its string values converted to uppercase. 
Also, ensure that you only attempt to convert strings to uppercase.
*/

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

function map(coll, fun) {
    var acc = [];
    if (!Array.isArray(coll)) {
        acc = {}

    }
    each(coll, function (value, key) {
        acc[key] = fun(value, key)
    })
    return acc
}

function uppercaseValues(object) {
	
  return map(object,function(value,key){
  	return value.toUpperCase()
  })
}
var pepole = {1:"hanadi",2:"ahmad"};
uppercaseValues(pepole)


/*
2- Using reduce, write a function that sums the squared values of an array of numbers and returns the sum result.
*/

function reduce(array, f, acc) {
    if (acc === undefined) {
        acc = array[0]
        array = array.slice(1)

    }
    each(array, function (element) {
        acc = f(acc, element)
    })
    return acc
}


function sum(numbers) {
	 return reduce(numbers, function (total, num) {
        return total + num * num;
    })
}
sum([1, 2, 6])
