
//Part1:

// create a data model to represent your classmates
// 	-think of different attributes of your classmates? what do all of them have ? name age hahahaha
// 	-create a factory function.
// 	-create an array to hold the classmates that you created and what you created to it .  
// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
function classmates(name,age){
	return {
		name:name,
		age:age
	}
}
var m1=classmates("dima",22);
var m2=classmates("meena",20);
var m3=classmates("fsf",25);
console.log(m1);
var arr=[m1,m2]

function DisplayFriend(m){
	return  m.name+" "+m.age;
}
console.log(displayFriend(m1));

function addFriend(m3){
	arr.push(m3);
}
console.log(addFriend(m3));
console.log(arr);
//Part2:
// Using recursion Write a JavaScript function to find the greatest common divisor (gcd) of two positive numbers.
// Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summation, you'll need to use recursion in this.

