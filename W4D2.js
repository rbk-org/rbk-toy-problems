
//Part1:

// create a data model to represent your classmates
// 	-think of different attributes of your classmates? what do all of them have ?
// 	-create a factory function.
// 	-create an array to hold the classmates that you created and what you created to it .  
// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.


function classmateMaker(name,age,gender,eyeColor,education,livingArea){
 return{
  name :name,
  age: age,
  gender: gender,
  eyeColor:  eyeColor,
  education: education,
  livingArea : livingArea,
}
}

 function displayFriend(mate){
  return "Name: " + mate.name + '\n' + "Education: " + mate.education + '\n' ;
}

 function addFriend(mate){
  classmates.push(mate);
    }

 function getGender(){
      return gender;
    }
    
function nbOfMale(classmatesArr){
  var counter = 0;
  for(var i = 0; i < classmatesArr.length; i++){
    if(classmatesArr[i]['gender'] === 'male'){
      counter += 1;
    }
  }
  return counter
          }
var classmate3 = classmateMaker('Nora', 26, 'female', 'green', 'physics', 'Tulkarim');
var classmate1 = classmateMaker('Akram', 23, 'male', 'black', 'cs', 'Ramallah');
var classmate2 = classmateMaker('Sila', 27, 'female', 'brown', 'accounting', 'Nablus');


var classmates = [classmate1, classmate2, classmate3];
addFriend(classmateMaker('Samer', '25', 'male', 'brown', 'electric Eng', 'Bethlehem'));


//Part2:
// Using recursion Write a JavaScript function to find the greatest common divisor (gcd) of two positive numbers.
// Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summation, you'll need to use recursion in this.


var flag = 0;
var cont
function gcd(num1, num2){
  if(num1 === 0 && num2 === 0){  //gcd(0,0)
    return undefined
  }

  if(num1 > num2){   //just make num1 the smaller one
    cont = num1;
    num1 = num2;
    num2 = cont; 
  }
  if(num1 === 0){   //like gcd(0,10) then always return num2
    return num2;
  }
  if(flag === 0){
    if(num2 % num1 === 0 ){
    return num1;
  }
    cont = num1 //cont = 15
    num1 = Math.floor(num1/2)  
    flag = 1;

  }

  if(num2 % num1 === 0 && cont % num1 === 0){
    flag = 0;
    return num1
  }

    
  return gcd(num1-1, num2, cont)

}





//SUM

function sum(num1, num2){
  if(num1 === 0){
    return num2
  }
  if(num1 < 0){
  return sum(num1+1, num2-1) 
  }
  return sum(num1-1, num2+1)
}


