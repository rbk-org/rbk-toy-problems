
//Part1:

// create a data model to represent your classmates
// 	-think of different attributes of your classmates? what do all of them have ?
// 	-create a factory function.
// 	-create an array to hold the classmates that you created and what you created to it .  
// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.

function classMates(nm, gndr, cmnCls, frndlvl) {
  return {
    name: nm,
    gender: gndr,
    commonClasses: cmnCls,
    friendshipLevel: frndlvl
  }
}

var classMate1 = classMates('Aadel', "Male", '6', "High")
var classMate2 = classMates('Nagham', "Female", '3', "Average")
var classMate3 = classMates('Malek', "Male", '5', "Medium")

var mates = [classMate1, classMate2, classMate3]

function displayFriend(mate){
  return mate.name + ' ' + mate.gender + ' ' + mate.commonClasses + ' ' + mate.friendshipLevel
}

function addFriend(mates,classMate){
	mates.push(classMate)
}

function nbOfMale(mates){
  var counter = 0
  for (var i = 1; i < mates.length; i++) {
    if (mates[i].gender === "Male") {
      Counter ++
    }
  }
  return "Number of Male friends is " + counter
}


//Part2:
// Using recursion Write a JavaScript function to find the greatest common divisor (gcd) of two positive numbers.

function gcd(num1,num2){
	if(num2 === 0){
		return num1
	}
	return gcd(num2, num1%num2)
}
console.log(gcd(53,24))

// Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly

function sum(num1, num2) {
  if (num2 === 0) {
    return num1
  }
  function dec(x) {
  	return x - 1
}
  return 1 + sum(num1, dec(num2))
}
console.log(sum(3,7))

//you can only add one at each summation, you'll need to use recursion in this.

