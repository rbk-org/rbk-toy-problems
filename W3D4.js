/*
1-Write a function called tallEnoughToRide  that takes an array of people objects, 
and returns a an array of names of people who are greater than or equal to 48 inches in height.
You can assume an input which looks like this:
Calling your function should result in:
tallEnoughToRide(groupA); //["Mia", "Kiana", "Alex"];
Remember: your function should work off of the data it receives, 
not a global variable or only the specific example above. 
I.e. If someone called your function with 10 objects 
(with all safely have the same properties), it should work just as well.
*/

var groupA = [
  {
    name: "Mia",
    age: 10,
    heightInInches: 52
  },
  {
    name: "Jaya",
    age: 9,
    heightInInches: 45
  },
  {
    name: "Kiana",
    age: 10,
    heightInInches: 55
  },
  {
    name: "Alex",
    age: 11,
    heightInInches: 48
  }
]
function tallEnoughToRide(arr){
  for (var i=0; i<arr.length;i++){
    //console.log(arr[i]);
    if(arr[i].heightInInches<48){ arr.splice(i,1); --i}
    else arr[i]=arr[i].name;
  }
  return groupA
}
console.log(tallEnoughToRide(groupA));
//
/*
2-Working off of the same data structure as tallEnoughToRide, 
write a function called tallestPerson that takes  an array of people objects as well, 
and returns the name of the person with the greatest height, 
along with how tall they are (see sample input below).
Calling your function should result in:
tallestPerson(groupA); //"Kiana at 55 inches"
*/
var groupA = [
  {
    name: "Mia",
    age: 10,
    heightInInches: 52
  },
  {
    name: "Jaya",
    age: 9,
    heightInInches: 45
  },
  {
    name: "Kiana",
    age: 10,
    heightInInches: 55
  },
  {
    name: "Alex",
    age: 11,
    heightInInches: 48
  }
]
function tallestPerson(groupA){
  var maxIndex=0;
  for( var i=1; i<groupA.length;i++){
    if(groupA[i].heightInInches>groupA[maxIndex].heightInInches)maxIndex=i;
    
  }
  return groupA[maxIndex].name + " at "+ groupA[maxIndex].heightInInches +" inches"
}
console.log(tallestPerson(groupA));