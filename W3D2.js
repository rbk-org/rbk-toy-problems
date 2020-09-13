/*
1- Write a function called countNumOfStrings that takes an array of
mixed elements (different data types)
and returns the number of strings there are in the array.
Calling your function should result in:
countNumOfStrings(["hello", "world", 5, true, {}]); //2
countNumOfStrings(["foo", 2, 10, "bar", 5, false, {}, "baz"]); //3
countNumOfStrings(["There is only one string in this example"]); //1
Hint: Recall typeof? If not: check it out on MDN. :-)
*/
function countNumOfStrings(array) {
    var count = 0
    for (var i in array) {
        if (typeof (array[i]) === "string")
            count++
    }
    return count
}
//resolve using each
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
function countNumOfStrings(array) {
    var count = 0
    each(array, function (elemrnt) {
        if (typeof (elemrnt) === "string")
            count++
    })
    return count
}

/*
2- Write a function called listLengthOfAllWords that takes an array
of words (strings),
and returns an array of numbers representing the length of each word.
Calling your function should result in:
listLengthOfAllWords(['hello', 'world', 'I', 'can', 'code']); //[5, 5,
1, 3, 4];
*/
function listLengthOfAllWords(array) {
    var arrlength = []
    for (var i in array) {
        arrlength[i] = array[i].length
    }
    return arrlength
}

//resolve using each
function listLengthOfAllWords(array) {
    var arrlength = []
    each(array, function (element, i) {
        arrlength[i] = element.length
    })
    return arrlength
}


/*
Write a function called flipPairs that takes a string a parameter
and returns the given string after Flip every pair of characters.
Example:
var input = 'check out how interesting this problem is, it\'s insanely
interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei
,si 't sniasenyli tnreseitgn!*/

function flipPairs(str) {
    var flip = ''
    for (var i = 0; i < str.length - 1; i += 2) {
        flip += str[i + 1] + str[i]
    }

    return flip
}
//resolve using recursion
function flipPairs(str, flip) {
    var flip = flip || ''
    if (str.length === 0) {
        return flip
    }
    else if (str.length === 1) {
        flip += str[0]
        return flip
    }

    flip += str[1] + str[0]
    return flipPairs(str.slice(2), flip)

}
