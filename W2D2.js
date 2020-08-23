//EX1
console.log((13+14+13+15+16+17+19+13+16+15)/10);
//Ex2
console.log(25 * 365 * 24 * 60 *60 );
//Ex3
function identity(value)
{
	return value;
}
identity("hello world");//-->"hello world"
identity(500);//-->500

//Ex4
function convertTo(units, num) 
{
	if(units === "cm")
	{
		return num * 2.54;
	}return num /2.54;

}
convertTo('cm', 100);  //==> 254
convertTo('in', 50.8); //==> 20

//Ex5
function dogsIWouldPet(string)
{
	if(string === "ottoman")
	{
		return "I would pet dogs no bigger than an ottoman";

	}else if (string === "small horse")
	{
		return "I would pet dogs no bigger than an small horse";
	}else if(string === "Terrier")
	{
		return "I would pet dogs no bigger than an Terrier";
	}else if (string === "I do not like dogs")
	{
		return  "I would not pet dogs";
	}else return "nothing";
}
//EX6
function convertToKilometers(miles)
{
	return miles * 1.60934 ;
}