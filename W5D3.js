/*
1- Using map, Write a function called uppercaseValues that, given an object as a parameter,
 returns a new object with all of its string values converted to uppercase. 
Also, ensure that you only attempt to convert strings to uppercase.
*/

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

function map(coll, f) {
  var acc = []
  if (!Array.isArray(coll)) {
    acc = {}
  }
  each(coll, function(element, i) {
    // acc.push(f(element, i))
    acc[i] = f(element, i)
  })
  return acc}

function uppercaseValues(o){

return map (o, function(item,i){

	if(typeof(item)==="string"){return item.toUpperCase()}

		return item
})

}
uppercaseValues({a:"hi",b:3})

/*
2- Using reduce, write a function that sums the squared values of an array of numbers and returns the sum result.
*/

function reduce(c,f,a){
	  if(a===undefined){
	    a=c[0]
	    c=c.slice(1)
	  }
	  each(c ,function(item,i){
	    a = f(a,item,i)
	  })
	  return a
	}

function sum(x){
  return reduce(x,function(acc,item,i){
    return acc+item*item
  })
}
sum([1,2,3])