/*
1-Write a function called tallEnoughToRide  that takes an array of people objects, 
and returns a an array of names of people who are greater than or equal to 48 inches in height.

You can assume an input which looks like this:
*/
function tallEnoughToRide(people){

  var ApprovedPeopleNames = [];
  for( var i = 0; i < people.length; i++){
    if(people[i]['heightInInches'] >= 48){
      ApprovedPeopleNames.push(people[i]['name']);
    }
  }
  return ApprovedPeopleNames;
}
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
//Calling your function should result in:
console.log(tallEnoughToRide(groupA)); //["Mia", "Kiana", "Alex"];
/*
Remember: your function should work off of the data it receives, 
not a global variable or only the specific example above. 
I.e. If someone called your function with 10 objects 
(with all safely have the same properties), it should work just as well.
*/

// your answer is here

/*
2-Working off of the same data structure as tallEnoughToRide, 
write a function called tallestPerson that takes  an array of people objects as well, 
and returns the name of the person with the greatest height, 
along with how tall they are (see sample input below).

Calling your function should result in:

tallestPerson(groupA); //"Kiana at 55 inches"


*/

// your answer is here
function tallestPerson(people){
  var tallestPerson= people[0];
  for( var i = 0; i < people.length; i++){
    if(people[i]['heightInInches'] >= tallestPerson['heightInInches']){
      tallestPerson = people[i];
    }
  }
  return 'The tallest-Person Is  : '+ tallestPerson['name']+'\n'+ 'His height-In-Inches is: '+ tallestPerson['heightInInches'] ;

}

console.log(tallestPerson(groupA));