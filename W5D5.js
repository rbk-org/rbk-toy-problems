/*
Using filter to write the following function:
-Write a function called evenMult that takes an array of numbers as a parameter, 
and returns an array of only the even numbers in the parameter that are also multiple of 2
evenMult([2,3,1,4,10,0,44]) ====> [2,10,44]
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

function filter(coll, predicate){
  var acc = [];
  each(coll, function(element,i){
    if(predicate(element,i)){
    acc.push(element)
    }
  })
  return acc;
}

function evenMult(numbers){
  return filter(numbers, function(num,i){
    return (num%2 === 0 && i % 2 ===0)
  })
}
evenMult([2,3,1,4,10,0,44])
/*
Using filter, write a function called endsWithChar that takes two parameters: an array of strings, and a character (e.g. "a"), 
and returns an array of only the strings that end with that character:
var words=”we just love RBK world"
endsWithChar(words, “e"); // => [”we”,”love"]
*/

var words = "we just love RBK world";
function endsWithChar(string, char){
  var strings = string.split(" ");
  return filter(strings, function(word, i){
    return (word[word.length - 1] === char);
  })
}

