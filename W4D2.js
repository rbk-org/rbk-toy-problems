
//Part1:

// create a data model to represent your classmates
// 	-think of different attributes of your classmates? what do all of them have ?
// 	-create a factory function.
// 	-create an array to hold the classmates that you created and what you created to it .  
// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.


function classmateMaker(){

  var name = name;
  var age = age;
    var gender = gender;
  var eyeColor = eyeColor;
  var education = education;
  var livingArea = livingArea;
  return {
    displayFriend: function(mate){
  return "Name: " + name + '\n' + "Education: " + education + '\n' ;
},
    addFriend: function(mate){
  classmates.push(mate);
    },
    getGender: function(){
      return gender;
    }
    
    
  }
}
function nbOfMale(classmatesArr){
          var counter = 0;
      for(var i = 0; i < classmatesArr.length; i++){
        if(classmatesArr[i].getGender() === 'male'){
          counter += 1;
        }
      }
      return counter}
var classmate1 = classmateMaker('Akram', 23, 'male', 'black', 'cs', 'Ramallah');
var classmate2 = classmateMaker('Sila', 27, 'female', 'brown', 'accounting', 'Nablus');
var classmate3 = classmateMaker('Nora', 26, 'female', 'green', 'physics', 'Tulkarim');

var classmates = [classmate1, classmate2, classmate3];
classmate1.addFriend(classmateMaker('Samer', '25', 'male', 'brown', 'electric Eng', 'Bethlehem'));
console.log(classmates)
console.log(nbOfMale(classmates));


//Part2:
// Using recursion Write a JavaScript function to find the greatest common divisor (gcd) of two positive numbers.
// Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summation, you'll need to use recursion in this.

var flag = 0;
var cont
function gcd(num1, num2){

  if(num1 > num2){   //just make num1 the smaller one
    cont = num1;
    num1 = num2;
    num2 = cont; 
  }

  if(flag === 0){
      cont = num1
      num1 = num1/2; 
      flag = 1;

    }

    if(num2 % num1 === 0 && cont % num1 === 0){

    if(cont/2 === num1 ){
     return cont 
    }
    return num1
  }

        
    
    if(num1 === 0){
      return "No gcd";
    }
  return gcd(num1-1, num2, cont)

}


console.log(gcd(7,16))


