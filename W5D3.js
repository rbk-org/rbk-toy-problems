

/*
1- Using map, Write a function called uppercaseValues that, given an object as a parameter,
 returns a new object with all of its string values converted to uppercase. 
Also, ensure that you only attempt to convert strings to uppercase.
*/
function each(coll, func){

  if(Array.isArray(coll)){
    for(var i = 0; i < coll.length; i++){
      func(coll[i], i);
    }
  }
  else{
    for(var key in coll){
      func(coll[key], key);
    }
  }
}

function map(coll, func){
  var acc = []
  if(!Array.isArray(coll)){
    acc = {};
  }

  each(coll, function(element, i){
    acc[i] = func(coll[i],i);
  })

  return acc;
}

function uppercaseValues(obj){

  return map(obj, function(val, key){
    if(typeof val === 'string'){
    return val.toUpperCase();
  }
  return val;
  })
}

var testObj = {
  name: 'Dima',
  time: 'morning',
  colors: 'pink, yellow',
  year: 2020,
  objNotString: {a:1, b:2}
}

uppercaseValues(testObj);
/*
2- Using reduce, write a function that sums the squared values of an array of numbers and returns the sum result.
*/

function reduce(coll, func, start){
  var acc;
  if(start === undefined){
  if(Array.isArray(coll)){
    acc = coll[0];
    coll = coll.slice(1);
  }
  else{
    var keys = Object.keys(coll);
    acc = coll[keys[0]];
    delete coll[keys[0]];
  }}
  else{
    acc = start;
  }
  each(coll, function(element, i){
    acc = func(acc, element);
  })
  return acc;
}
function sum(numbers) {
    return reduce(numbers, function(acc, num){
      return acc += num;
    }, 0) 
}

//sum for object test
var obj2 = {
  a:1,
  b:2,
  c:50
}
function sum2(obj) {
    return reduce(obj, function(acc, val){
      return acc += val;
    }, 0)
}