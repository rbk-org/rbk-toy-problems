
//Part1:

// create a data model to represent your classmates
// 	-think of different attributes of your classmates? what do all of them have ?
// 	-create a factory function.
// 	-create an array to hold the classmates that you created and what you created to it .  
// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
function classmateFactory(name, age, gender, email) {
    return {
        name: name,
        age: age,
        gender: gender,
        email: email
    }
}

function displayFriend(obj) {
    var g = " she is "
    if (obj.gender === "male")
        g = " he is "
    return ("classMate name is " + obj.name + g + obj.age + " years old, Email address " + obj.email)
}

function addFriend(obj) {
    classMates.push(obj)
    return "New friend added"
}

function nbOfMale(array) {
    var count = 0
    for (var i = 0; i < array.length; i++) {
        if (array[i].gender === "male")
            count++
    }
    return "You have " + count + " male friends"
}

var classMate1 = classmateFactory("Israa", 25, "female", "israa@gmail.com")
var classMate2 = classmateFactory("Dima", 29, "female", "dima@gmail.com")

var classMates = [classMate1, classMate2]



//Part2:
// Using recursion Write a JavaScript function to find the greatest common divisor (gcd) of two positive numbers.
// Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summation, you'll need to use recursion in this.

function greatestCommonDivisor(num1, num2) {
    if (num2 === 0) {
        return num1;
    }
    return greatestCommonDivisor(num2, num1 % num2);
}

function sum(num1, num2) {
    if (num2 === 0) {
        return num1
    }
    return 1 + sum(num1, num2 - 1)
}