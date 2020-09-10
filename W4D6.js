//Create a function (class) called Student that return an object that contains the following properties:
//Name, Date of Birth, Gender, Age
//Create an array and fill it with 5 students
//Create a function that takes a student as parameter and print out the details of the student
//Create a function that takes the array of students and sort them out based on age (younger-to-older)
//Create a function that takes the array and a string either “M” or “F” and returns the male students if “M” was passed and female students if “F” was passed


function student(name,dateOfBirth,gender,age) {
	return {
		name: name,
		dateOfBirth: dateOfBirth,
		gender: gender,
		age: age
	}
}
var student1 = student('Rasha',1988, 'Female', 32);
var student2 = student('Rami',1994, 'male', 26);
var student3 = student('Shadi',2000, 'male', 20);
var student4 = student('Sham',1998, 'female', 22);
var student5 = student('Anwar',1995, 'female', 25);

var students = [student1 , student2 , student3 , student4, student5];

function displayStudent(student) {
	return 'Student Name: ' + student.name + ', Date of Birth: ' + student.dateOfBirth + ', Student Gender: ' + student.gender + ', Student Age: ' + student.age + ' Years Old'
}


function youngerToOlder(array) {
	var sortedArray = []
	var minAge = array[0].age
  for (var i=1; i < array.length; i++) {
  	if (array[i].age < minAge) {
  		minAge = array[i].age;
  		array.splice(i,1)
  		sortedArray.push(array[i])
  	}

  } return sortedArray
}



function checkGender(array, string) {
  var mfArray = []
	for (var i=0; i < array.length; i++) {
		if (array[i].gender === string)
    mfArray.push(array[i])
	} return mfArray
}

checkGender(students,'male');