/*
1) implement the last version of each 
*/

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
1) implement map function

*/
	function map(array, func) {
  var acc = [];
  each(array, function(element) {
    acc.push(func(element));
  });
  return acc;
}

/*
1) implement the improved map 
*/


function everymap(coll,func){
    var acc = []
  if(Array.isArray(coll)){
    each(coll,function(value,i){
      acc.push(func(value,i))
    })
  }
  else {
       acc ={}
    each(coll,function(value,key){
      acc[key]=func(value,key)
    })
    }
  return acc