
//Part1:

// create a data model to represent your classmates
// 	-think of different attributes of your classmates? what do all of them have ?
// 	-create a factory function.
// 	-create an array to hold the classmates that you created and what you created to it .  
// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
var mate1=makemate('hala','salhab','Female',19,165)
var mate2=makemate('kholoud','mohtaseb','Female',38,160)
var mate3=makemate('qamar','jardat','Female',25,158)
var classmates=[mate1,mate2,mate3]
function makemate(fname,lname,gender,age,length){
	return {
     fname:fname,
     lname:lname,
     fullname:fname+" "+lname,
     gender:gender,
     age:age,
     length:length
	}
}
function displayFriend(mate){
	return 'Full Name: '+mate.fullname+' Age: '+mate.age;
}
function addFriend(mate){
	classmates.push(m)
}
function nbOfMale(){
	var count=0;
	for(var i=0;i<classmates.length;i++){
		if(classmates[i].gender==='Male'){
			count+=1
		}
	}
	return 'There is '+count+'Males in the class .'
}

//Part2:
// Using recursion Write a JavaScript function to find the greatest common divisor (gcd) of two positive numbers.
// Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summation, you'll need to use recursion in this.
function sumation(num1,num2){
	if(num2===0){
    if(num1%2===0)
		{return -1}
    else {
      return 0
    }
	} return num1-num2+sumation(num1,num2-1)
}
sumation(5,2)
sumation(6,2)

