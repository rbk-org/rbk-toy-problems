/*
1- Using map, Write a function called uppercaseValues that, given an object as a parameter,
 returns a new object with all of its string values converted to uppercase. 
Also, ensure that you only attempt to convert strings to uppercase.
*/
function each(coll,func){
  if(Array.isArray){
  for(var i = 0; i<coll.length;i++){
      func(coll[i],i)
    }
  }else{
    for(var key in coll){
      func(coll[key],key)
    }
  }
} 
function map(coll,f){
  var acc = []
  if(!Array.isArray(coll)){
      acc = {}
  }
  each(coll,function (value,key){
    acc[key] = f(value,key)
  })
  return acc 
 }
function reduce(arr, f, acc ) {
	if (acc === undefined) {
		acc = arr[0];
		arr = arr.slice(1);
	}
	each(arr, function(element, i){
		acc = f(acc, element, i);
	});
return acc;
}


function uppercaseValues(obj){
	return map(obj,function (value,key){
		return value.toUpperCase()
})
}


/*
2- Using reduce, write a function that sums the squared values of an array of numbers and returns the sum result.
*/
function reduce(arr, f, acc ) {
	if (acc === undefined) {
		acc = arr[0];
		arr = arr.slice(1);
	}
	each(arr, function(element, i){
		acc = f(acc, element, i);
	});
return acc;
}

function sum(numbers) {
	//your code is here 
	return reduce(numbers,function(result,element){
		return result + element
	},0)
}