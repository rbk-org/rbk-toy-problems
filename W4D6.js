//Create a function (class) called Student that return an object that contains the following properties:
//Name, Date of Birth, Gender, Age
//Create an array and fill it with 5 students
//Create a function that takes a student as parameter and print out the details of the student
//Create a function that takes the array of students and sort them out based on age (younger-to-older)
//Create a function that takes the array and a string either “M” or “F” and returns the male students if “M” was passed and female students if “F” was passed

function student(name,dateofBirth,gender,age){
  var stud = {};
  var studentArr = [];
  stud.name = name;
   stud.dateofBirth = dateofBirth;
   stud.gender = gender;
   stud.age = age;
   stud.detail = detail()
   stud.age = age()
   stud.gend=gende()
  return stud;
}
  var studentArr = [];
var stud1 = new student('ahmad','1/5/2000','male',20);
var stud2 = new student('KHALED','5/8/2002','male',18);
var stud3 = new student('LAIAN','18/5/2015','female',5);
var stud4 = new student('joury','4/8/2002','female',18);
var stud5 = new student('jwan','4/8/2007','female',13);
studentArr.push(stud1)
studentArr.push(stud2)
studentArr.push(stud3)
studentArr.push(stud4)
studentArr.push(stud5)

function detail(name){
  return 'the student name is '+ this.name + 'dateofBirth:'+ this.dateofBirth + ' , the gender is ' + this.gender + 'age is '+ this.age
}

function age(array){
  var younger = array[0]
  for(var i=0;i<array.length;i++){
    if(array[i].age < array[0].age){
      younger =array[i]
      studentArr.push(array[i])
    }
  }
  return studentArr;
}
function gend(array,char){
  var res = [];
  for(var i=0;i<array.length;i++){
    if(array[i]['gender'][0] === 'char'{
    res.push(array[i])
    })
  }return res;
}