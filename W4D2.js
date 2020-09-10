
//Part1:

// create a data model to represent your classmates
// 	-think of different attributes of your classmates? what do all of them have ?
// 	-create a factory function.
// 	-create an array to hold the classmates that you created and what you created to it .  
// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.

var arrStudent=[]; count=1;
function counter(){
	return count++;
}
function Student(){
  
  let instance={};
  instance.name=""
  instance.age=""
  instance.friends=[]


  return instance;
}

var sami= Student();
var adnan= Student();

//add function 
var addStudent=function (obj,name,age,gender,count){
  obj.name=name;
  obj.age=age;
  obj.gender=gender;
  obj.id=count;
  arrStudent.push(obj)
return obj;
}

//create

console.log(addStudent(sami,"Sami",21,"male",counter()));
console.log(addStudent(adnan,"adnan",29,"male",counter()));
//array of student already created
//console.log(arrStudent);
//display student 
var displayStudent=function (name){
	if(typeof(name)==='string'){
		var t="";
		for(var i=0;i<arrStudent.length;i++){
			if(arrStudent[i].name.includes(name)){ t+="Name: "+arrStudent[i].name+" Age:"+arrStudent[i].age+"\n";}
		}
	}

return t;
}
console.log(arrStudent);
//console.log(displayStudent("adnan"));

var addfriend=function (id1,id2){
for(var i=0;i<arrStudent.length;i++){

  if(arrStudent[i].id===id1){

  	for(var j=0;j<arrStudent.length;j++){
  		if(arrStudent[j].id===id2){

  			arrStudent[i].friends.push({name:arrStudent[j].name,gender:arrStudent[j].gender});}
  		}
  	}
  }
  return arrStudent;
}
console.log(addfriend(1,2));
//calculate male number
var nbOfMale=function (id){

		
		for(var i=0;i<arrStudent.length;i++){
			if(arrStudent[i].id===id){
				if(arrStudent[i].friends.length===0) return "has no friends";
				else {
					var count=0;
					for(var j=0;j<arrStudent[i].friends.length;j++){
						//console.log(arr)
								if(arrStudent[j].gender==='male'){ count++;
								}
							}
							return count;
				}

			}
		}
	


}
console.log(nbOfMale(1));

//Part2:
// Using recursion Write a JavaScript function to find the greatest common divisor (gcd) of two positive numbers.
// Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summation, you'll need to use recursion in this.

