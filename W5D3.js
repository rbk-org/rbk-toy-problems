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

function map(coll, fn) {
	var acc = []
	if(!Array.isArray(coll)) {
		acc = {}
	}
	each(coll, function(elem, index) {
		acc[index] = fn(elem, index)
	})
	return acc
}

function filter(arr, predicate) {
	var acc1 = [];
	each(arr, function(elem1) {
		if (predicate(elem1)) {
			acc1.push(elem1);
		}
	})
	return acc1;
}

function reduce2(coll, fn, acc) {
  var arr
  if(!Array.isArray(coll) && typeof(coll) === 'object') {
    arr = Object.values(coll)
  } else  arr = coll.slice(0)
  if (acc === undefined) {
    acc = arr[0]
    arr = arr.slice(1)
  }
  each(arr, function(elem, i) {
    acc = fn(acc, elem)
  })
  return acc
}
/*
1- Using map, Write a function called uppercaseValues that, given an object as a parameter,
 returns a new object with all of its string values converted to uppercase. 
Also, ensure that you only attempt to convert strings to uppercase.
*/
function upperCaseVlaues(obj) {
	return map(obj, function(val, key) {
		if (typeof val === 'string') {
			return obj[key] = val.toUpperCase()
		} return obj[key] = val
	})
}
console.log(upperCaseVlaues({a: 1, b: 'b', c: 3, d: 'd'})) // { a: 1, b: 'B', c: 3, d: 'D' } 



/*
2- Using reduce, write a function that sums the squared values of an array of numbers and returns the sum result.
*/
function sum(numbers) {
	return reduce2(numbers, function(acc, elem) {
		return acc + (elem**2)
	}) 
}
console.log(sum([1, 2, 3])) // 1 + 4 + 9 = 14