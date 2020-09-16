/*
Using filter to write the following function:
-Write a function called evenMult that takes an array of numbers as a parameter, 
and returns an array of only the even numbers in the parameter that are also multiple of 2
evenMult([2,3,1,4,10,0,44]) ====> [2,10,44]
*/
function evenMult(array){
    return filter(array, function(element){
        return element % 2 === 0;
    });

}
/*
Using filter, write a function called endsWithChar that takes two parameters: an array of strings, and a character (e.g. "a"), 
and returns an array of only the strings that end with that character:
var words=”we just love RBK world"
endsWithChar(words, “e"); // => [”we”,”love"]
*/
function endsWithChar(array, char){
    var x = array.split(" ");
    return filter(x, function(element){
        return element[element.length - 1] === char;
    });
}

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

function filter(coll, predicate) {
    var acc = [];
    // if (!Array.isArray(coll)) {
    //     acc = {};
    // }
    each(coll, function (element, key) {
        if (predicate(element)) {
            acc.push(element);
        }
    });
    return acc;
}