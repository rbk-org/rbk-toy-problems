/*
1- Using map, Write a function called uppercaseValues that, given an object as a parameter,
 returns a new object with all of its string values converted to uppercase. 
Also, ensure that you only attempt to convert strings to uppercase.
*/
function improvedMap(coll,f){
	var acc=[]
	if(!Array.isArray(coll)){
		acc={}
	}
	each (coll,function(element,key){
		acc[key]=f(element,key)
	})
	return acc
}
function uppercaseValues(obj){
	return improvedMap(obj,function(value,key){
		if(typeof value==='string'){
			return obj[key]=value.toUpperCase()
		}
		return obj[key]=value
	})
}



/*
2- Using reduce, write a function that sums the squared values of an array of numbers and returns the sum result.
*/
function reduce (array,f,acc){
	if(acc===undefined){
		acc=array[0]
		array=array.slice(i);
	}
	each (array,function(element,i){
		acc=f(acc,element,i)
	});
	return acc
}
function sum(numbers) {
	//your code is here 

}