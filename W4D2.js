
//Part1:

// create a data model to represent your classmates
// 	-think of different attributes of your classmates? what do all of them have ?
// 	-create a factory function.
// 	-create an array to hold the classmates that you created and what you created to it .  
// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.

function ClassMate(name, age, gender, hobby) {
    var x = {};
    x.name = name;
    x.age = age;
    x.gender = gender;
    x.hobby = hobby;
    x.displayFriend = displayFriend;
    x.addFriend = addFriend;
    return x;
}
var classMates = [];

function displayFriend(mate) {
    var str = "";
    for (var key in mate) {
        str += `${key}: ${mate[key]} \n`;
    }
    return str
}

function addFriend(mate) {
    classMates.push(mate);
}

function nbOfMale(classMates) {
    var numOfMale = 0;
    for (var i = 0; i < classMates.length; i++) {
        for (var key in classMates[i]) {
            if (classMates[i][key].toLowerCase() === "male") {
                numOfMale += 1;
            }
        }
    }
    return numOfMale;
}


var x = ClassMate("ahmad", 25, "male", "sport");


//Part2:
// Using recursion Write a JavaScript function to find the greatest common divisor (gcd) of two positive numbers.
function gcd(num1, num2) {
    if (num1 % num2 == 0) {
        return num2;
    }
    return gcd(num2, num1 % num2)
}
// Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summation, you'll need to use recursion in this.
function add(num1, num2) {
    if (num2 == 0) {
        return num1;
    }
    return add(num1, num2 - 1) + 1
}
