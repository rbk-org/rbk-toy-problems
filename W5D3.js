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

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}
function reduce(array, f, acc) { 
 if (acc === undefined) { 
   acc = array[0]; 
   array = array.slice(1); 
 } 
 each(array, function(element, i) { 
   acc = f(acc, element, i); 
 }); 
 return acc; 
}


/*
1- Using map, Write a function called uppercaseValues that, given an object as a parameter,
 returns a new object with all of its string values converted to uppercase. 
Also, ensure that you only attempt to convert strings to uppercase.
*/



function uppercaseValues(obj){
	return map(obj,function(value,key){
		if(typeof value==='string'){
			return obj[key].toUpperCase()
  };
     return obj[key];
});
}

var obj1={name:"shaima",age:20,gender:"female"};
uppercaseValues(obj1)


/*
2- Using reduce, write a function that sums the squared values of an array of numbers and returns the sum result.
*/


function sum(numbers) {
	return reduce(numbers,function(result,num){
           return result+=num
	},0);
}