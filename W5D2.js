/*
1) implement the last version of each 
*/

function each(coll, func) {
	// check if coll is arr 
	if (Array.isArray(coll) || typeof coll === 'string') {
		// if it is, use for loop
		for (var i = 0; i < coll.length; i++) {
 		func(coll[i], i)
 		}
 	} else {
 		//otherwise use for in loop
 		for (var key in coll) {
 			func(coll[key], key)
 		}
	}
}
	

/*
1) implement map function

*/
	function map(array, f) {
	  var acc = [];
	  each(array, function(elem, i) {
	  	acc.push(f(elem, i))
	  })
	  return acc;
	}

/*
1) implement the improved map 
*/


function map(coll, f) {
	var acc = [];
	if (!Array.isArray(coll)) {
		acc = {}
	}
	each(coll, function(elem, key) {
		acc[key] = f(elem, key)
	})
	return acc;
	}