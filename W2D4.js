//1.Write a function called sameLength that takes two strings as parmeters, 
//and returns true if those strings have the same length, and false otherwise.
function sameLength(str1, str2) {
	return (str1.length === str2.length)
}
console.log(sameLength('rami Okkeh', 'helloworld')) // result = true
//2.Write a function called passwordLongEnough that takes a 'password' as a parameter 
//and returns true if that password is long enough -- you get to decide what constitutes long enough.
function passwordLongEnough(pass) {
	return (pass.length > 5) 
}
console.log(passwordLongEnough('12345')) // result = false
console.log(passwordLongEnough('567890')) // result = true
//3.Write a function called rentalCar that takes a person's name and age as parmeters, 
//and returns either 'You cannot have the keys, {name} .', or "Have fun driving", 
// depending on whether or not the person is old enough. 
//In the US, most rental car companies do not allow you to rent a car until you are 21.
function rentalCar(name, age) {
	if (age > 20) {
		return 'Have fun driving'
	} return 'You cannot have the keys, '+name+'.'
}
console.log(rentalCar('rami', 16)) // 'You cannot have the keys, rami.'
console.log(rentalCar('rami', 21))
// 4.Write a function called max that takes two numbers as parameters, 
//and returns the larger one.
function max(num1, num2) {
	var max = num1
	if (num2 > num1) {
		max = num2
	}
	return max
}
console.log(max(20, 30)) // result = 30
console.log(max(40, 10)) // result = 40
// 5.Write a function called  min that takes two numbers as parameters,
// and returns the smaller one.
function min(num1, num2) {
	var min = num1
	if (num2 < num1) {
		min = num2
	}
	return min
}
console.log(min(50, 100)) // result = 50
console.log(min(2, 6)) // result = 2