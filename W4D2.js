
//Part1:

// create a data model to represent your classmates
// 	-think of different attributes of your classmates? what do all of them have ?
// 	-create a factory function.
// 	-create an array to hold the classmates that you created and what you created to it .  
// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
function classMatesFactory(id,name,age,gender){
return{id:id,
name:name,
age:age,
gender:gender
}
}
var array=[]
var mate1=array.push(classMatesFactory(1,'ameed',26,'male'))
var mate1=array.push(classMatesFactory(2,'ahmad',25,'male'))
var mate1=array.push(classMatesFactory(3,'yazan',24,'male'))

function displayFriend(classMate){
    return `${classMate.id} your name is ${classMate.name} and your age is ${classMate.age}`

}
function addFriend(classMate){
array.push(classMate)
}

function numOfMaleFriends(array){
    var res=0
    for(var i=0;i<array.length;i++){
        if(array[i]['gender']==='male'){
            res+=1
        }
    }
    return res
}

//Part2:
// Using recursion Write a JavaScript function to find the greatest common divisor (gcd) of two positive numbers.
// Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summation, you'll need to use recursion in this.
function gcd(num1,num2){
var x=num1
 function res(num1,num2){
    if(x%num1===0 && num2%num1===0){
        return num1
    }
    return res(num1-=1,num2)
}
return res(num1,num2)
}

function sum(num1,num2){
    if(num2===0)return num1
    return sum(num1+=1,num2-=1)
    }
    sum(50,777)
