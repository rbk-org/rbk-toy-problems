/*
1- Using map, Write a function called uppercaseValues that, given an object as a parameter,
 returns a new object with all of its string values converted to uppercase. 
Also, ensure that you only attempt to convert strings to uppercase.

*/
function each(array , func){
	for(var i = 0 ; i < array.length ; i++){
		func(array[i] , i)
	}
}
function map(coll , f){
	var acc = [];
	if(!Array.isArray(coll)){
     acc = {};
	}each(coll , function(element , key){
		acc[key]=f(element , key);
	})
	return acc;
}
function uppercaseValues(object){
	return map(object , function(value , key){
         if(typeof(value) === "string")
		return value.toUpperCase();
	} )
}



/*
2- Using reduce, write a function that sums the squared values of an array of numbers and returns the sum result.
*/
function sum(numbers) {
	//your code is here 

}
//i will solve it afetr studided these matrial ,,because i wasn't these day