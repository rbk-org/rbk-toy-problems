//1.Write a function called sameLength that takes two strings as parmeters, 
//and returns true if those strings have the same length, and false otherwise.

function sameLength(str1,str2){
	if (str1.length===str2.length){
		return true
	}
	return false


function sameLength(string1,string2){
	if(string1.length===string2.length){
		return true
	}return false

}
//2.Write a function called passwordLongEnough that takes a 'password' as a parameter 
//and returns true if that password is long enough -- you get to decide what constitutes long enough.
function passwordLongEnough(password){

	if (password.length>8){return true}
		return false

	if(password.length>8){
		return true
	}


}
//3.Write a function called rentalCar that takes a person's name and age as parmeters, 
//and returns either 'You cannot have the keys, .', or "Have fun driving", 
// depending on whether or not the person is old enough. 
//In the US, most rental car companies do not allow you to rent a car until you are 21.
function rentalCar(name,age ){
if ( age >=21){return name + " Have fun driving" }
	return 'You cannot have the keys'
}


function rentalCar(personsname, age){
	var c=personsname
	var i=age
	if (i>=21){ return c && "Have fun driving"}
		else if (i<21){return  (c &&'You cannot have the keys')}

}



// 4.Write a function called max that takes two numbers as parameters, 
//and returns the larger one.
function max(num1,num2){
	if(num1>num2){
		return num1

	}
return num2
}


	}return num2
}

// 5.Write a function called  min that takes two numbers as parameters,
// and returns the smaller one.
function min(num1,num2){
	if(num1<num2){
		return num1

	}
return num2
}













	}return num2
}
