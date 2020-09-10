//Create a function (class) called Student that return an object that contains the following properties:
//Name, Date of Birth, Gender, Age
//Create an array and fill it with 5 students
//Create a function that takes a student as parameter and print out the details of the student
//Create a function that takes the array of students and sort them out based on age (younger-to-older)
//Create a function that takes the array and a string either “M” or “F” and returns the male students if “M” was passed and female students if “F” was passed
function Student(name,dateOfBirth,gender,age){
	var instance = {}
	instance.name = name;
	instance.dateOfBirth  = dateOfBirth;
	instance.gender = gender;
	instance.age = age;

	instance.print = print;
	instance.yongerToOlder = yongerToOlder;
	instance.printGender  = printGender; 
	return instance;
}
var student1 = Student('rami', '18/7/1995', 'Male', '25');
var student2 = Student('hmmam', '20/6/1998', 'Male', '22');
var student3 = Student('sara', '12/9/1992', 'Female', '27');

function print(student){
	return student.name + ' ' +student.dateOfBirth + ' ' + student.gender + ' ' + student.age;
}

var arrOfStudent = [student1,student2,student3];

function yongerToOlder(array){
	var yonger = array[0];
	var sortArr=[];
	for (var i=0 ; i < array.length ; i++){
		if(array[i]['age'] > array[0]['age']){
			older = array[i-1];
			yonger = array[i];
			sortArr.push(older,yonger);
		}
	}
	return	sortArr;
}

function printGender (array,char) {
	var genderArr=[];
	for (var i=0 ; i < array.length ; i++){
		if(array[i]['gender'][0] === char ){
			genderArr.push(array[i]);
		}
	}
	return	genderArr;
}


