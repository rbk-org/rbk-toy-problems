/*
1- Using map, Write a function called uppercaseValues that, given an object as a parameter,
 returns a new object with all of its string values converted to uppercase. 
Also, ensure that you only attempt to convert strings to uppercase.
*/
//each function
function each(coll,f){
  if(Array.isArray(coll)){             
    for(var i=0; i<coll.length; i++){  
      f(coll[i],i)                     
    }                                  
  }                                    
  else{                                
    for(var key in coll){
      f(coll[key],key)
    }
  }
}
//map function
function map(coll,f){
  var acc = []
  if(Array.isArray(coll)){
    acc = {}
  }
  each(coll, function(element,key){
      acc[key] = (f(element,key))
  })
  return acc
}
  var object = {a: "hello", b: "world"}
function uppercaseValues(obj){
  return map(obj,function(value,key){
  	  if(typeof value === "string"){
 		 return value.toUpperCase()
        }
   })
}
console.log(uppercaseValues(object))

/*
2- Using reduce, write a function that sums the squared values of an array of numbers and returns the sum result.
*/
//reduce function
function reduce(array,f,acc){
  if(acc === undefined){
      acc = array[0]
      array = array.slice(1)
  }
  each(array,function(element,i){
    acc = f(acc,element,i)
  })
  return acc
}
 var numbers = [1,2,3,4,5]
function sum(numbers) {
 return reduce(numbers,function(summation,num){
      return summation+=num**2
  })
}
console.log(sum(numbers))