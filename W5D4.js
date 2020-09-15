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

function filter(coll, predicate) {
  // your code is here
  var acc = [];
  if (!Array.isArray(coll)) {
    acc = {};
  }
  each(coll, function (element, key) {
    if (predicate(element)) {
      acc[key] = element;
    }
  });
  return acc;
}

/*
2-write the the new version of reduce function
*/

function reduce(array, f, acc) {
  // your code is here
  if (acc === undefined) {
    acc = array[0];
    array = array.slice(1);

    each(array, function (element) {
      acc = f(acc, element);
    });
    return acc;
  }
  else {
    var newAcc = acc;
    each(array, function (element) {
      newAcc = f(newAcc, element);
    });
    return newAcc;
  }
}
