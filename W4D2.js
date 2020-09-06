
//Part1:

// create a data model to represent your classmates
//  -think of different attributes of your classmates? what do all of them have ?
//  -create a factory function.
//  -create an array to hold the classmates that you created and what you created to it .  
//  -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
//  -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
//  -calculate the number of male friends that your class have by writing a function called nbOfMale.

function makeFactory(name,type,age)
{
return 
{
 name:name;
 type:type;
 age:age
};
}
var student1=("grade1","gir1",7);
var student2=("grade2","gir1",8);

var classMates=[student1,student2];


function displayFriend(student)
{
  return student.name + ' , ' + student.type + ' , ' + student.age ;
}

function  addFriend(student)
{
  classMates.push(student);
  return classMates;
}

function nbOfMale(student)
{
 var count=0;
 for(var i=0;i<student.length;i++)
 {
   if(student[i].type === "male")
   {
    count+=1;
   }
 }
 return count;
}







//Part2:
// Using recursion Write a JavaScript function to find the greatest common divisor (gcd) of two positive numbers.


function greatestComDiv(num1, num2, div = num1) {
  if(div === 0 ){
    return "There is no comDiv"
  } 
  if (num2 / div === Math.floor(num2 / div)) {
    if(num1 / div === Math.floor(num1/div)){
      return div;
    } 
  }
  div--
  return greatestComDiv(num1,num2,div)
}

console.log("greatest",greatestComDiv(120,50)) 





// Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summation, you'll need to use recursion in this.

function  sum (num1,num2)
{
  if(num2 === 0 )
  {
    return num1;
  }

  return  1+ sum(num1,num2-1);
}

console.log(sum(10,0))
console.log(sum(5,10))
console.log(sum(5,5))
console.log(sum(0,10))







