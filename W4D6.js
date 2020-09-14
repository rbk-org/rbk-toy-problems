//Create a function (class) called Student that return an object that contains the following properties:
//Name, Date of Birth, Gender, Age
//Create an array and fill it with 5 students
//Create a function that takes a student as parameter and print out the details of the student
//Create a function that takes the array of students and sort them out based on age (younger-to-older)
//Create a function that takes the array and a string either “M” or “F” and returns the male students if “M” was passed and female students if “F” was passed
function Student(name, dateOfBirth, gender, age) {
	var obj = {}
	obj.name = name
	obj.dateOfBirth = dateOfBirth
	obj.gender = gender
	obj.age = age
	return obj
}
var myClass = [Student('rami', 2000, 'male', 21), Student('ahmad', 1994, 'male', 26), Student('hiba', 1995, 'female', 25), Student('ali', 1996, 'male', 24), Student('hanadi', 1987, 'female', 32)]

console.log(myClass)

function displayStudent(student) {
	return student.name + ' born in ' + student.dateOfBirth + ' and is a ' + student.age + ' year old ' + student.gender
}

displayStudent(myClass)
