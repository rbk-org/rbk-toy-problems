
//Part1:

// create a data model to represent your classmates
// 	-think of different attributes of your classmates? what do all of them have ?
// 	-create a factory function.
function factory(name , age ,gender){
	return {
	name : name,
	age : age,
	gender : gender
}
}
var classmates1 = factory("israa" , 25 ,"female");
var classmates2 = factory("Noor" , 19 ,"male");

// 	-create an array to hold the classmates that you created and what you created to it . 
var array = [classmates1 , classmates2]; 
// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
function displayFriend(mate){
	return mate.name + " "+mate.age +' ' +mate.gender;
}
// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
function addFrined(mate){
	array.push(mate);
}
// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
function nbOfMale(){
	var count = 0;
 for(var i = 0 ; i< array.length ; i++){
  if(array[i]['gender'] === 'male'){
    count++;
  }
 }return count;
}

nbOfMale();

//Part2:
// Using recursion Write a JavaScript function to find the greatest common divisor (gcd) of two positive numbers.
function gcd(num1, num2) {
 if(num2 === 0){
 	return num1;
 }else{
    var reminder =num1 % num2;
    return gcd(num2, reminder);}
};
gcd(4,6)

// Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summation, you'll need to use recursion in this.

function sum(num1 ,num2 ){
	if(num1 === 0)
  return num2;
  

	return 1 + sum(num1 - 1 ,num2 );
}
