//Create a function (class) called Student that return an object that contains the following properties:
//Name, Date of Birth, Gender, Age
//Create an array and fill it with 5 students
//Create a function that takes a student as parameter and print out the details of the student
//Create a function that takes the array of students and sort them out based on age (younger-to-older)
//Create a function that takes the array and a string either “M” or “F” and returns the male students if “M” was passed and female students if “F” was passed
var s1=Student('hala','20/11/2001','female',19)
var s2=Student('ahmad','20/7/2015','male',5)
var s3=Student('alaa','6/9/2004','female',17)
var s4=Student('mohammad','2/1/2000','male',20)
var s5=Student('duha','4/6/2/1998','female',22)
var students=[s1,s2,s3,s4,s5]
function Student(name,dateofbirth,gender,age){
	return {
    name:name,
	dateofbirth:dateofbirth,
	gender:gender,
	age:age
	}
	
}
function showstudent(s){
  console.log(s)
}
function sortonage(array){
  var arr=[];
  var small=array[0]
  var old=array[1]
  for(var t=2;t<array.length;t++){
  if(small.age>old.age){
     if(small.age>array[t].age){
      arr.push(array[t])
    }
    else
    { 
      arr.push(small)
    }
    else
    {
      arr.push(old)
    }
   
  }}
  return arr;
}
function genderfunc(array,str){
  var arr1=[]
  for(var e=0;e<array.length;e++){
  if(str==='f'||str==='F'){
    if(array[e].gender==='female'){
    arr1.push(array[e])
    }
  }else if(str==='m'||str==='M'){
    if(array[e].gender==='male'){
    arr1.push(array[e])
  }
  }}
  return arr1
}
//showstudent(s2)
sortonage(students)
//genderfunc(students,'m')