
//Part1:

// create a data model to represent your classmates
// 	-think of different attributes of your classmates? what do all of them have ?
// 	-create a factory function.
// 	-create an array to hold the classmates that you created and what you created to it .  
// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.

var classMates=[]

function makeClassMate(name,gender,tall,grades){
	mate={
		name:name,
		gender:gender,
		tall:tall,
		grades:grades
	}
	return mate
}

function displayFriend(mate){
		return "Name : "+mate.name+", Gender : "+mate.gender+", height : "+mate.tall+", Grades Average : "+mate.grades+"%"
}

function addClassMate(mate){
	classMates.push(mate)
	return "Added."
}

function nbOfMale(array){
	var count=0
	for(var i=0;i<array.length;i++){
		if(array[i]['gender']==='male'){count++;}
	}
	return count
}

mate1=makeClassMate("Sara","female",165,88)
mate2=makeClassMate('John','male',170,72)
mate3=makeClassMate('Yossif','male',158,84)
addClassMate(mate1)
addClassMate(mate2)
addClassMate(mate3)
displayFriend(mate2)
nbOfMale(classMates)

//Part2:
// Using recursion Write a JavaScript function to find the greatest common divisor (gcd) of two positive numbers.
// Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summation, you'll need to use recursion in this.

function gcd(n1,n2,a=n1,b=n2){
if(n1<n2){if(n2%n1===0&&a%n1===0){return n1}
	return gcd(n1-1,n2,a,b)}
if(n1>n2){if(n1%n2===0&&b%n2===0){return n2}
	return gcd(n1,n2-1,a,b)}
}
gcd(24,18)

function sum(n1,n2){
	if(n2===0){return n1}
	return sum(n1+1,n2-1)
}
sum(7,3)