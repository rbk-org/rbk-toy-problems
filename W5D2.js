/*
1) implement the last version of each 
*/

function each(coll, func) {
 if(Array.isArray(coll)){
   for(var i=0;i<coll.lenght;i++){
     func(coll[i],i);
   }
 }
 else{
   for(var key in coll){
     func(coll[key],key);
   }
 } 
}
	

/*
1) implement map function

*/
	function map(array, f) {
	  var acc = [];
	  each(array,function(element){
      acc.push(element);
    });
	  return acc;
	}

/*
1) implement the improved map 
*/


function map(coll, f)
 {
   var res=[];
   if(!Array.isArray(coll))
    {
      res={};
    }
     each(coll,function(value,key)
     {
    res[key]=f(value,key);
     });

   return res;
}