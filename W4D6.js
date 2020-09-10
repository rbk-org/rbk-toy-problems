//Create a function (class) called Student that return an object that contains the following properties:
//Name, Date of Birth, Gender, Age  DONE
//Create an array and fill it with 5 students  DONE
//Create a function that takes a student as parameter and print out the details of the student DONE
//Create a function that takes the array of students and sort them out based on age (younger-to-older) DONE **
//Create a function that takes the array and a string either “M” or “F” and returns the male students if “M” was passed and female students if “F” was passed
function Student(name,dateOfBirth,gender,age){
	let student={}
	student.name=name;
	student.dateOfBirth=dateOfBirth;
	student.gender=gender;
	student.age=age;

	student.studentDisplay=studentDisplay;
	student.sortStudentByAge=sortStudentByAge;
	student.genderCheck=genderCheck;
	return student;
}

let studentDisplay= function (student){
return "student name: "+this.name+" student dateOfBirth: "+this.dateOfBirth+" student gender: "+this.gender+" student age: "+this.age;
}

let sortStudentByAge= function (studentsArray){
	let arrayO=[];  array0[0]=studentsArray[0]
	for (var i=0; i<studentsArray.length; i++){
		if (array0[0].age > studentsArray[i].age ){
			array0[i]=studentsArray[i];
		}
	}
	return arrayO;
}

let genderCheck= function(studentsArray,letter){
	for (var i=0; i<studentsArray.length; i++){
		if (studentsArray[i].gender[0] === "M"){
			return "Male"
	}
	return "Female"
}


var student1=Student("Razan",1994,"Female",26)
var student2=Student("Duha",1996,"Female",24)
var student3=Student("Hamza",1998,"male",22)
var student4=Student("Rami",1999,"male",21)
var student5=Student("Noor",2000,"male",20)

var students=[student1,student2,student3,student4,student5]