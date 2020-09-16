/*
Using filter to write the following function:
-Write a function called evenMult that takes an array of numbers as a parameter, 
and returns an array of only the even numbers in the parameter that are also multiple of 2
evenMult([2,3,1,4,10,0,44]) ====> [2,10,44]
*/
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


// function filter(array, predicate) {
//   var acc = [];
//   each(array, function(element, i) {
//     if (predicate(element, i)) {
//       acc.push(element);
//     }
//   });
//   return acc;
// }
function filter(coll, predicate) {
  var acc = {};
  if (Array.isArray(coll)) {
    acc = [];
  }
  each(coll, function (element, key) {
    if (predicate(element)) {
      if (Array.isArray(acc)) {
        acc.push(element);
      }
    
    }
  });
  return acc;
}



//----------------------------------------------------
function  evenMult(numbers){
 return filter(numbers, function (element, i) {
    return element % 2 === 0 && element /2;
  });

}
console.log(evenMult([2,3,1,4,10,0,44])) //====> [2,4,10,44]

/*
Using filter, write a function called endsWithChar that takes two parameters: an array of strings, and a character (e.g. "a"), 
and returns an array of only the strings that end with that character:
var words=”we just love RBK world"
endsWithChar(words, “e"); // => [”we”,”love"]
*/
function endsWithChar(strings,char){
  if(typeof strings === "string"){
     var arr = strings.split(' ');
  }
  return filter(arr,function(str,i){
    return  str.charAt(str.length - 1) === char;
  });
 

}
var words='we just love RBK world';
console.log(endsWithChar(words, 'e')); // => [”we”,”love"]