/*
1) implement the last version of each 
*/

function each(coll, func) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      func(coll[i], i);
    }
  } else {
    for (var key in coll) {
      func(coll[key], key);
    }
  }
}

 //write your code here  
}
>>>>>>> a4d9b326fa4f669eb1831d303b3f41a7ff28bdd8
	

/*
1) implement map function

*/
	function map(array, f) {
	  var acc = [];
<<<<<<< HEAD
	  each(array, function(element) {
    acc.push(func(element));
  });
=======
	  
>>>>>>> a4d9b326fa4f669eb1831d303b3f41a7ff28bdd8
	  return acc;
	}

/*
1) implement the improved map 
*/


<<<<<<< HEAD
function map(array, f) {
	  var acc = [];
	  each(array, function(element, i) {
    acc.push(func(element, i));
  });
	  return acc;
	}
=======
function map(coll, f) {
	var acc = [];
	  
	 return acc;
}
>>>>>>> a4d9b326fa4f669eb1831d303b3f41a7ff28bdd8
