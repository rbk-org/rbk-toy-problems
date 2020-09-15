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
  // your code is here
  var acc=[];
  each(array,function(x){
  	if(predicate(x)){
  	acc.push(x);
  }
  })
  return acc;
}

/*
2-write the the new version of reduce function
*/
///improved
function reduce(array,f,acc) {
  // your code is here
  if(acc===undefined){
  	acc=array[0];
  	array=array.slice(1);
  }
}
////redunce
function(array,f,start){
	var acc=start;
	each(array,function(x){
		acc=f(acc,x)
	})
	return acc;
}
