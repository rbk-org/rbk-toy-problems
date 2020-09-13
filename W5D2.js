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
var t= each([1,2,3],function(element,i){
	console.log(element)
})

/*
1) implement map function

*/

function map(array, f) {
  var acc = [];
  each(array, function(element, i) {

    acc.push(f(element, i));
  });
  return acc;
}
var s= map([1,2,3],function(element){
	return element+=1;
})
console.log(s)
/*
1) implement the improved map 
*/

function mapImproved(item, f) {
	if(!Array.isArray(item) &&  Array.isArray(Object.keys(item))){
			  var acc = {};
			  each(item, function(element, i) {

			    acc[i]=f(element, i);
			  });
			  return acc;
	}else if(Array.isArray(item)){
			  var acc = {};
			  each(item, function(element, i) {

			    acc[i]=f(element, i);
			  });
			  return acc;
	}
	else "is not applicable"
}
var n= mapImproved([1,2,3],function(element){
	return element+=1;
})
console.log(n)
var l= mapImproved({l:1,b:2},function(element){
	return element+=1;
})
console.log(l)