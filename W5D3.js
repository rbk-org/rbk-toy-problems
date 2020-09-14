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
function map(coll, func) {
  var acc = [];
  if(Array.isArray(coll)){
  	acc={}
  }
  each(coll, function(element, key) {
    acc[key]=func(element, key);
  });
  return acc;
}
function uppercaseValues(obj){
  return map(obj,function(element,k){
    if(typeof element === 'string'){
      return element.toUpperCase()
    }
    else 
    return element
  })
}
console.log(uppercaseValues({a:1,b:"hello",c:true,d:"world"}))



/*
2- Using reduce, write a function that sums the squared values of an array of numbers and returns the sum result.
*/
function reduce(arr, f, acc){ 
  if(acc === undefined){
    acc =arr[0]; 
    arr = arr.slice(1);
  }
  each(arr,function(element){ 
    acc =f(acc,element)
  });
  return acc;
  
}
function sum(numbers) {
	//your code is here 
  return reduce(numbers,function(result,element){
    return result+=element*element
  })
}
