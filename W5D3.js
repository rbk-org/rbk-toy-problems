//*
1- Using map, Write a function called uppercaseValues that, given an object as a parameter,
 returns a new object with all of its string values converted to uppercase. 
Also, ensure that you only attempt to convert strings to uppercase.

function each(coll, func) {
if (Array.isArray(coll)){
	for(var i =0;i<coll.length;i++){
		func(coll[i],i);
	}
} 
else {
	for( var  key in coll){
		func(coll[key],key)
	}
}
}



function map(coll, f) {
	var acc = [];
	if(!Array.isArray(coll)){
		acc={};

	}
	each(coll,function(element,key){
		acc[key]=f(element,key);
	});
	  
	 return acc;
}

	function uppercasevalues(obj){
		return.map(obj,function(element,key){
			if (type of element===string){
				return element.touppercase
			}
			return element;
		});

	}

/*
1) implement map function

*/
	
/*
1) implement the improved map 
*/





/*
2- Using reduce, write a function that sums the squared values of an array of numbers and returns the sum result.
*/

function reduce(arr,f,acc){
	if (acc===undefined){
		acc=array[0];
		array=array.slice(1);
	}
	each(array,function(element,i){
		acc=f(acc,element,i);
	});
	return acc;
}











function sum(numbers) {
	return reduce (array,function(acc,element){
		return acc+element*element;
	});

}