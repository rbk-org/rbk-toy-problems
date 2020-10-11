
//Part1:

// create a data model to represent your classmates
// 	-think of different attributes of your classmates? what do all of them have ?
// 	-create a factory function.
// 	-create an array to hold the classmates that yreated and what you created to it .  
// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
// 	-write a function called addFriend that takes a maou cte as an argument and add it to you classMates arraya.
// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.

function each(coll,func){
	if (Array.isArray(coll) ){
		for(var i =0;i<cpll.length;i++)
	}
func (coll [i],i);
}

else {
	for (var key in coll){
		func (coll[key]);
	}
}

function makemate(name, age, background, city) {

return {

name: name,

age: age,

background: background,

city: city,
gender : gender


};

}

function displayfriend(mate) {

return mate.name + ' ' + mate.age+ ' ' + mate.city;

}



function addmate(mate, freiend) {

mate.push(friend);

}




function nbOfMale() {
count = 0;
for (var i = 0; i < mate.length; i++) {

if (mate[i].gender === male) {

count++

return count;

}

}

}

//Part2:
// Using recursion Write a JavaScript function to find the greatest common divisor (gcd) of two positive numbers.
// Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summation, you'll need to use recursion in this.

function greatestdivisor(num1, num2) {
num1 === 0||num2===0) {

if (
return 0;

}

var t = y;
    y = num1% num2;
    num1 = t;
  }
  return num1;
}


}