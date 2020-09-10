//Create a function (class) called Student that return an object that contains the following properties:
//Name, Date of Birth, Gender, Age
//Create an array and fill it with 5 students
//Create a function that takes a student as parameter and print out the details of the student
//Create a function that takes the array of students and sort them out based on age (younger-to-older)
//Create a function that takes the array and a string either “M” or “F” and returns the male students if “M” was passed and female students if “F” was passed
function student(name,dateOfBirth,gender,age){
	return {
		name:name
		dateOfBirth:dateOfBirth
		gender:gender
		age:age
	}
}
var student1=student("noor","12/4/2001","male","19")
var student2=student("ahmad","2/10/1998","male","21")
var student3=student("ammal","22/9/1997","female","22")
var student4=student("khaled","7/10/1995","male","25")
var student5=student("israa","12/1/2000","female","20")


var students=[student1,student2,student3,student4,student5]
function displayStudent(student){
	return "name"+": "+student.name+"\n"+"dateOfBirth"+": "+student.dateOfBirth+"\n"+"gender"+": "+student.gender+"\n"+"age"+": "+student.age
}

function youngerToOlder(array){
	var arr=[]
	young=array[0].age
	for(var i=0;i<array.length;i++){
		if(array[i].age<young){
			young=array[i].age
		}
	}
	arr.push(young)
}
function genderOfStudent(array,string){
	var newarr=[]
	for(var i=0;i<array.length;i++){
		if(string==="M" && array[i].gender==="male"){
			newarr.push(array[i].name)
		}
		else if(string==="F" && array[i].gender==="female"){
			newarr.push(array[i].name)
		}
		else{
			return "wrong input"
		}
	}
	return newarr
}