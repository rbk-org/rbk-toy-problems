/*
1) implement the last version of each 
*/
// each function to do iteration in any array and object and apply any function on the //element of that array or object which you will pass it as argument 

function each(coll, func) {                         //parameter coll maybe an array or an object
  if (Array.isArray(coll)) {                        //check if coll is array or not 
    for (var i = 0; i < coll.length; i++) {         // if it is an array and the result of if statmenet True ,go inside for loop
      func(coll[i], i);                             //to arrive each element in this array and do somthing on it as passed in the                                                 //function
    }
  } else {                                          // if the result of if statmenet is false so it is an object and we will deal 
                                                    //with keys inside that object ,and the same go to each key and do somthing
    for (var key in coll) {                          // as it in the function 
      func(coll[key], key);
    }
  }
}
	

/*
1) implement map function
*/

// map function is to enter an array and do something on each element at each (index) then pass the result to a new array with the //same length
	function map(array, f) {                                  // pass an array and the function as parameter 
  var acc = [];                                            // declare new variable with array type ,to use it to put the result                                                              // then we will call each function to to iteration and pass the value                                                            // and the index in the function as parameter , then push the result 
  each(array, function (element, i) {                       // of each element ot index to acc array .
    acc.push(f(element, i));                                 // then return the result array ,which it is acc.
  });
  return acc;
}


/*
1) implement the improved map 
*/

// this function the same work as the pervious map function ,but we improved it to accept and deal with array and object .
function map(coll, f) {
  var acc = [];
  if (!Array.isArray(coll)) {
    acc = {};
  }
  each(coll, function (element, key) {
    acc[key] = f(element, key);
  });
  return acc;
}
