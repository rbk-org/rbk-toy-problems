//Create a function (class) called Student that return an object that contains the following properties:
//Name, Date of Birth, Gender, Age
function classA(nm, dtOfBrth, gndr, ag){
	return{
	Name: nm,
	DateOfBirth: dtOfBrth,
	Gender: gndr,
	Age: ag
	}
}
//Create an array and fill it with 5 students
var student1 = classA('Name1', '1/1/1111', 'Male', 21)
var student2 = classA('Name2', '2/2/2222', 'Female', 22)
var student3 = classA('Name3', '3/3/3333', 'Male', 23)
var student4 = classA('Name4', '4/4/4444', 'Female', 24)
var student5 = classA('Name5', '5/5/5555', 'Male', 25)
var arr = [student1, student2, student3, student4, student5]
//Create a function that takes a student as parameter and print out the details of the student
function studentDetails(student){
	return "Student's name is: " + student.Name + ", the date of birth is: " + student.DateOfBirth + ", the gender is: ", + student.Gender + "and the age is: " + student.Age +"." 
}
//Create a function that takes the array of students and sort them out based on age (younger-to-older)
var arr1 = []
function studentSortation(arr){
	for(var i = 0; i<arr.length; i++){
		if(arr[i].Age < arr[i-1].Age){
			arr1.push(arr[i])
		}
		arr1.push(arr[i-1])
	}
	return arr1
}
//Create a function that takes the array and a string either “M” or “F” and returns the male students if “M” was passed and female students if “F” was passed
var maleStudents = []
var femaleStudents = []
function maleOrFemale(arr){
	for(var i = 0; i<arr.length; i++){
		if(arr[i].Gender === 'Male'){
			maleStudents.push(arr[i])
		}
		femaleStudents.push(arr[i])
	}
	return maleStudents + ' ' + femaleStudents
}
