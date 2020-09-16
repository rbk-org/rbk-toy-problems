
function each(coll, f){
  if(Array.isArray(coll)){
    for(var i = 0; i < coll.length; i++){
      f(coll[i], i)
    }
  }
  else{
    for(var key in coll){
      f(coll[key], key)
    }
  }
}

function filter(array, predicate){
  var acc = []
  each(array,function(element,i){
    if(predicate(element,i)){
      acc.push(element)
    }
  })
  return acc
}


// Using filter to write the following function:
// -Write a function called evenMult that takes an array of numbers as a parameter, 
// and returns an array of only the even numbers in the parameter that are also multiple of 2

function evenMult(a){
	return filter(a,function(item,i){
		return item%2===0
	})
}
evenMult([2,3,1,4,10,0,44])

/*
Using filter, write a function called endsWithChar that takes two parameters: an array of strings, and a character (e.g. "a"), 
and returns an array of only the strings that end with that character:
var words=”we just love RBK world"
endsWithChar(words, “e"); // => [”we”,”love"]
*/

function endsWithChar(a,c){
	a=a.split(' ')
return filter(a,function(item,i){
	return (item[item.length-1]===c)
})
}
var words="We just love RBK world"
endsWithChar(words, 'e')