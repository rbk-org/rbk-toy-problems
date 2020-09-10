

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
function each(coll, func){
  
  if(Array.isArray(coll)){
    
    for(var i = 0; i < coll.length; i++){
      func(coll[i],i)
    }
  }
  else{
    var acc = {};
    for(var key in coll){
      func(coll[key],key)
    }
  }

}



function filter(coll, predictor){
  var acc = {};
  if(Array.isArray(coll)){
    acc = []
  }
  each(coll, function(element, i){
    if(predictor(element,i)){
      if(typeof i === 'number'){
        acc.push(element)
      }
    else{
      acc[i] = element
    }
  }
})
  return acc;
}

var staff = [
  {name: {first: "Alyssa", last: "Hacker"}, birthDay: {month: "June", day: 5, year: 1987}},
  {name: {first: "Ben", last: "Bitdiddle"}, birthDay: {month: "August", day: 19, year: 1984}},
  {name: {first: "Eva", last: "Ator"}, birthDay: {month: "March", day: 29, year: 1980}},
  {name: {first: "Lem", last: "Tweakit"}, birthDay: {month: "August", day: 11, year: 1989}},
  {name: {first: "Louis", last: "Reasoner"}, birthDay: {month: "November", day: 17, year: 1992}}
];

["Ben Bitdiddle: August 19, 1984", "Lem Tweakit: August 11, 1989"]
function getPeopleBornIn(people, month){
  var ans = filter(people, function(person, i){
      return person['birthDay']['month'] === month
  })
  var arr = []
  var str ='';
  each(ans,function (obj, key){

    if(ans.length === 1){
    str = obj['name']['first'] + ' ' + obj['name']['last'] + ': ' + obj['birthDay']['month'] +
     ' ' + obj['birthDay']['day'] + ', ' + obj['birthDay']['year']}
     else{
     str += obj['name']['first'] + ' ' + obj['name']['last'] + ': ' + obj['birthDay']['month'] +
     ' ' + obj['birthDay']['day'] + ', ' + obj['birthDay']['year'] + ", ";
     }
   arr.push(str)
  })
  return arr;
}