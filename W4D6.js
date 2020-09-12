//Create a function (class) called Student that return an object that contains the following properties:
//Name, Date of Birth, Gender, Age
function student(name , DateBirth , gender ,age){
	var objstudent = {};
	objstudent.name = name;
	objstudent.DateBirth =DateBirth;
	objstudent.gender=gender;
	objstudent.age=age;
	return objstudent;
}
//Create an array and fill it with 5 students
var stu1 = student('israa' , 8-4-1995 ,'female', 25)
var stu2 = student('iman' , 8-4-1995 ,'female', 24)
var stu3 = student('aman' , 8-4-1995 ,'female', 23)
var stu4 = student('omama' , 8-4-1995 ,'female', 20)
var stu5 = student('dina' , 8-4-1995 ,'female', 19)

var array = [stu1 , stu2 ,stu3 , stu4, stu5];
//Create a function that takes a student as parameter and print out the details of the student
function displayStudent(student){
	return student;
}
//Create a function that takes the array of students and sort them out based on age (younger-to-older)
function sortStudent(arraystudent){
	for(var i = 0 ;i < arraystudent.length ; i++){
    for(var j = i+1 ; j < arraystudent.length ; j++)
		if(arraystudent[i]['age'] > arraystudent[j]['age'] ){
	 var x =  arraystudent[i];
      arraystudent[i] = arraystudent[j]	;
      arraystudent[j] = x;
            	}
	}
	return arraystudent;

}
//Create a function that takes the array and a string either “M” or “F” and returns the male students if “M” was passed and female students if “F” was passed
function returnMorF(array , character){
	
	for(var i = 0 ; i < array.length ; i++){
		if(array[i]['gender'][0] !== character || array[i]['gender'][0] !== character){
          array.splice(i , 1)
		}
	}return array;
}