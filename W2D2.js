// 1-using the console calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15].
var average = (13+14+13+15+16+17+19+13+16+15) / 10;
console.log(average)

// 2-using the console calculate your age in seconds.
var AgeinSecond = 39 * 12 * 30 * 24 * 60 * 60;
console.log(AgeinSecond)

// 3- Write a function identity that takes one parameter and returns that input value.
function identity(parameter) {
	return parameter;
}
// Calling your function should result in:
// identity("hello world");  ==> "hello world"
// identity(500);  ==> 500

// 4- Write a function convertTo that takes  a string and a number as parameters.
  // write your code here
function convertTo(units, num) {
// If the string input is "cm", then the function should convert the 2nd argument into centimeters by multiplying it to 2.54 and returning that value.
if (units === 'cm') {
	return num * 2.54;
}
// If the string input is "in", then the function should convert the 2nd argument into inches by dividing it by 2.54.
if (units === 'in') {
	return num / 2.54;  }
}
// Calling your function should result in something like:
// convertTo('cm', 100);  ==> 254
convertTo('cm', 100)
// convertTo('in', 50.8); ==> 20
convertTo('in', 50.8)

//4- Write a function dogsIWouldPet that takes an item (string), 
function dogsIWouldPet(string) {
//and returns a sentence stating dogs you would pet in comparison to the item (see sample call below).
// Calling your function should result in:
// dogsIWouldPet("ottoman"); //"I would pet dogs no bigger than an ottoman"
if ("see sample call below" === "ottoman") { 
 return "I would pet dogs no bigger than an ottoman"; }
// dogsIWouldPet("small horse"); //"I would pet dogs no bigger than an small horse"
if ("see sample call below" ==="small horse") { 
 return "I would pet dogs no bigger than an small horse"; }
// dogsIWouldPet("Terrier"); //"I would pet dogs no bigger than an Terrier"
if ("see sample call below" === "Terrier") { 
 return "I would pet dogs no bigger than an Terrier"; }
// Bonus (extra): If your function were passed in a string "I do not like dogs", 
//you can have your function return "I would not pet dogs".
else { 
 return "I would not pet dogs"; }
}

// 5- Write a function convertToKilometers that takes a number of miles passed in as parameter,
function convertToKilometers(mile) {
	var  Kilometer = mile * 1.60934;
	return Kilometer;
}
// and returns that number multiplied by 1.60934 (an accepted approximation of 1 mile in kilometers).
// Calling your function should result in:
// convertToKilometers(50);   ==> 80.467
convertToKilometers(50)
// convertToKilometers(361);  ==> 580.973
convertToKilometers(361)
