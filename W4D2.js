
//Part1:

// create a data model to represent your classmates
// 	-think of different attributes of your classmates? what do all of them have ?
// 	-create a factory function.
// 	-create an array to hold the classmates that you created and what you created to it .  
// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.

var classMate1 = { name: 'Ahmad', age: 25, favColor:'Red', gender:'male'}
var classMate2 = { name: 'Rasha', age: 27, favColor:'Purpel', gender:'female'}
var classMate3 = { name: 'Anwar', age: 20, favColor:'Green', gender:'male'}

function classMateFactoey(name , age , favColor, gender) {
  return {
	return 
	name : name,
	age : age,
	favColor: favColor
	gender:
  }
  }

var classMateArray = [classMate1 , classMate2 , classMate3]

function displayFriend(classMate) {
	return 'My name is ' + classMate.name + 'I am ' + classMate.age +' years old ' + 'my faveriot color is ' + classMate.favColor;
}

function addFriend(classMate) {
	classMateArray.push(classMate);
	return classMateArray;
}

function nbOfMale(array) {
	var count = 0; 
	for (var i=0; i < array.length; i++) {
		if (array[i].gender === 'male') {
			count+=1;
		}
	}return count
}
//Part2:
// Using recursion Write a JavaScript function to find the greatest common divisor (gcd) of two positive numbers.
// Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summation, you'll need to use recursion in this.

function gcd(num1,num2) {
	if (num1=num2) {
		return num1;
	}
}


function sum(num1,num2) {
	var sum = 0;
	if (num2 =0) {
		return num2;
	}
	else if (num1 < num2) {
		return sum(num1+1,num2-1)

	}
}

