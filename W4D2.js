
//Part1:

// create a data model to represent your classmates
// 	-think of different attributes of your classmates? what do all of them have ?
// 	-create a factory function.
// 	-create an array to hold the classmates that you created and what you created to it .  
// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.

function factory(name,age,gender,education){
	return{
		name:name,
		age:age,
		gender:gender,
		education:education
	};
}

var mate1=factory("Qamar",24,"female","CSE")
var mate2=factory("Belal",24,"male","CE")
var mate3=factory("Rawan",24,"female","CSE")
var mate4= factory("Rami",24,"male","HS")


var classMates=[mate1,mate2,mate3,mate4]

function displayFriend(mate){
	var display= " "
	display += mate.name + " " + mate.age + " " + mate.gender + " " + mate.education + " " 
	return display
	}

console.log(mate1)
console.log(mate2)
console.log(mate3)
console.log(mate4)
	


var mate5=factory("Rash",24,"female","CE")
function addFriend(classMates,mate)	{
	classmates.push(mate)

}
console.log(addFriend(classMates,mate5))
console.log(classMates)

function nbOfMale(classMates){
	var count=0;
	for(var i=0; i < classMates.length ; i++){
		if(classMates[i].gender==="male"){
			count+= 1 ;
		}
	}
	return count
}

console.log(nbOfMale(classMates)) // 2
//Part2:
// Using recursion Write a JavaScript function to find the greatest common divisor (gcd) of two positive numbers.
// Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summation, you'll need to use recursion in this.
function gcd(num1,num2){
	if(num1===num2){
    return num1;
    }
  else if (num1>num2){
    return gcd(num1-num2,num2);
  }else{
  return gcd(num1,num2-num1);}

}
gcd(24,8) //8
gcd(6,12) //6

/////////////

function inc(x) {
    return x + 1
}
function dec(x) {
    return x - 1
}


  function add(num1, num2) {

    if (num2===0) {
        return num1

    }

    return inc(add(num1, dec(num2)))
}
add(5, 3)