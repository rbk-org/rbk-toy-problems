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

/*
1-write the the filter function
*/
function filter(array, predicate) {
    // your code is here
    var acc = []
    each(array, function (element) {
        if (predicate(element)) {
            acc.push(element)
        }
    })
    return acc
}
console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function (val) { return val % 2 === 0 }))

/*
2-write the the new version of reduce function
*/
function reduce(array, f, acc) {
    // your code is here
    if (acc === undefined) {
        acc = array[0]
        array = array.slice(1)

    }
    each(array, function (element) {
        acc = f(acc, element)
    })
    return acc
}

console.log(reduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function (sum, val) {
    if (val % 2 === 0)
        sum += val
    return sum
}, 0))