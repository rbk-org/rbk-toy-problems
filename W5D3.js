
function reduce(array, f, acc) { 
 if (acc === undefined) { 
   acc = array[0]; 
   array = array.slice(1); 
 } 
 each(array, function(element, i) { 
   acc = f(acc, element, i); 
 }); 
 return acc; 
}
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
var t= each([1,2,3],function(element,i){
	//console.log(element)
})

function mapImproved(item, f) {
	if(!Array.isArray(item) &&  Array.isArray(Object.keys(item))){
			  var acc = {};
			  each(item, function(element, i) {

			    acc[i]=f(element, i);
			  });
			  return acc;
	}else if(Array.isArray(item)){
			  var acc = {};
			  each(item, function(element, i) {

			    acc[i]=f(element, i);
			  });
			  return acc;
	}
	else "is not applicable"
}

/*
1- Using map, Write a function called uppercaseValues that, given an object as a parameter,
 returns a new object with all of its string values converted to uppercase. 
Also, ensure that you only attempt to convert strings to uppercase.
*/
function toUpperCaseStringsOnly(a){
	 mapImproved(a,function(item,i){
		if(typeof a[i]==='string')a[i]=item.toUpperCase();
	})
	 return a
}
var arr=["sufyan","Jamleh",1,2,"hello"]
console.log(toUpperCaseStringsOnly(arr));
var arr={1:"sufyan",2:"Jamleh",3:1,4:2,5:"hello"}
console.log(toUpperCaseStringsOnly(arr));
/*
2- Using reduce, write a function that sums the squared values of an array of numbers and returns the sum result.
*/
/******************* with built-in reduce ******************/
function sum(numbers) {
	//your code is here 
	return numbers.reduce((acc,item) => acc+item);

}
var arr2=[1,2,3,4,5,6,7,8]
console.log(sum(arr2));
/*************** with reduce that been made in Hebron **********/
function sum(numbers) {
	//your code is here 
	return reduce(numbers,(acc,item) => acc+item);

}
var arr2=[1,2,3,4,5,6,7,8]
console.log(sum(arr2));

