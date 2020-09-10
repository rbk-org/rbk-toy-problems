//Create a function (class) called Student that return an object that contains 
//the following properties:
//Name, Date of Birth, Gender, Age
function Student(name, date, gender, age){

	let student={
		name:name,
		date:date,
		gender:gender,
		age:age,
		addStudent:function(objName,name, date, gender, age){
						objName=Student(name, date, gender, age);
						arr.push(objName)
						return objName;
					} 
	}

	return student;
}


//Create an array and fill it with 5 students
stu1=Student("a","12/11/2023","male",37);
stu2=Student("b","12/11/2023","male",22);
stu3=Student("c","12/11/2023","female",30);
stu4=Student("d","12/11/2023","female",40);
stu5=Student("e","12/11/2023","male",15);
var arr=[stu1,stu2,stu3,stu4,stu5]

//Create a function that takes a student as parameter and print out the details of the student

var student=Student();
student.addStudent("stu6","f","12/11/2023","male",41)
console.log(arr)
//Create a function that takes the array of students and sort them out based on age (younger-to-older)
function sort(arr){
	for(var i=0;i<arr.length;i++){
		for(var j=0;j<arr.length;j++){
			if(arr[i]['age']<arr[j]['age']){
				var temp=arr[i];
				arr[i]=arr[j];
				arr[j]=temp;
			}
		}
	}
	return arr;
}
console.log(sort(arr));
//Create a function that takes the array and a string either “M” or “F” and returns the male students if “M” was passed and female students if “F” was passed
function returnGenderType(arr,gender,tempArr=[]){

	if(gender.toLowerCase()==='f') gender="female";
	else gender="male";
	for(var j=0;j<arr.length;j++){
			if(arr[j]['gender'].toLowerCase()===gender){
				tempArr.push(arr[j])}
			}
return tempArr;
}
console.log(returnGenderType(arr,"m"));