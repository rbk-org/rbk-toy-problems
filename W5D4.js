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

<<<<<<< HEAD
function filter(arr, predicate) {
  var acc1 = [];
  each(arr, function(elem1) {
    if (predicate(elem1)) {
      acc1.push(elem1);
    }
  })
  return acc1;
=======
function filter() {
  // your code is here
}

>>>>>>> 13110fe9b718221f805100deef5b48205a731110
/*
2-write the the new version of reduce function
*/

<<<<<<< HEAD
function reduce(arr, f, start) {
  var acc = start
  each(arr, function(element, i) {
    acc = f(acc, element)
  })
  return acc
=======
function reduce() {
  // your code is here
}
>>>>>>> 13110fe9b718221f805100deef5b48205a731110
