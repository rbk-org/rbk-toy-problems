/*
Using filter to write the following function:
-Write a function called evenMult that takes an array of numbers as a parameter, 
and returns an array of only the even numbers in the parameter that are also multiple of 2
evenMult([2,3,1,4,10,0,44]) ====> [2,10,44]
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
function filter(array, predicate) {
    var acc = []
    each(array, function (element) {
        if (predicate(element)) {
            acc.push(element)
        }
    })
    return acc
}
function evenMult(numbers) {
    return filter(numbers, function (number,i){
        return number % 2 === 0 && number !==0
       
             
    })
}
evenMult([2,3,1,4,10,0,44])
//[2, 4, 10, 44]

/*
Using filter, write a function called endsWithChar that takes two parameters: an array of strings, and a character (e.g. "a"), 
and returns an array of only the strings that end with that character:
var words=”we just love RBK world"
endsWithChar(words, “e"); // => [”we”,”love"]
*/
function endsWithChar(strings, char) {
    return filter(strings, function (string) {
        if (string[string.length-1] === char){
         return string
        }
    })
}
var words = 'we just love RBK world'.split(' ');
endsWithChar(words, 'e');//  ["we", "love"]
