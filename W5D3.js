/*
1- Using map, Write a function called uppercaseValues that, given an object as a parameter,
 returns a new object with all of its string values converted to uppercase. 
Also, ensure that you only attempt to convert strings to uppercase.

*/
function each(coll,func){
	if(Array.isArray(coll)){
		for(var i=0;i<coll.lenght;i++){
			func(coll[i],i)
		}
	}else{
		for(var key in coll){
			func(coll[key],key)
		}
	}
}

function map(coll,f){
	var arr=[]
	if(!Array.isArray(coll)){
		arr={}
	}
	each(coll,function(element,key){
		return arr[key]=f(element,key)
	})
	return arr
}


function reduce(array,f,start){
	var acc=start
	if(acc===undefined){
		acc=array[0]
		array=array.slice(1)
	}
	each(array,function(element){
		acc=f(acc,element)
	})
	return acc
}

function uppercaseValues(object){
	return map(object,function(element,key){
		 if(typeof(element)==="string"){
		 	return object[key].toUpperCase()
		 }
		 return object[key]
	})
}
/*
2- Using reduce, write a function that sums the squared values of an array of numbers and returns the sum result.
*/
function sum(numbers) {
	return reduce(numbers,function(value,num){
		console.log(num)
				console.log(value)

		return value+=num**2
	},1)

}
sum([1,2,3,4,5])