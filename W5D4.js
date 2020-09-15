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

function filter(coll , predicate) {
	var acc =[];
	each(coll, function(ele){
		if(predicate(ele)){
			acc.push(ele)
		}
	})
	return acc;
}

/*
2-write the the new version of reduce function
*/

function reduce(array , fn ,acc) {
	if(acc === undefined) {
		acc = array[0];
		array = array.slice(1)
	}
	each (array , function(ele,i) {
		acc = fn(acc , ele , i)
	});  
	return acc
}
