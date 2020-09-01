//1.Write a function called sameLength that takes two strings as parmeters, 
//and returns true if those strings have the same length, and false otherwise.
function sameLength(string1, string2){
	return (string1.length === string2.length);
}

console.log(sameLength("dima","coffee"));
console.log(sameLength("pc","TV"));
//2.Write a function called passwordLongEnough that takes a 'password' as a parameter 
//and returns true if that password is long enough -- you get to decide what constitutes long enough.
function passwordLongEnough(password){
	return (password.length > 8);
}

console.log(passwordLongEnough("dimaO123@")); 
console.log(passwordLongEnough("12345@A"));
//3.Write a function called rentalCar that takes a person's name and age as parmeters, 
//and returns either 'You cannot have the keys, .', or "Have fun driving", 
// depending on whether or not the person is old enough. 
//In the US, most rental car companies do not allow you to rent a car until you are 21.
function rentalCar(name, age){
	if(age >= 21){
		return "Have fun driving "+ name;
	}
	return "You cannot have the keys, " + name ;
}

console.log(rentalCar("Sara","26"));
console.log(rentalCar("Samer","19"));
// 4.Write a function called max that takes two numbers as parameters, 
//and returns the larger one.
function max(num1, num2){
	if(num1 > num2){
		return num1;
	}
	return num2;
}

console.log(max(21,8));
console.log(max(5,8));
// 5.Write a function called  min that takes two numbers as parameters,
// and returns the smaller one.
function min(num1, num2){
	if(num1 < num2){
		return num1;
	}
	return num2;
}
console.log(min(21,8));
console.log(min(5,8));