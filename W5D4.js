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

function filter() {
  var acc=[];
  each(array,function(element){
  	if (predicate(element){
  		acc.push(element);
  	});
  });
  return acc;
}

/*
2-write the the new version of reduce function
*/

function reduce() {
  if (acc=undefined){
  	acc=arr[0];
  	arr =arr.slice(1)
  }
  each(arr,function(element,i){
  	acc=f(acc,element,i)
  });
  return acc;
}
