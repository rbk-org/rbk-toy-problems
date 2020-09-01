/*
1-Write a function called tallEnoughToRide  that takes an array of people objects, 
and returns a an array of names of people who are greater than or equal to 48 inches in height.
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

function tallEnoughToRide(initial){
  var arrayOfPeople = initial;
  var names=[];
 
   
      for(var i=0;i<arrayOfPeople.length;i++){
     if(arrayOfPeople[i]['heightInInches'] >= 48){
      names.push(arrayOfPeople[i].name)
    }
      } return names;
   }


/*
2-Working off of the same data structure as tallEnoughToRide, 
write a function called tallestPerson that takes  an array of people objects as well, 
and returns the name of the person with the greatest height, 
along with how tall they are (see sample input below).

Calling your function should result in:

tallestPerson(groupA); //"Kiana at 55 inches"
*/

function tallestPerson(initial){
  var arrayOfPeople = initial;
  var theTallest = '';
  theTallest = arrayOfPeople[0]['heightInInches'];
  for(var i=0;i< arrayOfPeople.length;i++){
    if(theTallest > arrayOfPeople[i][heightInInches]){
      theTallest = arrayOfPeople[0][heightInInches];
      return theTallest;
    }
  }
}