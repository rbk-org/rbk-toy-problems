//1.Write a function called sameLength that takes two strings as parmeters, 
//and returns true if those strings have the same length, and false otherwise.

function sameLength(str1,str2){
	if(str1.length === str2.length){
		return true
	}
	else{
		return false
	}
}
console.log(sameLength('waked','waked')) // result = true
console.log(sameLength('waked','wakedwaked')) // result = false
//2.Write a function called passwordLongEnough that takes a 'password' as a parameter 
//and returns true if that password is long enough -- you get to decide what constitutes long enough.

function passwordLongEnough(password){
	if(password.length === 15){
		return true
	}
}
console.log(passwordLongEnough('wakedwakedwaked')) // result = true

//3.Write a function called rentalCar that takes a person's name and age as parmeters, 
//and returns either 'You cannot have the keys, .', or "Have fun driving", 
// depending on whether or not the person is old enough. 
//In the US, most rental car companies do not allow you to rent a car until you are 21.

function rentalCar(name,age){
	if(age >= 21){
		return 'Have fun driving' + ' Mr. ' + name
	}
	else {
		return 'You cannot have the keys' + ' Mr. ' + name
	}
}
console.log(rentalCar('Waked','21')) // result = Have fun driving Mr. Waked
console.log(rentalCar('Waked','15')) // result = You cannot have the keys Mr. Waked

// 4.Write a function called max that takes two numbers as parameters, 
//and returns the larger one.

function max(num1,num2){
	if(num1 > num2){
		return num1
	}
		return num2
}
console.log(max(15,21)) // result = 21
console.log(max(21,114)) // result = 114

// 5.Write a function called  min that takes two numbers as parameters,
// and returns the smaller one.

function min(num1,num2){
	if(num1 > num2){
		return num2
	}
	return num1;	
}
console.log(min(15,21)) // result = 15
console.log(min(21,114)) // result = 21