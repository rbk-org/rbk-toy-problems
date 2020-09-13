
//Part1:

// create a data model to represent your classmates
function represntclassmates(name,gender,age){
name:name ,
gender:gender,
age:age
}

var classmates=function(){
	var x=[]
	return represntclassmates

}



// 	-think of different attributes of your classmates? what do all of them have ?
// 	-create a factory function.
// 	-create an array to hold the classmates that you created and what you created to it .  
// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
function addClassmate(name,gender,age,){
	return {
		name:name,
		gender:gender
		age:age
	}
}
var classmate1=addClassmate("ahmad","male","24")
var classmate2=addClassmate("dima","female","22")
var classmate3=addClassmate("samir","male","19")
var classmates=[classmate1,classmate2,classmate3]
function displayFriend(classmate){
	return "name: "+classmate.name+"\n"+"gender: "+classmate.gender+"\n"+"age: "+classmate.age

}
function nbOfMale(array){
	var counter = 0
	for(var i=0;i<array.length;i++){
		if(array[i].gender==="male"){
			counter++
		}
	}
	return counter
}

//Part2:
// Using recursion Write a JavaScript function to find the greatest common divisor (gcd) of two positive numbers.

function greatestcommondivisor(x, y) {
  if ((typeof x === 'number') || (typeof y === 'number')) 
  
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x / y;
    x = t;
  }
  return x;
}


// Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summation, you'll need to use recursion in this.
function greatestCommoNDivisor(num1,num2){
}

























