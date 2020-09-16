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
    each(array,function(value,i){
    if(predicate(value,i)){
      acc.push(value)
    }
  })
  }
  else{
    each(array,function(value,i){
    if(predicate(value,i)){
      acc[i]=value
    }
  })
  }  
  return acc
}
/*
2-write the the new version of reduce function
*/

function reduce(array,f,start){

  var acc=start
  each(array,function(value,key){
    acc=f(acc,value,key)
  })
  return acc
  }