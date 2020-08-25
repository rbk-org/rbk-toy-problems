//1.Write a function called sameLength that takes two strings as parmeters, 
//and returns true if those strings have the same length, and false otherwise.
function sameLength(s,x){
	if(x.length===s.length){return true}
		return false
}
console.log(("hello","banana"))
console.log(sameLength("hello","banana"))
console.log(("airplane","elephant"))
console.log(sameLength("airplane","elephant"))

//2.Write a function called passwordLongEnough that takes a 'password' as a parameter 
//and returns true if that password is long enough -- you get to decide what constitutes long enough.
function passwordLongEnough(password){
	if(password.length>7){return true}
		return false
}
console.log(("hello"))
console.log(passwordLongEnough("hello"))
console.log(("elephant"))
console.log(passwordLongEnough("elephant"))

//3.Write a function called rentalCar that takes a person's name and age as parmeters, 
//and returns either 'You cannot have the keys, .', or "Have fun driving", 
// depending on whether or not the person is old enough. 
//In the US, most rental car companies do not allow you to rent a car until you are 21.
function rentalCar(name,age){
	if(age>20){return "Have fun driving, "+name}
		return "You cannot have the keys, "+name
}
console.log(("john",26))
console.log(rentalCar("john",26))
console.log(("liza",16))
console.log(rentalCar("liza",16))

// 4.Write a function called max that takes two numbers as parameters, 
//and returns the larger one.
function max(n,m){
	if(n>=m){return n}
		return m
}
console.log((25,26))
console.log(max(25,26))
console.log((16,16))
console.log(max(16,16))
console.log((12,5))
console.log(max(12,5))
// 5.Write a function called  min that takes two numbers as parameters,
// and returns the smaller one.
function max(y,t){
	if(y<=t){return y}
		return t
}
console.log((25,26))
console.log(min(25,26))
console.log((16,16))
console.log(min(16,16))
console.log((12,5))
console.log(min(12,5))