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
  var acc=[]
  each(coll, function(element,key){
  	if(predicate(element,key)){
  		acc.push(element)
  	}
  })
  return acc;
}

//New version of filter 
function filter(coll,predicate){
  var acc=[];
  if(!Array.isArray(coll)){
  	acc={};
    each(coll,function(element,key){
      if(predicate(element,key)){
        acc[key]=element
      }
    })
  }
  else{
    each(coll,function(element,key){
      if(predicate(element,key)){
      	acc.push(element)
      }
    })
  }
  return acc
}

/*
2-write the the new version of reduce function
*/

function reduce(coll,f,start){
	if (!Array.isArray(coll)){
		var acc = start;
		if(acc===undefined){
			index=Object.keys(coll)[0]
			acc=coll[index];
			delete coll[index]
		}
	}else{
		var acc = start;
		if(acc===undefined){
			acc = coll[0]
			coll=coll.slice(1);
		}
	}
	each(coll,function(element){
		acc = f(acc,element);
	})
	return acc
}