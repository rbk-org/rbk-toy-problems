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

function filter(array,predicate){
  var acc={}
  if(Array.isArray(array)){
    acc=[]
    each(array,function(element,i){
    if(predicate(element,i)){
      acc.push(element)
    }
  })
  }
  else{
    each(array,function(element,i){
    if(predicate(element,i)){
      acc[i]=element
    }
  })
  }  
  return acc
}
/*
2-write the the new version of reduce function
*/

function reduce(array,f,start){
  // your code is here
  var acc=start
  each(array,function(element,key){
    acc=f(acc,element,key)
  })
  return acc
  }
