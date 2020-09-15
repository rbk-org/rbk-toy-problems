
// 1-using the console calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15].


// 2-using the console calculate your age in seconds.
function myAgeInSec(num){
	return(num*31536000)
}

function ageSecond(age)
{
	return age*360*24*120
}

// 3- Write a function identity that takes one parameter and returns that input value.
// Calling your function should result in:
// identity("hello world");  ==> "hello world"
// identity(500);  ==> 500
function identity(text){
	return(text)
}

function identity(input)
{
	return input
}

// 4- Write a function convertTo that takes  a string and a number as parameters.
// If the string input is "cm", then the function should convert the 2nd argument into centimeters by multiplying it to 2.54 and returning that value.
// If the string input is "in", then the function should convert the 2nd argument into inches by dividing it by 2.54.
// Calling your function should result in something like:
// convertTo('cm', 100);  ==> 254
// convertTo('in', 50.8); ==> 20


  if(units==="cm"){
  	return(num*2.54)
  }else if(units==="in"){
  	return(num/2.54)
  }else{
  	return("error")
  }


}

//2.Write a function called passwordLongEnough that takes a 'password' as a parameter 
//and returns true if that password is long enough -- you get to decide what constitutes long enough.

//3.Write a function called rentalCar that takes a person's name and age as parmeters, 
//and returns either 'You cannot have the keys, .', or "Have fun driving", 
// depending on whether or not the person is old enough. 
//In the US, most rental car companies do not allow you to rent a car until you are 21.

function dogsIwouldPet(string){
	if(string==="I do not like dogs"){
		return("I would not pet dogs")
	}else{
	    return("I would pet dogs no bigger than an "+string)

function dogsIwouldPet(string)
{
	if(string === "I do not like dogs")
	{
		return " I would not pet dogs"
	}
	return "I would pet dogs no bigger than an " + string
}


// 5- Write a function convertToKilometers that takes a number of miles passed in as parameter, 
// and returns that number multiplied by 1.60934 (an accepted approximation of 1 mile in kilometers).
// Calling your function should result in:
// convertToKilometers(50);   ==> 80.467
// convertToKilometers(361);  ==> 580.973


function convertToKilometers(num)
{
	return num * 1.60934

function convertToKilometers(num){
	return(num*1.60934)
}
