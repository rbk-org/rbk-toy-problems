

//Part1:

// create a data model to represent your classmates
// 	-think of different attributes of your classmates? what do all of them have ?
// 	-create a factory function.
// 	-create an array to hold the classmates that you created and what you created to it .  
// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.


//Part2:
// Using recursion Write a JavaScript function to find the greatest common divisor (gcd) of two positive numbers.
// Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summation, you'll need to use recursion in this.



	function classMatesFactory(name, age, gender, nationality, adress){
		return {
			name: name,
			age: age,
			gender: gender,
			nationality: nationality,
			adress: adress
			}
		}
		var arr = []
		var mate1 = arr.push ( classMatesFactory ( "Razan", 22, "F", "Palestinian", "Nablus") )
		var mate2 = arr.push ( classMatesFactory ( "Baraa", 23, "M", "Palestinian", "Hebron") )
		

	function displayFriend(classMate){
    	return "Your name is: " classMate.name " and your age is " classMate.age
    }


    function addFriend(classMate){
        array.push(classMate)
    }


    function numOfMales(arr){
        var res=0
            for(var i=0; i < arr.length; i++){
                if( arr[i]['gender'] === 'male' ){
                 res+=1
            }
        }
            return res
    }

//Part2:
// Using recursion Write a JavaScript function to find the greatest common divisor (gcd) of two positive numbers.
// Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summation, you'll need to use recursion in this.
    function gcd(n1,n2){
        var x = n1
            function res(n1,n2){
                if( x % n1 === 0 && n2 % n1 === 0){
                    return n1
                }
                return res ( n1 -= 1, n2 )
            }
            return res(n1,n2)


    function sum(n1, n2){
        if( n2 === 0 )return n1
            return sum(n1 += 1, n2 -= 1 )
    }
    sum(6, 12)

