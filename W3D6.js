/*

Exercise 1
Currently, you have a budget of $100. You have a shopping list in decreasing priority, 
and you want to report how many items you bought and how much it cost you. 
Write a function called shoppingSummary that takes an array of shopping items (objects), 
and returns a string with the number of items you bought, and the total amount you spent.

<<<<<<< HEAD

=======
>>>>>>> eb9f7292a599bc77ab98753449695e2a737fbc41
Notes:

You cannot spend more than your budget ($100).
You have enough room for all the items (if you end up buying everything), 
so there's no item limit -- your only limit is your budget.
The list is mentioned to be in "decreasing priority" simply because you do not have to sort the input array to optimize for anything else.
 So do not worry about coming up with any other sorting algorithm for the most "bang for your buck" or what not :-)
Take for example the data below:
<<<<<<< HEAD
*/
=======
>>>>>>> eb9f7292a599bc77ab98753449695e2a737fbc41

var shoppingList = [
  {
    item: "rice",
    price: 12.75,
    weightInPounds: 20
  },
  {
    item: "chicken",
    price: 6.99,
    weightInPounds: 1.25
  },
  {
    item: "cookware",
    price: 79.99,
    weightInPounds: 35
  },
  {
    item: "celery",
    price: 3.99,
    weightInPounds: 2
  },
  {
    item: "carrots",
    price: 2.85,
    weightInPounds: 2
  },
  {
    item: "green beans",
    price: 2.55,
    weightInPounds: 2
  }
];
<<<<<<< HEAD
//Calling your function should result in:

shoppingSummary(shoppingList); //"I got 3 items at $99.73"

function shoppingSummary (array){

var price= 0;
var count=0;
var str=""

  for(var i=0; i<array.length; i++){
    if(array[i]["price"] < 100){
      price+=array[i]["price"]
      count+=1
    }
  }
str="I got" + count + "items at" 
}
=======
Calling your function should result in:

shoppingSummary(shoppingList); //"I got 3 items at $99.73"


>>>>>>> eb9f7292a599bc77ab98753449695e2a737fbc41

/*
Exercise 2
Suppose that you wanted to take out the most expensive item on your shopping list. 
Write a function called removeMostExpensive 
which returns a new array without the most expensive thing in the list. 
Your function should preserve the order of the items in this array.

removeMostExpensive(shoppingList);
Would return a new array with the following elements:

[
  {
    item: "rice",
    price: 12.75,
    weightInPounds: 20
  },
  {
    item: "chicken",
    price: 6.99,
    weightInPounds: 1.25
  },
  {
    item: "celery",
    price: 3.99,
    weightInPounds: 2
  },
  {
    item: "carrots",
    price: 2.85,
    weightInPounds: 2
  },
  {
    item: "green beans",
    price: 2.55,
    weightInPounds: 2
  }
];
//notice that the element with "cookware" is missing

<<<<<<< HEAD
*/


// your answer is here

function removeMostExpensive(shoppingList){
var max = shoppingList[0];

for(var i=0; i<array.length; i++){
 for (var j=i+1; j<shoppingList.length; i++){
if (shoppingList[i]["price"]>shoppingList[i]){
  max = shoppingList[i]["price"]
  shoppingList[i]["price"]=shoppingList[i]["price"]
shoppingList[j]["price"]=max
}

 }
  
}
return shoppingList
}
=======
/*


// your answer is here
>>>>>>> eb9f7292a599bc77ab98753449695e2a737fbc41
