
//Part1:

// create a data model to represent your classmates
// 	-think of different attributes of your classmates? what do all of them have ?
// 	-create a factory function.
// 	-create an array to hold the classmates that you created and what you created to it .  
// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.


//Part2:
// Using recursion Write a JavaScript function to find the greatest common divisor (gcd) of two positive numbers.
// Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summation, you'll need to use recursion in this.

  //part 2 q2


function increase(x){
  x+1;

}

function decrease(x){

 x-1;

}

function sum(x,y){
   if(y>x){
   if(y===0){ return x;}



  else{ return increase(y);decrease(x);}}

   else {
    if (x===0){return y;}

    else {return increase(x);decrease(y);}} 

   }  


//part 1
function classmate(mate,name,age,iq,length){
  
    mate=new Object();
   mate.name=name;
   mate.age=age;
   mate.iq=iq;
   mate.length=length;
   //array.push(mate)
   console.log(displayfriend(mate))
   return mate
   
  }
   
   
  classmate("std1","mh",20,255,170);
  classmate("std2","mk",20,220,170);
  classmate("std2","msssss",20,220,170);


function displayfriend(mate){

  return mate.name+ " "+ mate.age;

}
