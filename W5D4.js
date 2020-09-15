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

function newFilter(coll, predicate){
  var filtered = []
  if(!Array.isArray(coll)){
    filtered = {};
    each(coll, function(element, i){
      if(predicate(element)){
        filtered[i] = element;
      }
    })
  }
  else{
   each(coll, function(element, i){
     if(predicate(element)){
       filtered.push(element);
     }
   })
  }
  return filtered;
}
//test
filter([1,2,3,5,4,8], function(val){return val>5}) //return [8]
newFilter({a:'a',b:'b',c:3}, function(val){
  return typeof val === 'number';
})
/*
2-write the the new version of reduce function
*/

function reduce(coll, func, start) {
  // your code is here
  var acc = start;
  if(start === undefined){
    if(Array.isArray(coll)){
      acc = coll[0];
      coll = coll.slice(1);
    }
    else{
      var keys = Object.keys(coll);
      acc = coll[keys[0]];
      delete coll[keys[0]];
    }
  }

  each(coll, function(element,i){
   acc = func(acc, element) ;
  })

  return acc;
}
//test
function max(coll){
  return reduce(coll, function(acc, num){
    if(acc < num){
      return num
    }
    return acc; 
  })
}

max([7,8,15,9,7,3,6,7]) //return 15
max({a:1,b:16,c:2,d:19}) //return 19