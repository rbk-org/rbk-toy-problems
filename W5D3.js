/*
1- Using map, Write a function called uppercaseValues that, given an object as a parameter,
 returns a new object with all of its string values converted to uppercase. 
Also, ensure that you only attempt to convert strings to uppercase.
*/
function each(coll, fun) {
 if (Array.isArray(coll)) {
   for (var i = 0; i < coll.length; i++) {
     fun(coll[i], i);
   }
 }else {
   for (var key in coll) {
     fun(coll[key], key);
   }
 }
}

function map(coll , fun) {
  var acc = []
  if (!Array.isArray(coll)) {
    acc = {}
  }
  each(coll , function (value , key) { 
    acc[key] = fun(value,key);
  });
  return acc;
}
function uppercaseValues(obj) {
	return map(obj , function (value,key){
		if (typeof value === 'string'){
			  return value.toUpperCase()
		} else return value
	})
}
uppercaseValues({name:'rasah', age:32, favColor: 'purpel'})// { name: 'RASAH', age: 32, favColor: 'PURPEL' }


/*
2- Using reduce, write a function that sums the squared values of an array of numbers and returns the sum result.
*/
function sum(numbers) {
	return reduce(numbers, function(acc , num){
		return acc + num
	},0)
}
sum([1,2,4]) // 7
