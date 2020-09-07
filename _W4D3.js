/*
Write a function called onlyPayForHealthyThings, that takes an array of objects.
Each object is a grocery item with the following properties: name, nutritionalValue, price.
function onlyPayForHealthyThings(arr) {
  var items ={ name:name, nutritionalValue: value, price:price}
}
The nutritionalValue is also an object, which has the following properties: lowSugar, lowSodium
 var grocery={ name: name, price: price, nutritionalValue: {lowSugar, lowSodium }}
}
Your function should add the prices of all the items in the array if the item is true for both lowSugar and lowSodium
Finally, your function should return the sum total of all the healthy items*/

function onlyPayForHealthyThings(foodList) {

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

var arr = [];
var totalprice = 0;

  for (var i=0; i<myCart.length; i++){
    for (var key in myCart[i]){
      var x = nutritionalValue[lowSugar];
      var y = nutritionalValue[lowSodium];
      if (x === true && y === true){
        totalprice = totalprice + myCart[price];
        arr.splice(myCart[i]);
      }
    }
   }
    return arr;
 }
//Calling onlyPayForHealthyThings(myCart) should return 2.85 from adding the prices of "carrots", "apples", and "avocados"
