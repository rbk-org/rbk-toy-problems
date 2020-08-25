//1.Write a function called sameLength that takes two strings as parmeters, 
//and returns true if those strings have the same length, and false otherwise.
function sameLength(str1,str2){
	if(str1.length === str2.length){
		return true;
	} return false;
}
sameLength('sahar','hello') //-->true
sameLength('sahar','hi') //-->false

//2.Write a function called passwordLongEnough that takes a 'password' as a parameter 
//and returns true if that password is long enough -- you get to decide what constitutes long enough.
function passwordLongEnough(password){
	if(password.length >= 8){
		return true;
	} return false
}
passwordLongEnough('world') //-->false

//3.Write a function called rentalCar that takes a person's name and age as parmeters, 
//and returns either 'You cannot have the keys, .', or "Have fun driving", 
// depending on whether or not the person is old enough. 
//In the US, most rental car companies do not allow you to rent a car until you are 21.
function rentalCar(name,age){
	if(age>=21){
		return 'Have fun driving'
	} return 'You cannot have the keys, ' + name
}
rentalCar('sahar',28); ///-->Have fun driving
rentalCar('sahar',21); //--->Have fun driving
rentalCar('sahar',18); //-->

// 4.Write a function called max that takes two numbers as parameters, 
//and returns the larger one.
function max(num1,num2){
	result = Math.max(num1,num2);
	return result;
}
max(1,5); //-->5
max(15,3); //-->15
max(1,1); //-->1
// 5.Write a function called  min that takes two numbers as parameters,
// and returns the smaller one.
function min(num1,num2){
	result = Math.min(num1,num2);
	return result;
}
min(1,5); //-->1
min(15,3); //-->3
min(1,1); //-->1







