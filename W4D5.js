/*
1-Write a function called getPeopleBornIn that takes an array and string month,
and returns a new array of people and their birthday information who were all born in the given month.

A sample input array would look like:

var staff = [
  {name: {first: "Alyssa", last: "Hacker"}, birthDay: {month: "June", day: 5, year: 1987}},
  {name: {first: "Ben", last: "Bitdiddle"}, birthDay: {month: "August", day: 19, year: 1984}},
  {name: {first: "Eva", last: "Ator"}, birthDay: {month: "March", day: 29, year: 1980}},
  {name: {first: "Lem", last: "Tweakit"}, birthDay: {month: "August", day: 11, year: 1989}},
  {name: {first: "Louis", last: "Reasoner"}, birthDay: {month: "November", day: 17, year: 1992}}
];
A call to your function getPeopleBornIn(staff, 'August');

Would return:

["Ben Bitdiddle: August 19, 1984", "Lem Tweakit: August 11, 1989"]

*/

//first we want to declare function getPeopleBornIn
//takes arr and str as a parameter 
//it will return the people who born in the given month
//also we need array to push the element to it  

function getPeopleBornIn(arr,str){
	var array=[]
     for(var i=0;i<arr.length;i++){
     	for(var key in arr[i]){
     		for( var keys in arr[i]){
     			if(arr[i][key]['month']==='August'){
                    array.push([i][key][keys])
     			}//if
     		}// third for
     	}//second 
     }//first
   return array
}//end of func
var staff = [
  {name: {first: "Alyssa", last: "Hacker"}, birthDay: {month: "June", day: 5, year: 1987}},
  {name: {first: "Ben", last: "Bitdiddle"}, birthDay: {month: "August", day: 19, year: 1984}},
  {name: {first: "Eva", last: "Ator"}, birthDay: {month: "March", day: 29, year: 1980}},
  {name: {first: "Lem", last: "Tweakit"}, birthDay: {month: "August", day: 11, year: 1989}},
  {name: {first: "Louis", last: "Reasoner"}, birthDay: {month: "November", day: 17, year: 1992}}
];
console.log(getPeopleBornIn(staff, 'August'))
