/*
1- Using map, Write a function called uppercaseValues that, given an object as a parameter,
 returns a new object with all of its string values converted to uppercase. 
Also, ensure that you only attempt to convert strings to uppercase.
*/
//first thing i should write the each and map function to use them to solve the question
//*************** EACH FUNCTION **********************************
function each(coll, func) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      func(coll[i], i);
    }
  } else {
    for (var key in coll) {
      func(coll[key], key);
    }
  }
}
//*************** MAP FUNCTION **********************************
function map(coll, f) {
  var acc = [];
  if (!Array.isArray(coll)) {
    acc = {};
  }
  each(coll, function (element, key) {
    acc[key] = f(element, key);
  });
  return acc;
}

function uppercaseValues(obj) {                  // to return all string value as upper case , 
  return map(obj, function (element, key) {      //call the function map
    if (typeof element === "string") {           // then we will check if the element have string value of not                                                                 
      return element.toUpperCase();               // so if (if statememnt) return true convert the string to upper case
    }
    return element;                               // if  (if statememnt) return false retrun the element as it is .
  });
}
console.log(uppercaseValues({first:'hello',second: 2020 ,third:'world'}))                 // an exaple the check the function 





/*
2- Using reduce, write a function that sums the squared values of an array of numbers and returns the sum result.
*/
// we need to wrie each function and reduce ( each i wrote it above)

//*************** REDUCE FUNCTION **********************************
function reduce(array, f, acc) {
  if (acc === undefined) {
    acc = array[0];
    array = array.slice(1);
  }
  each(array, function (element, i) {
    acc = f(acc, element, i);
  });
  return acc;
}


function sum(numbers){                            // reduce will take numbers array , and function with parameter sum and element 
	return reduce(numbers,function(sum,num){        //of the array. inside function we need to retun  sum of each element after                                                      //square the value of it 
    //return sum += Math.pow(num, 2);  //another way to find the squre value and sum it 
    return sum = sum + num*num
  },0)

}
sum([2,3,4]) // = 4+9+16 = 29
//sum([5,4,2]) //= 25+16+4 = 45