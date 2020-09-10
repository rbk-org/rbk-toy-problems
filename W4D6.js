//Create a function (class) called Student that return an object that contains the following properties:
//Name, Date of Birth, Gender, Age
//Create an array and fill it with 5 students
//Create a function that takes a student as parameter and print out the details of the student
//Create a function that takes the array of students and sort them out based on age (younger-to-older)
//Create a function that takes the array and a string either “M” or “F” and returns the male students if “M” was passed and female students if “F” was passed
function Student(name, dateOfBirth, gender, age){
  student = {}

  student.name = name;
  student.dateOfBirth = dateOfBirth;
  student.gender = gender;
  student.age = age;

  return student;
}


var students = [Student('Shadi', '26/4/1991', 'male', 29), Student('Samer', '18/1/1995', 'male', 25),
 Student('Dia', '1/9/1996', 'male', 24), Student('Akran', '2/8/1990', 'female', 30)];


 function displayStudent(student){
  console.log('Student Name: '+ student.name + '\n'+
            'Student Date-Of-Birth : '+ student.dateOfBirth + '\n'+
            'Student Gender: '+ student.gender + '\n'+
            'Student Age: '+ student.age + '\n')
 }


function each(coll, func){
  
  for(var i = 0; i < coll.length; i ++){
    func(coll[i],i)
  }
}


 function sortArrOnAge(students){
  var ages = []
  each(students, function(student, i){
    ages.push(student['age']);
  })

  ages.sort(function(a,b){return a-b;})
  
  var sortedArr = []
  each(ages, function (aGe, i){
    each(students, function(std, x){
      if(aGe === std['age']){
      sortedArr.push(std)
    }
    })
    
  })

  while(students.length > 0){
    students.pop()
  }
  var i = 0;
  while(students.length < sortedArr.length){
    students.push(sortedArr[i])
    i++
  }
 }


 function getAllMOrF(students, gender){
  var wanted = 'female'
  if(gender === 'M'){
    wanted = 'male'
  }
  
  var acc = []
  each(students, function(student, i){
    if(student['gender'] === wanted){
      acc.push(student);
    }
  })
  return acc;
 }