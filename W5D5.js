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
function filter(array,predicate) {
  var acc=[];
  each(array,function(x){
  	if(predicate(x)){
  	acc.push(x);
  }
  })
  return acc;
}

/*
Using filter to write the following function:
-Write a function called evenMult that takes an array of numbers as a parameter, 
and returns an array of only the even numbers in the parameter that are also multiple of 2
evenMult([2,3,1,4,10,0,44]) ====> [2,10,44]
*/
function evenMult(array){
return filter(array,function(value){
 return value%2 ===0;
})
}
evenMult([2,3,1,4,10,0,44])
/*
Using filter, write a function called endsWithChar that takes two parameters: an array of strings, and a character (e.g. "a"), 
and returns an array of only the strings that end with that character:
var words=”we just love RBK world"
endsWithChar(words, “e"); // => [”we”,”love"]
*/
function endsWithChar(array,char){
return filter(array,function(value){
	if (value[value.length-1] ===char){
		return value
	}
})
}
var words="we just love RBK world"
endsWithChar(words,"e")
/////////////////
function endsWithChar(array,char){
return filter(array,function(value){
  value=value.split(" ")
  for (var i=0; i<value.length;i++){
 if(value[i][value[i].length-1] === char){
   return value[i]
 }
  }

})
}
var words=["we just love RBK world"]
endsWithChar(words,"e")
