/*
1- Using map, Write a function called uppercaseValues that, given an object as a parameter,
 returns a new object with all of its string values converted to uppercase. 
Also, ensure that you only attempt to convert strings to uppercase.
*/
function each(coll, func) {
	//write your code here  
	if(Array.isArray(coll)){
	   for(i=0;i<coll.length;i++){
		 func(coll[i],i)}}
	   else{for(k in coll){
		 func(coll[k],k)}}
   }
function map(coll, f) {
	var acc = [];
		if (!Array.isArray(coll)) {
		  acc = {}
		}
		each(coll, function(element, key) {
		  acc[key] = f(element, key)
		})
	 return acc;
}
function uppercaseValues(object){
	return map(object,function(element,key){
		return element.toUpperCase()
	})
}
var obj={a:'asem',b:'ameed'}



/*
2- Using reduce, write a function that sums the squared values of an array of numbers and returns the sum result.
*/
function reduce(array,f,start){
	var acc=start
	each(array,function(element,key){
	  acc=f(acc,element,key)
	})
	return acc
	}
function sum(numbers) {
	//your code is here 
	return reduce(numbers,function(acc,number){
		return acc+number
	},0)

}