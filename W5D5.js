
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

function filter(array,predicate){
    var acc={}
    if(Array.isArray(array)){
      acc=[]
      each(array,function(element,i){
      if(predicate(element,i)){
        acc.push(element)
      }
    })
    }
    else{
      each(array,function(element,i){
      if(predicate(element,i)){
        acc[i]=element
      }
    })
    }  
    return acc
  }
/*
Using filter to write the following function:
-Write a function called evenMult that takes an array of numbers as a parameter, 
and returns an array of only the even numbers in the parameter that are also multiple of 2
evenMult([2,3,1,4,10,0,44]) ====> [2,10,44]
*/
function evenMult(array){
    return filter(array,function(element,i){
        return element %2===0 && i%2===0
    })
}
/*
Using filter, write a function called endsWithChar that takes two parameters: an array of strings, and a character (e.g. "a"), 
and returns an array of only the strings that end with that character:
var words=”we just love RBK world"
endsWithChar(words, “e"); // => [”we”,”love"]
*/
function endsWithChar(array,char){
    return filter(array,function(element){
        return element[element.length-1]===char
    })
}
endsWithChar(['we','love'], 'e')