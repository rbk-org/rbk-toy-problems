
//Part1:

// create a data model to represent your classmates
// 	-think of different attributes of your classmates? what do all of them have ?
// 	-create a factory function.
// 	-create an array to hold the classmates that you created and what you created to it .  
// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.




var friend1 = classmatesFactory("Hiba", 24, "Tulkarem", "female")
var friend2 = classmatesFactory("Rami", 21 , "Nablus", "male")

var classmates = [friend1,friend2]

var malesnum = 0


function MyClassmates (){
	var instance = {}
		instance.classmatesFactory = classmatesFactory 
		instance.displayFriend = displayFriend
		instance.addFriend = addFriend
		instance.nbOfMale = nbOfMale


return instance
}

function classmatesFactory (name ,age , homeTown, gender){
	 var classmate = {}
	 classmate.name = name
	 classmate.age = age
	 classmate.homeTown = homeTown
   classmate.gender = gender 
	 return classmate
}


function displayFriend (array){
	var str = ""
	for (var i = 0 ; i < array.length ; i++){
		str += "My friend name is " + array[i].name + " and he/she lives in "+ array[i].homeTown + "/n"
	}
	return str
}

function addFriend (mate){
	classmates.push(mate)
}

function nbOfMale (classmatesArr){
  for (var i = 0; i <classmatesArr; i++) {
  	if( classmatesArr[i].grnder === "male"){
  		malesnum += 1
  	}
  }
  return malesnum
}
//Part2:
// Using recursion Write a JavaScript function to find the greatest common divisor (gcd) of two positive numbers.

function gcd ( num1,num2,num22=num2){
	if (num1 < num2){
		var hold = num1
		num1 = num2
		num2 = num1
	}

	if (num1 % num2 ===0 && num22 % num2 ===0){
  
		return num2
	}

	return gcd(num1, --num2 , num22)
}

// Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them 
// togther directly
//you can only add one at each summation, you'll need to use recursion in this.
 function sum  (num1, num2,x=0,){
 	if(num2 < x)
 		return 0

 	num1 += 1

 	return sum(num1,num2) + num1
 }

