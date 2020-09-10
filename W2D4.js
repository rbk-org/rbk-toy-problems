//1.Write a function called sameLength that takes two strings as parmeters, 
//and returns true if those strings have the same length, and false otherwise.

function sameLength(s1,s2){
	if(typeof(s1)==='string' && typeof(s2)==='string'){
		if(s1.length===s2.length)return true;
		else return false;
	}
return "check that each parameter is a string";

}
console.log(sameLength("sufyan","Hello14"));
console.log(sameLength("sufyan",1));

//2.Write a function called passwordLongEnough that takes a 'password' as a parameter 
//and returns true if that password is long enough -- you get to decide what constitutes long enough.
function passwordLongEnough(p,n){
	p=p.toString()
		if(p.length>=n)return true;
		else return false;
	



}
console.log(passwordLongEnough(1234567896,10));
console.log(passwordLongEnough("sufyan",10));

//3.Write a function called rentalCar that takes a person's name and age as parmeters, 
//and returns either 'You cannot have the keys, .', or "Have fun driving", 
// depending on whether or not the person is old enough. 
//In the US, most rental car companies do not allow you to rent a car until you are 21.


// 4.Write a function called max that takes two numbers as parameters, 
//and returns the larger one.

// 5.Write a function called  min that takes two numbers as parameters,
// and returns the smaller one.

function rentalCar(age){
	if(typeof(age)==='number' && age<150 && age>0){
		if(age>=21) return "Have fun driving"
			else return "You cannot have the keys";
	}
	else return "check the age";
}
console.log(rentalCar(21));
console.log(rentalCar(15));
// 4.Write a function called max that takes two numbers as parameters, 
//and returns the larger one.
function max(n1,n2){
	if(typeof(n1)==='number' && typeof(n2)==='number'){
		if(n1>n2) return n1;
		else if(n2>n1) return n2;
	}
	 return "They are equal";
}
console.log(max(15,20));
console.log(max(20,15));
console.log(max(20,20));
// 5.Write a function called  min that takes two numbers as parameters,
// and returns the smaller one.
function min(n1,n2){
	if(typeof(n1)==='number' && typeof(n2)==='number'){
		if(n1<n2) return n1;
		else if(n2<n1) return n2;
	}
	 return "They are equal";
}
console.log(min(15,20));
console.log(min(20,15));

