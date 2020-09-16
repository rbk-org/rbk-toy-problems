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

function filter(array,predicate) {
 var newarr=[]
 each(array,function(element){
  if(predicate(element)){
    newarr.push(element)
  }
 })
 return newarr
}

/*
2-write the the new version of reduce function
*/

function reduce(array,f,start) {
  var acc = start
  if(acc===undefined){
    acc=array[0]
    array=array.slice(1)
  }
  each(array,function(element){
    acc= f(acc,element)
  })
  return acc
}
