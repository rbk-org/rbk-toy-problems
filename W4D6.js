//Create a function (class) called Student that return an object that contains the following properties:
//Name, Date of Birth, Gender, Age
//Create an array and fill it with 5 students
//Create a function that takes a student as parameter and print out the details of the student
//Create a function that takes the array of students and sort them out based on age (younger-to-older)
//Create a function that takes the array and a string either “M” or “F” and returns the male students if “M” was passed and female students if “F” was passed

var ar=[]
function student(n,d,g,a){
var o={
	name:n,
	birthdate:d,
	gender:g,
	age:a
}
ar.push(o)
return o
}
s1=student("Husam","13.5.2004",'Male',16)
s2=student("Hassan","18.7.1991",'Male',29)
s3=student("Rawand","3.3.1998",'Female',22)
s4=student("Tala","1.2.2003",'Female',17)
s5=student("Rana","23.4.2012",'Female',8)
console.log(ar)
console.log()

function details(s){
	return 'Name: '+s.name+', Gender: '+s.gender+', Age: '+s.age+', Date Of Birth: '+s.birthdate
}
console.log(details(s2))
console.log(details(s4))
console.log()


function sortAge(y,x=[]){
  var v=y.slice(0)
var z=v[0]
for(var i=0;i<v.length;i++){
  if(v[i]['age']<z['age']){z=v[i];var h=i}
}
x.push(z)
v.splice(h,1)
if(v.length===0){return x}
return sortAge(v,x)
}
console.log(sortAge(ar))


function filterGender(arr,str){
	var x=[]
	for(var i=0;i<arr.length;i++){
		if(arr[i]['gender'][0].toLowerCase()===str.toLowerCase()){x.push(arr[i])}
	}
return x
}
console.log()
console.log(filterGender(ar,"M"))
console.log()
console.log(filterGender(ar,"f"))

//