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

function filter(item, predicate) {
	if(Array.isArray(item) || Object.keys(item).length>0){
		var checkType=0;
			if(Array.isArray(item)){ var acc = []; checkType=1; }
			else var acc={}
					  each(item, function(element, i) {
					  	  if (predicate(element, i) && checkType) acc.push(element);
					  	  else if (predicate(element, i))acc[i]=element;
					    	
					  });
				  return acc;
	}
	else return "Does not applicable"

}
console.log(filter([1,2,3],(a)=>a%2===0));
console.log(filter({a:1,b:2},(a)=>a%2===0));
/*
2-write the the new version of reduce function
*/

function reduce(item, f, start) {
	var acc = start;
	if(Array.isArray(item)){
		    if (acc === undefined) {
				        acc = item[0];
				        item = item.slice(1);
				    }

	} 
	else if(!Array.isArray(item) && Object.keys(item).length>0 ){
		    if (acc === undefined) {
		    	var keys=Object.keys(item)
				        acc = item[keys[0]];
				        delete item[keys[0]];
				    }

	}
	else return "Does not applicable";

	 each(item, function(element,i) {
	 acc = f(acc, element,i);
	});
	return acc;
}
var arr=[1,2,33,4,5]
var obj={a:3,b:2,c:44}
function max(items){

  return reduce(items,function(max,number){
    if(typeof number ==='number' && max<number) return max=number
    return max;
  });
}
console.log("Max of Array: ", max(arr))
console.log("Max of Object: ", max(obj))