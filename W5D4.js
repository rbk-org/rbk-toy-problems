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

function filter(coll,predicate) {
  // your code is here
  var acc=[];
  if(!Array.isArray(coll)){
   acc={};
  }
  each(coll,function(element,key){
  if(predicate(element,key)){
   acc[key]=predicate(element,key);
  }
  });
  return acc;
}

/*
2-write the the new version of reduce function
*/

function reduce(array,f,acc) {
  // your code is here
  if(acc === undefined){
    acc=array[0];
    array=array.slice(1);
  }
  each(array,function(x){
  acc=f(acc,x)
  });
  return acc;
}
