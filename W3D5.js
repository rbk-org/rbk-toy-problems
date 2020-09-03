-/*
You were put in charge of ordering for tonight's company get-together, 
and you were given a data set with people's meal preferences and dietary restrictions. 
Write a function called orderAVegetarianDish that takes  an array of empoloyee objects, 
and returns true if at least 1 person is listed "vegetarian" on their "mealPreferences". 
<<<<<<< HEAD
Otherwise, your function should return false.*/
=======
Otherwise, your function should return false.
>>>>>>> 1fec366795f0a180299250b09e2518b56c1dcea0

var staffA = [
  {
    name: "Lia",
    department: "Human Resources",
    dietaryRestrictions: [],
    mealPreferences: "no preferences"
  },
  {
    name: "Sebastian",
    department: "Engineering",
    dietaryRestrictions: ["dairy free", "gluten free"],
    mealPreferences: "vegetarian"
  },
  {
    name: "Ari",
    department: "Executive",
    dietaryRestrictions: ["dairy free"],
    mealPreferences: "vegetarian"
  },
  {
    name: "Martha",
    department: "Legal",
    dietaryRestrictions: ["nut allergies"],
    mealPreferences: "non-vegetarian"
  }
];
<<<<<<< HEAD
//Calling your function should result in:

orderAVegetarianDish(staffA); //true


// your answer is here
    var count =0 ;
    function orderAVegetarianDish(array){
    
     for(var i=0;i<array.length;i++){

       if(array[i]['mealPreferences']==='vegetarian'){
        
         count ++;
       }


     }  if (count >0){ return true;}     
     else{ return false;}
    }
orderAVegetarianDish(staffA)
=======
Calling your function should result in:

orderAVegetarianDish(staffA); //true
*/

// your answer is here 
>>>>>>> 1fec366795f0a180299250b09e2518b56c1dcea0
