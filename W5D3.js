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

	function map(coll, f) {
	var acc = [];
	if (!Array.isArray(coll)) {
		acc = {};
	}
	each(coll, function(val, key){
		acc[key] = f(val, key);
	});
	  
	 return acc;
}

   function uppercaseValues(obj) {
	return map(obj , function(value, key) {
		if (typeof obj[key] === 'string') {
			return obj[key].toUpperCase();
		 } else { return obj[key];
		} 	
     });
    }
uppercaseValues(['hello', 'hi', 'lolo', 3, 6])


/*
2- Using reduce, write a function that sums the squared values of an array of numbers and returns the sum result.
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

 function reduce(array, f, start) {
	var acc = 0;
	each (array, function(element) {
		acc = f(acc,element);
	 })
	return acc;
  }

 function sum(numbers) {
 return reduce(numbers, function(result, num){
 	return result += (num * num);
 });
}

sum([1, 2, 3])