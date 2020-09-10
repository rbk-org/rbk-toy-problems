//Create a function (class) called Student that return an object that contains the following properties:
//Name, Date of Birth, Gender, Age
//Create an array and fill it with 5 students
//Create a function that takes a student as parameter and print out the details of the student
//Create a function that takes the array of students and sort them out based on age (younger-to-older)
//Create a function that takes the array and a string either “M” or “F” and returns the male students if “M” was passed and female students if “F” was passed


function Student(name, dOB, gender, age)
{
	return{
		name: name,
		dOB: dOB,
		gender: gender,
		age: age
	}
}

var student1 = Student("Baraa", "17th June, 1998", "male", 22)
var student2 = Student("Mohammad", "17th June, 1998", "male", 26)
var student3 = Student("Belal", "17th June, 1998", "male", 23)
var student4 = Student("Asem", "17th June, 1998", "male", 28)
var student5 = Student("Meena", "17th June, 1998", "femal", 19)

var studArray = [student1, student2, student3, student4, student5]

function displayStudent(student)
{
	return `Name: ${student.name}, Age: ${student.age}, Date of Birth: ${student.dOB}, Gender: ${student.gender}`
}

function sortByAge(array)
{
	
	for(i = 0; i < array.length; i++)
	{
		for(var l = 0; l < array.length; l++)
		{
			if(array[i].age < array[l].age)
			{
				var temp = array[i]
				array[i] = array[l]
				array[l] = temp
			}
		}
		
	}
	
	return array
}

function returnMOrF(array, str)
{
	var res = []
	for(i=0; i < array.length; i ++)
	{
		if(str === "M" && array[i].gender === "male")
		{
			res.push(array[i])
		}else if( str === "F" && array[i].gender === "femal")
		{
			res.push(array[i])
		}
	}
	return res
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
