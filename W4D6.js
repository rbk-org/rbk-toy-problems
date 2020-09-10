//Create a function (class) called Student that return an object that contains the following properties:
//Name, Date of Birth, Gender, Age
//Create an array and fill it with 5 students
//Create a function that takes a student as parameter and print out the details of the student
//Create a function that takes the array of students and sort them out based on age (younger-to-older)
//Create a function that takes the array and a string either “M” or “F” and returns the male students if “M” was passed and female students if “F” was passed
function Student(Name){
	var obj = {};
	obj.Name = Name;
	obj.DateOfBirth;
	obj.Gender;
	obj.Age;
	obj.details = details;
	obj.SortAsAge = SortAsAge;
	obj.passed = true;
	obj.CheckPassed = passed;
var students = [ {Name:'Ahmad', DateofBirth:2000, Gender:'male' , Age:20 },
              {Name:'Rana', DateofBirth:2000, Gender:'female' , Age:20 },
              {Name:'Rami', DateofBirth:2002, Gender:'male' , Age:18 },
              {Name:'Kareem', DateofBirth:2001, Gender:'male' , Age:19 },
              {Name:'Lana', DateofBirth:2001, Gender:'female' , Age:19 } ]
	return obj;
}
//---------------------------------
function details(students){
this.DateOfBirth = DateOfBirth;
this.Gender = Gender;
this.Age = Age;

return students;	
}
//----------------------------------
function SortAsAge(students){
	sort = [];
	for (var i = 0; i < staff.length; i++){
		if (students[i]['age'] >= students[i]['age']){
			sort.push(students[i]);
            }
		}
		return sort;


//-------------------------------------------------
function passed(){
	return this.passed;
}

function CheckPassed(str){
	if (this.passed === 'M' || this.passed === 'F'){
		return true;
       }
      }





