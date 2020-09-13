
//Part1:

// create a data model to represent your classmates
var friend1 = {name: 'Hala' , age: 20, city: 'Hebron'}
var friend2 = {name: 'Rami' , age: 25, city: 'Nablus'}
var friend3 = {name: 'Razan' , age: 23, city: 'Nablus'}
// 	-think of different attributes of your classmates? what do all of them have ?
var mobileNo ;
// 	-create a factory function.
function classmate(name, age, city, mobileNo){
	name: name;
	age: age;
	city: city
	mobileNo: mobileNo
}
// 	-create an array to hold the classmates that you created and what you created to it . 
var clas =  [ {name: 'Hala' , age: 20, city: 'Hebron', mobileNo: 444}, 
              {name: 'Rami' , age: 25, city: 'Nablus', mobileNo: 333} 
              {name: 'Razan' , age: 23, city: 'Nablus', mobileNo: 888}];
// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
function displayFriend (){
	var display = "" ;
	for (var i=0 ; i< clas.length; i++) {
		display = "my classmate" + name +  "is" + age + "years old, from" + city ; }
	return display;
}
// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
function addFriend (clas, friend) {
	var friend4 = classmate( "noor", "24", "Ramallah", "777");
	clas.push(friend4);
}

// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.


//Part2:
// Using recursion Write a JavaScript function to find the greatest common divisor (gcd) of two positive numbers.
function gcd(n1, n2){
	if (n1 > 0 && n2 > 0){
	 return 1; }
	  return  gcd(n1, n2/n1);
}
// Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summation, you'll need to use recursion in this.
function sum(n1, n2){
	if (n2 === 0){
	 return 1; }
	  return n1+sum(n1, n2+1);
}
