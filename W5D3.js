/*
1- Using map, Write a function called uppercaseValues that, given an object as a parameter,
 returns a new object with all of its string values converted to uppercase. 
Also, ensure that you only attempt to convert strings to uppercase.
*/
function uppercaseValues(object){
	return map(object, function(value, key){
		if(typeof value === "string"){
			return value.toUpperCase()
		}
		return value;
	});
}




/*
2- Using reduce, write a function that sums the squared values of an array of numbers and returns the sum result.
*/
function sum(numbers) {
	//your code is here 
	return reduce(numbers, function(sum, num){
		return sum + num ** 2;
	}, 0)

}


//////////////////////////////////////
function each(coll, func) {
	if (Array.isArray(coll)) {
		for (var i = 0; i < coll.length; i++) {
			func(coll[i], i);
		}
	} else {
		for (var key in coll) {
			func(coll[key], key);
		}
	}
}
function map(coll, f) {
    var acc = [];
    if (!Array.isArray(coll)) {
        acc = {};
    }
    each(coll, function (element, key) {
        acc[key] = f(element, key);
    });
    return acc;
}

function reduce(array, f, acc) {
	if (acc === undefined) {
		acc = array[0];
		array = array.slice(1);

		each(array, function (element) {
			acc = f(acc, element);
		});
		return acc;
	}
	else {
		var newAcc = acc;
		each(array, function (element) {
			newAcc = f(newAcc, element);
		});
		return newAcc;
	}

}