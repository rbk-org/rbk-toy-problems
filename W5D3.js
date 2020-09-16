function map(array, f) {
	  var acc = [];
	  each(array, function(element) {
    acc.push(func(element));
  });
	  return acc;
	}



/*
1- Using map, Write a function called uppercaseValues that, given an object as a parameter,
 returns a new object with all of its string values converted to uppercase. 
Also, ensure that you only attempt to convert strings to uppercase.
*/
function uppercaseValues(obj){
	return map(obj, function(element){
		obj.push(element.uppercaseValues)
	})

}



/*
2- Using reduce, write a function that sums the squared values of an array of numbers and returns the sum result.
*/

function reduce(arr, f, start) {
	var acc = start;
		each(arr, function(element, i){
			acc = f(acc, element, i);
});
	return acc;
}


function sum(numbers) {
	return reduce(numbers, function(result, num){
return result * num 

	},1)
}