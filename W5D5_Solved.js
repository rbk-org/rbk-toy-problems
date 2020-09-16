/*
Using filter to write the following function:
-Write a function called evenMult that takes an array of numbers as a parameter, 
and returns an array of only the even numbers in the parameter that are also multiple of 2
evenMult([2,3,1,4,10,0,44]) ====> [2,10,44]
*/
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
function filter(array,predicate){
  var acc = []
  each(array, function(element){
    if(predicate(element)){
      acc.push(element)
    }
  })
  return acc
}
arr = [2,3,1,4,10,0,44]
function evenMult(arr){
 return filter(arr,function(num){
 return num%2===0 && num/2!==0
})
}
console.log(evenMult(arr))

/*
Using filter, write a function called endsWithChar that takes two parameters: an array of strings, and a character (e.g. "a"), 
and returns an array of only the strings that end with that character:
var words=”we just love RBK world"
endsWithChar(words, “e"); // => [”we”,”love"]
*/
function endsWithChar(words,char){
	return filter(words,function(word){
	return word[word.length-1] === char
	})
}
var words="we just love RBK world".split(" ")
console.log(endsWithChar(words,"e"))