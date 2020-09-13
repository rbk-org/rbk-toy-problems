/*
1) implement the last version of each 
*/

function each(coll, func) {
 //write your code here  
 if(!Array.isArray(coll)){
 	for(var i in coll){func(coll[i],i)}
 }
else{
 for(var i=0;i<coll.length;i++){
 	func(coll[i],i)
 }}
}
	

/*
1) implement map function

*/
	function map(array, f) {
	  var acc = [];
	  each(array,function(item,i){
	  	acc.push(f(item,i))
	  })
	  return acc;
	}

/*
1) implement the improved map 
*/


function map2(coll, f) {
	var acc = []
  if (!Array.isArray(coll)) {
    acc = {}
  }
  each(coll, function(item, i) {
    acc[i] = f(item, i)
  })
  return acc
}