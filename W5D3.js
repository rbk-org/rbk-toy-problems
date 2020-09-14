/*
1- Using map, Write a function called uppercaseValues that, given an object as a parameter,
 returns a new object with all of its string values converted to uppercase. 
Also, ensure that you only attempt to convert strings to uppercase.
*/

function each(c,f){
	if (!Array.isArray(c)) {
    for(var i in c){
    	f(c[i],i)
    }
  }
  else{
  for(var i=0;i<c.length;i++){
  	f(c[i],i)}}
}

function map(c,f) {
  var a = []
  if (!Array.isArray(c)) {
    a = {}
  }
  each(c, function(item, i) {
    a[i] = f(item, i)
  })
  return a
}

function uppercaseValues(o){
	return map(o,function(item,i){
		if(typeof(item)==="string"){
		return item.toUpperCase()}
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
	    a=c.slice(1)
	  }
	  each(a ,function(item,i){
	    a = f(a,item,i)
	  })
	  return a
	}

function sum(x){
  return reduce(x,function(a,item,i){
    return item*item
  })
}
sum([1,2,3])