
//Part1:

// create a data model to represent your classmates
// 	-think of different attributes of your classmates? what do all of them have ? DONE
// 	-create a factory function. DONE
// 	-create an array to hold the classmates that you created and what you created to it .  DONE 
// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.DONE
// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates arraya. 
// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.DONE
function makeFunction(name,gender,age){
	return{
		studenName:name,
		studentGender:gender,
		studentAge:age
	}
}
var student1= makeFunction("razan","female",26);
var student2= makeFunction("hamza","male",22);
var student3= makeFunction("nwal","female",24);

var classRoom= [student1,student2,student3];

function displayFriend(student){
	return student.studenName+" "+student.studentGender+" "+student.studentAge;
}
displayFriend(student1);

function addFriend(student){
	classRoom.push(student);
	return classRoom; 
}
var student4= makeFunction("ahmed","male",20);
addFriend(student4);

function nbOfMale(arrayOfObj){
	countNum=0;
	for (var i=0; i<arrayOfObj.length; i++){
		if (arrayOfObj[i].studentGender==="male"){
			countNum+=1;
		}
	}
	return countNum;
}
nbOfMale(classRoom);



//Part2:
// Using recursion Write a JavaScript function to find the greatest common divisor (gcd) of two positive numbers.
// Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summation, you'll need to use recursion in this.
function sum (n1,n2){
	if (n2=n1){
		return 0;
	}
	return n1+sum (n1,n2-1)
}
//i need to work more on recursion :(
