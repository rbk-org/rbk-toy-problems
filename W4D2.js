
//Part1:

// create a data model to represent your classmates
// 	-think of different attributes of your classmates? what do all of them have ?
// 	-create a factory function.
// 	-create an array to hold the classmates that you created and what you created to it .  
// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.

function classmateFactory(name,gender,age){//,city,phoneNum
	return {
		name : name,
		gender : gender,
		age : age,
		// city : city,
		// phoneNum : phoneNum
	};
}

var hassan = classmateFactory('Hassan','male',27);
var rami = classmateFactory('RamiO','male',22);
var yasir = classmateFactory('Yasir','male',24);
var israa = classmateFactory('Israa','female',25);
var hala = classmateFactory('Hala','female',20);

var classmateS=[hassan,rami,yasir,israa,hala];

function displayFriend(mate){
	return mate.name +' '+mate.gender+' '+mate.age;
}

var huthyfa = classmateFactory('Huthyfa','male',27);
function addFriend(mate){
	classmateS.push(mate);
}

function nbOfMale(arrayMates){
	var count = 0;
	for(var i = 0; i<arrayMates.length;i++) {
		if (arrayMates[i].gender==='male'){
			count++;
		}
	}
	return count;
}


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
	}
	else{
		return gcd(num1,num2-num1);
	}
}

// function add(num1,num2){
// 	if 
// 	return add(num1, num2)
// }

