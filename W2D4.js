//1.Write a function called sameLength that takes two strings as parmeters, 
function sameLength (str1, str2) {
//and returns true if those strings have the same length, and false otherwise.
	if (str1.length === str2.length) {
		return true; 
	} else { 
		return false;
}
	}
  sameLength ('hello', 'world');

//2.Write a function called passwordLongEnough that takes a 'password' as a parameter
function passwordLongEnough(password) {
//and returns true if that password is long enough -- you get to decide what constitutes long enough.
	var x = 8;
	if (password.length >= x) {
		return true; 
	} else { 
		return false;
}
	}

//3.Write a function called rentalCar that takes a person's name and age as parmeters,
function rentalCar(name, age) { 
//and returns either 'You cannot have the keys, .', or "Have fun driving", 
// depending on whether or not the person is old enough. 
//In the US, most rental car companies do not allow you to rent a car until you are 21.
if (age < 21) {
	return 'You cannot have the keys';
} else {
	return 'Have fun driving';
}
}
rentalCar('lio', 21)


// 4.Write a function called max that takes two numbers as parameters, 
function max (num1, num2) {
//and returns the larger one.
	if (num1 > num2) {
		return num1;
	} }



// 5.Write a function called  min that takes two numbers as parameters,
function min (num1, num2) {
// and returns the smaller one.
	if (num1 < num2) {
		return num1;
	} }