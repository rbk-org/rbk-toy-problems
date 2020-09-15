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

function filter(c,p) {
  var x = []
  if(!Array.isArray(c)){x={}}
  each(c,function(item,i){
  if(p(item,i)){x[i]=item}
  })
  return x
}

/*
2-write the the new version of reduce function
*/

function reduce(x,f,s) {
  if(s===undefined){
  s=array[0]
  x=x.slice(1)
  }
  each(x,function(item,i){
  s = f(s,item,i)
  })
  return s
}
