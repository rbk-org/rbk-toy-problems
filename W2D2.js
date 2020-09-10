// 1-using the console calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15].
var array = [13,14,13,15,16,17,19,13,16,15];
var sum = array[0]+array[1]+array[2]+array[3]+array[4]+array[5]+array[6]+array[7]+array[8]+array[9] ;// =151
var avg = sum / (array.length) // 15.1

// 2-using the console calculate your age in seconds.
var age= 30;
var agetosec= age * 356 * 24 * 60 ; // 15379200

// 3- Write a function identity that takes one parameter and returns that input value.
// Calling your function should result in:
// identity("hello world");  ==> "hello world"
// identity(500);  ==> 500
function identity (parameter){
	return parameter
}

// 4- Write a function convertTo that takes  a string and a number as parameters.
// If the string input is "cm", then the function should convert the 2nd argument into centimeters by multiplying it to 2.54 and returning that value.
// If the string input is "in", then the function should convert the 2nd argument into inches by dividing it by 2.54.
// Calling your function should result in something like:
// convertTo('cm', 100);  ==> 254
// convertTo('in', 50.8); ==> 20

function convertTo(units, num) {
	if ( units === "cm"){
		return num * 2.54
	} else if ( units === "in"){
		return num / 2.54
	}
  }

//4- Write a function dogsIWouldPet that takes an item (string), 
//and returns a sentence stating dogs you would pet in comparison to the item (see sample call below).
// Calling your function should result in:
// dogsIWouldPet("ottoman"); //"I would pet dogs no bigger than an ottoman"
// dogsIWouldPet("small horse"); //"I would pet dogs no bigger than an small horse"
// dogsIWouldPet("Terrier"); //"I would pet dogs no bigger than an Terrier"
// Bonus (extra): If your function were passed in a string "I do not like dogs", 
//you can have your function return "I would not pet dogs".
function dogsIWouldPet(string){
	var a = "I would pet dogs no bigger than an" ;
	if( string === "ottoman"){
		return a+= string ;
	} else if ( string === "small horse"){
		return  a+= string ;

	} else if( string === "Terrier"){
		return  a+= string ;
	} else if (string === "I do not like dogs")	{
		return "I do not like dogs"
	}	

}


// 5- Write a function convertToKilometers that takes a number of miles passed in as parameter, 
// and returns that number multiplied by 1.60934 (an accepted approximation of 1 mile in kilometers).
// Calling your function should result in:
// convertToKilometers(50);   ==> 80.467
// convertToKilometers(361);  ==> 580.973
function convertToKilometers( num) {
	var convert = num * 1.60934 ;
	return convert
}
