/*
1) implement the last version of each 
*/

function each(coll, func) {
 //write your code here 
 if(Array.isarray(coll)){
  for(var i = 0 ; i < coll.length ; i++){
  	  func(coll[i] , i);
  }else{
  	for(var key in coll){
  		func(coll[key] , key);
  	}
  }
 } 
}
	

/*
1) implement map function

*/
	function map(array, f) {
	var acc = [];
	  each(array , function (element , i){
	  	acc.push(f(element , i));
	  })
	 return acc;
}

/*
1) implement the improved map 
*/



function map(coll, func) {
	  var acc = [];
	  if(! Array.isarray(coll))
	  {
	  	acc={};
	  }
	  each(coll , function(element , key){
	  	acc[key] = func(element , key);
	  })
	  
	  return acc;
	}