/*
1- Using map, Write a function called uppercaseValues that, given an object as a parameter,
 returns a new object with all of its string values converted to uppercase. 
Also, ensure that you only attempt to convert strings to uppercase.
*/
function each(coll,f){
  if(Array.isArray(coll)){
    for(var i =0; i<coll.length; i++){
    f(coll[i],i);  
    }
  }
  else for ( var key in coll){
    f(coll[key],key)
  }
}

function map(coll,f){
  var acc=[]
  if(!Array.isArray(coll)){
    acc={}
  }
 each (coll,function (value,key){
   acc[key]=f(value,key)
 })
 return acc
  }
 function uppercaseValues(obj){
   var neOb={}
  return map (obj,function(value,key){
 	if(typeof value ==="string"){
 		value=value.toUpperCase()
     return value
 	}
 })
 }
var o1= {
a:"cool",
b:"hi",
c:"happy",
d:"nice",
e:"hello"
}
uppercaseValues(o1)


/*
2- Using reduce, write a function that sums the squared values of an array of numbers and returns the sum result.
*/
function each(coll,f){
  if(Array.isArray(coll)){
    for(var i =0; i<coll.length; i++){
    f(coll[i],i);  
    }
  }
  else for ( var key in coll){
    f(coll[key],key)
  }
}
function reduce(array,f,acc){
  if(acc === undefined)
  {
    acc=array[0];
    array=array.slice(1);
  }
  each(array,function(x){
  acc=f(acc,x);
 })
 return acc;
}

function sum(numbers) {
	//your code is here 
	return reduce(numbers,function(result,value){
		return result+(value**2)
	},0)

}
var arr=[1,2,3]
sum(arr)