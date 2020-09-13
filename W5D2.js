/*
1) implement the last version of each 
*/

function each(coll, func) {
if (Array.isArray(coll)){
	for (var i=0; i<coll.length; i++){
		func(coll[i], i); 
} else { 
    for (var key in coll){
		func(coll[key], key);
		}
	  }
	} 

/*
1) implement map function

*/
	function map(array, f) {
	  var acc = [];
	  each(array, function(element, i){
	  	acc.push(f(element, i));
	  }); 
	  return acc;
	}

/*
1) implement the improved map 
*/


function map(coll, f) {
	var acc = [];
	if (!Array.isArray(coll)) {
		acc = {};
	}
	each(coll, function(val, key){
		acc[key] = f(val, key);
	});
	  
	 return acc;
}