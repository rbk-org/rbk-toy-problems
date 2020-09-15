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

function filter(array , predicate) {
  // your code is here
  var acc=[];
  each(array , function(element , i){
    if(predicate(element)){
    acc.push(element);
  }
  } );
 
 return acc;

}

/*
2-write the the new version of reduce function
*/

function reduce(arr , func , acc) {
  // your code is here
  if(acc === undefined){
    acc = arr[0];
    arr = arr.slice(1);
  }
  each(arr , function(element , i){
    acc = func(acc , element ,i);
  });
  return acc;

}
