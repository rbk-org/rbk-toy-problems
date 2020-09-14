//Create a function (class) called Student that return an object that contains the following properties:
//Name, Date of Birth, Gender, Age
//Create an array and fill it with 5 students
//Create a function that takes a student as parameter and print out the details of the student
//Create a function that takes the array of students and sort them out based on age (younger-to-older)
//Create a function that takes the array and a string either “M” or “F” and returns the male students if “M” was passed and female students if “F” was passed


function student(name, datebirth, gender,age) {
  return {
    name: name,
    dateOfbirth: datebirth,
    gender:gender,
    age: age,
   
  };
}
var stud1 = student("israa", "1/1/1990","female", 28);
var stud2 = student("Razan", "2/2/1991", "female", 27);
var stud3 = student("Rami", "4/3/2000","male",20);
var stud4 = student("Hanadi", "27/11/1988", "female", 32);
var stud5 = student("Ahmad", "10/10/1995", "male", 25);

var students = [stud1,stud2,stud3,stud4,stud5]
/////////////////////

function displayStudent(student) {
	var str = ''
	for (var key in student) {
		str += student[key] + ' - '
	}
}



function sortStudent(students){

       for(var i=0;i<students.length;i++){
           for(var j=0;j<students.length;j++){
               if(students[i]['age']<students[j]['age']){
                
                   var younger=students[i]
                   students[i]=students[j]
                   students[j]=younger
               }
           }
       }
       return students
   }

   sortStudent(students)




   function maleOrFemale(students,sign){
       var x=''
       if(sign==='M'){
           x='male'
           return  x+ students[i]
       }else{
           x='female'
           return  x + students[i]

       }
       return 
   }
   maleOrFemale(students,"M")

