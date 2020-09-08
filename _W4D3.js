/*
Write a function called onlyPayForHealthyThings, that takes an array of objects.

Each object is a grocery item with the following properties: name, nutritionalValue, price.
The nutritionalValue is also an object, which has the following properties: lowSugar, lowSodium
Your function should add the prices of all the items in the array if the item is true for both lowSugar and lowSodium

Finally, your function should return the sum total of all the healthy items
*/
function onlyPayForHealthyThings(foodList) {
  var addPrice=0;
   for(var i=0;i<foodList.length;i++){
    for(var key in foodList[i]){
      for(var k in key[i]){
        if(foodList[i][key]["lowSugar"] === true && foodList[i][key]["lowSodium"] === true){
          addPrice+=foodList[i]["price"];

        }// if 
      }// third loop
    }//second loop
   }//first loop
   return addPrice;
}//function 
var myCart = [ 
  { name: 'chips',
    nutritionalValue: { lowSugar: true, lowSodium: false },
    price: 0.75 },
  { name: 'carrots',
    nutritionalValue: { lowSugar: true, lowSodium: true },
    price: 1.5 },
  { name: 'cookies',
    nutritionalValue: { lowSugar: false, lowSodium: true },
    price: 2.5 },
  { name: 'apples',
    nutritionalValue: { lowSugar: true, lowSodium: true },
    price: 0.6 },
  { name: 'soda',
    nutritionalValue: { lowSugar: false, lowSodium: true },
    price: 1.1 },
  { name: 'avocados',
    nutritionalValue: { lowSugar: true, lowSodium: true },
    price: 0.75 } 
  ];
console.log(onlyPayForHealthyThings(myCart))// should return 2.85 from adding the prices of "carrots", "apples", and "avocados"
// i hope you see my solution even if i am late for doing it 
