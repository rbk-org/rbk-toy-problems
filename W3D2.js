/*
1- Write a function called countNumOfStrings that takes an array of
mixed elements (different data types)
and returns the number of strings there are in the array.
Calling your function should result in:
countNumOfStrings(["hello", "world", 5, true, {}]); //2
countNumOfStrings(["foo", 2, 10, "bar", 5, false, {}, "baz"]); //3
countNumOfStrings(["There is only one string in this example"]); //1
Hint: Recall typeof? If not: check it out on MDN. :-)
*/
<<<<<<< HEAD
 var count =0;
function countNumOfStrings(array){
  if (Array.isArray(array)){
    for(var i=0;i<array.length;i++){
         
      if(typeof (array[i])=== 'string'){

      	count ++;
      }}
       
    } return count
}

countNumOfStrings(['xl','c63','oo',55])
=======
>>>>>>> 1fec366795f0a180299250b09e2518b56c1dcea0
/*
2- Write a function called listLengthOfAllWords that takes an array
of words (strings),
and returns an array of numbers representing the length of each word.
Calling your function should result in:
listLengthOfAllWords(['hello', 'world', 'I', 'can', 'code']); //[5, 5,
1, 3, 4];
*/
<<<<<<< HEAD
newarray=[];
function countNumOfStrings(array){
    if (Array.isArray(array)){
    for(var i=0;i<array.length;i++){
         
      if(typeof (array[i])=== 'string'){

      	newarray.push(array[i].length)
      }}
       
    } return newarray;
}

countNumOfStrings(['xl','c63','odado'])


=======
>>>>>>> 1fec366795f0a180299250b09e2518b56c1dcea0
/*
Write a function called flipPairs that takes a string a parameter
and returns the given string after Flip every pair of characters.
Example:
var input = 'check out how interesting this problem is, it\'s insanely
interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei
,si 't sniasenyli tnreseitgn!*/
<<<<<<< HEAD

  
function flipPairs(st){
  var t='';
   var y='';
   for(var i=0;i<st.length;){
    y[i]=st[i+1];
    y[i+1]=st[i];
    i++;
    i++;
   }
   var yy="";
   for (var j=0;j<y.length;j++)
    yy+=y[j].toString();
   
   return yy;}
console.log(flipPairs("check out how interesting this problem is, insanely interesting!"));

=======
>>>>>>> 1fec366795f0a180299250b09e2518b56c1dcea0
