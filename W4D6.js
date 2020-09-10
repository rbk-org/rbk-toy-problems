


function Student(name,dateOfBirth,gender,age)
{
  var obj={}
  obj.name=name;
  obj.dateOfBirth=dateOfBirth;
  obj.gender=gender;
  obj.age=age;
  
  obj.studentInfo=studentInfo;
  obj.sortStudent=sortStudent;
  obj.checkGender=checkGender;
  return obj;
}


var studentArray=[
{name:"Ahmed",dateOfBirth:"12/6/2000",gender:"Male",age:20},
{name:"A",dateOfBirth:"12/6/1996",gender:"Male",age:24},
{name:"b",dateOfBirth:"12/6/2000",gender:"Female",age:20},
{name:"c",dateOfBirth:"12/6/2020",gender:"Male",age:1},
{name:"d",dateOfBirth:"12/6/1994",gender:"Female",age:26}
];

function studentInfo(array){
  return "name: "+this.name+" dateOfBirth: "+this.dateOfBirth+"  gender: "+this.gender+"  age: "+this.age;

console.log("info",studentInfo(studentArray));


 function sortStudent(studentsArray){
	var arr1=[];  arr1[0]=studentsArray[0]
	for (var i=0; i<studentsArray.length; i++){
		if (arr1[0].age > studentsArray[i].age ){
			arr1[i]=studentsArray[i];
		}
	}
	return array1;
}

sortStudent(studentArray)



function checkGender(array){
for(var i=0;i<array.length;i++){ 
if(array[i].gender[0] === "F"){
  return "Female";
}
return "Male";
}
}
console.log("check",checkGender(studentArray));