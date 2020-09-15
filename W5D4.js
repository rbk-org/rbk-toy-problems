/*
1-write the the filter function
*/

function filter(array,predicate) {
  // your code is here
  var acc=[];
each(array,function(element){
  if(predicate(element)){
    acc.push(element)
  }
})
  return acc;
}

/*
2-write the the new version of reduce function
*/

function reduce(arr,f,acc) {
  // your code is here
  if(acc === undefined){
    acc=arr[0];
    arr.splice(1);
  }
  each(arr,function(element,i){
    acc=f(element,i)
  })
  return acc;
}

