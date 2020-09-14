
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

/*
1- Using map, Write a function called uppercaseValues that, given an object as a parameter,
 returns a new object with all of its string values converted to uppercase. 
Also, ensure that you only attempt to convert strings to uppercase.
*/

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
 } 
 each(array, function(element, i) { 
   acc = f(acc, element, i); 
 }); 
 return acc; 
}

function uppercaseValues(obj) {
return map (obj , function(element , key){
    if (typeof (obj[key]) === 'string'){
    return obj[key].toUpperCase()
     } else return obj[key]
    
   })
    }
var strArr = {name:'hello', age: 20}
uppercaseValues(strArr)



/*
2- Using reduce, write a function that sums the squared values of an array of numbers and returns the sum result.
*/
function sum(numbers) {
return reduce(numbers , function(result , num){
	return result += Math.pow(num, 2)

})
}

 sum([1,2,3])