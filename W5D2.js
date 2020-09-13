/*
1) implement the last version of each 
*/
function each(array,f){
  if(!Array.isArray(array)){
    for(var i=0;i<array.length;i++){
      f(array[i],i)
    }
  } else {
    for(var key in array){
      f(array[key],key)
    }
  }

}
	

/*
1) implement map function

*/
	function map(array, f) {
	  var acc = [];
      each(array,function(element,i){
      acc.push(f(element,i))
      });
      return acc
      }
	  
	

/*
1) implement the improved map 
*/


function map(coll, f) {
	var acc = [];
	if(!Array.isArray(coll)){
	acc={}
	for(var key in coll){
	acc[key]=f(coll[key])

	}}
	else{
	for(var p=0;p<coll.length;p++){
	acc.push(f(coll[i]))
	}
	}
	return acc;
    }