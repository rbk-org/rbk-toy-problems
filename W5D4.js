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

function filter(arr, predicate) {
  var acc = []
  each(arr, function(elem, i) {
    if (predicate(elem, i)) {
      acc.push(elem)
    }
  })
  return acc
}
console.log(filter([1, 2, 3, 4, 5, 6], function(elem) { if (elem > 3) { return elem } }))

/*
2-write the the new version of reduce function
*/

function reduce(coll, fn, acc) {
  var arr
  if (!Array.isArray(coll) && typeof coll === 'object') {
    arr = Object.values(coll)
  } else arr = coll.slice(0)
  if (acc === undefined) {
    acc = arr.shift()
  }
  each(arr, function(elem, i) {
    acc = fn(acc, elem)
  })
  return acc
}

console.log(reduce([1, 2, 3], function(a,b){return a+b}))