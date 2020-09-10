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
var myClass = [Student('rami', 1999, 'male', 21), Student('hamdalla', 1994, 'male', 26), Student('razan', 1995, 'female', 25), Student('yasir', 1996, 'male', 24), Student('noor', 2000, 'female', 20)]

console.log(myClass)

function displayStudent(student) {
	return student.name + ' was born in ' + student.dateOfBirth + ' and is a ' + student.age + ' year old ' + student.gender
}
console.log('\n')
console.log(displayStudent(myClass[0]))
console.log(displayStudent(myClass[2]))

function sort(arr) {
	// not today
	
}
console.log('\n')
console.log(sort(myClass))

function getStuByGender(arr, gender) {
	var gen = ''
	var res = []
	if (gender === 'M') {
		gen = 'male'
	} else gen = 'female'
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].gender === gen) {
			res.push(arr[i])
		}
	}
	return res
}
console.log('\n')
console.log(getStuByGender(myClass, 'F'))
console.log(getStuByGender(myClass, 'M'))