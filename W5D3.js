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
function map(coll, fun) {
    var acc = [];
    if (!Array.isArray(coll)) {
        acc = {}

    }
    each(coll, function (value, key) {
        acc[key] = fun(value, key)
    })
    return acc
}

function reduce(array, f, acc) {
    if (acc === undefined) {
        acc = array[0]
        array = array.slice(1)

    }
    each(array, function (element) {
        acc = f(acc, element)
    })
    return acc
}

/*
1- Using map, Write a function called uppercaseValues that, given an object as a parameter,
 returns a new object with all of its string values converted to uppercase. 
Also, ensure that you only attempt to convert strings to uppercase.
*/
function uppercaseValues(obj) {
    return map(obj, function (value, key) {
        if (typeof (value) === "string") {
            return value.toUpperCase()
        }
        return value
    })
}
var obj = { a: 1, b: "Hello", c: 5, d: 9, e: "World" }
console.log("uppercaseValues function ")
console.log(obj, " >>> ", uppercaseValues(obj))

/*
2- Using reduce, write a function that sums the squared values of an array of numbers and returns the sum result.
*/
function sum(numbers) {
    //your code is here 
    return reduce(numbers, function (result, num) {
        return result + num
    })
}
var array = [1, 2, 3, 7, 8, 9, 0]
console.log("sum function ")
console.log(array, " >>> ", sum(array)) //30