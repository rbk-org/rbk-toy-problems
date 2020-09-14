/*
1- Using map, Write a function called uppercaseValues that, given an object as a parameter,
 returns a new object with all of its string values converted to uppercase. 
Also, ensure that you only attempt to convert strings to uppercase.
*/
function each(coll, func) {
 //write your code here 
 if(Array.isArray(coll)){
 	for(var i = 0 ; i < coll.length ; i++){
 		func(coll[i],i)
 	}
 }else{
 	for(var key in coll){
 		func(coll[key],key)
 	}
 }
}

function map(coll, f) {
	var arr = [];
	if(!Array.isArray(coll)){
		arr={}
	}
	each(coll, function(element,key){
		arr[key]=f(element,key);
	})
	return arr;
}

var obj = {a:'a',b:'b',c:'c'}

function uppercaseValues(obj){
	return map(obj,function(element){
		return element.toUpperCase();
	})
}

/*
2- Using reduce, write a function that sums the squared values of an array of numbers and returns the sum result.
*/
function reduce(array,f,start){
    var acc = start;
  if(acc===undefined){
    acc = array[0]
  }
  each(array,function(element){
    acc = f(acc,element);
  })
  return acc
}

function sum(numbers) {
	//your code is here 
	return reduce (numbers,function(sum,num){
		return sum+num**2
	},0)
}