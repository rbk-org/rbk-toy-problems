
//Part1:

// create a data model to represent your classmates
// 	-think of different attributes of your classmates? what do all of them have ?
// var hamdalla = {
// 	name: 'hamdalla',
// 	age: 25,
// 	residense: 'nablus',
// }

// 	-create a factory function.
var MakeClassmate = function(name, age, residense, gender) {
	var obj = {}
	obj.name = name
	obj.age = age
	obj.residense = residense
	obj.displayFriend = displayFriend
	obj.gender = gender
	return obj
}
var hamdalla = MakeClassmate('hamdalla', 25, 'nablus', 'male')
// 	-create an array to hold the classmates that you created and what you created to it .  
var myClass = [MakeClassmate('rami', 21, 'nablus', 'male'),hamdalla]
console.log(myClass)
// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
function displayFriend() {
	// console.log('hello')
	return this.name + ' is ' + this.age + ' years old and lives in ' + this.residense
}
console.log(myClass[1].displayFriend())
// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates array.
function addFriend(mate) {
	myClass.push(mate)
}
var sufyan = MakeClassmate('sufyan', 30, 'nablus', 'male')
addFriend(sufyan)
console.log(myClass)
// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
function numberOfMales(arr) {
	var count = 0
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].gender === 'male') {
			count++
		}
	}
	return 'there are ' + count + ' males in my class'
}
console.log(numberOfMales(myClass))

//Part2:
// Using recursion Write a JavaScript function to find the greatest common divisor (gcd) of two positive numbers.
function comDiv(num1, num2, num = num1) {
	if (num1 % num === 0 && num2 % num === 0) {
		return num
	}
	return comDiv(num1, num2, --num)
}
console.log(comDiv(120, 50)) // 10
console.log(comDiv(25, 50)) // 25

// Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summation, you'll need to use recursion in this.
function sumRec(num1, num2) {
	if (num2 <= 0) {
		return num1
	}
	return 1 + sumRec(num1, --num2)
}
console.log(sumRec(4, 6)) // 10
console.log(sumRec(9, 3)) // 12
console.log(sumRec(8, 0)) // 8