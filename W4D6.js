//Create a function (class) called Student that return an object that contains the following properties:
//Name, Date of Birth, Gender, Age
//Create an array and fill it with 5 students
//Create a function that takes a student as parameter and print out the details of the student
//Create a function that takes the array of students and sort them out based on age (younger-to-older)
//Create a function that takes the array and a string either “M” or “F” and returns the male students if “M” was passed and female students if “F” was passed
function Student(Name,Age,DateOfBirth,Gender){
    return {
        name:Name,
        age:Age,
        DateOfBirth:DateOfBirth,
        gender:Gender,
    }
   }
   var array=[]
   array.push(Student('asem',25,'14/11/1999','male'))
   array.push(Student('ammed',26,'14/11/1996','male'))
   array.push(Student('sami',24,'14/11/1998','male'))
   array.push(Student('manar',23,'14/11/1985','female'))
   array.push(Student('rawan',22,'14/11/1993','female'))
   
   function details(student){
   return `student name is ${student.name}, the gender is${student.gender} and his age is ${student.age} and was born in ${student.DateOfBirth}`
   }
   details(array[0])
   function sortStudent(array){
     
       for(var i=0;i<array.length;i++){
           for(var j=0;j<array.length;j++){
               if(array[i]['age']<array[j]['age']){
                 console.log(array[i]['age'],array[j]['age'])
                   var temp=array[i]
                   array[i]=array[j]
                   array[j]=temp
               }
           }
       }
       return array
   }
   sortStudent(array)
   function maleOrFemale(array,sign){
       var x=''
       if(sign==='M'){
           x='male'
       }else{
           x='female'
       }
       return array.filter(element=>element['gender']===x)
   }
   maleOrFemale(array)