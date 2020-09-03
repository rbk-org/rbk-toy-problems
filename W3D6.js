/*

Exercise 1
Currently, you have a budget of $100. You have a shopping list in decreasing priority, 
and you want to report how many items you bought and how much it cost you. 
Write a function called shoppingSummary that takes an array of shopping items (objects), 
and returns a string with the number of items you bought, and the total amount you spent.

Notes:

You cannot spend more than your budget ($100).
You have enough room for all the items (if you end up buying everything), 
so there's no item limit -- your only limit is your budget.
The list is mentioned to be in "decreasing priority" simply because you do not have to sort the input array to optimize for anything else.
 So do not worry about coming up with any other sorting algorithm for the most "bang for your buck" or what not :-)
Take for example the data below:

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
Calling your function should result in:

shoppingSummary(shoppingList); //"I got 3 items at $99.73"
*/

function shoppingSummary (arrayOfObj){
itemCount=[];
itemCost=0;	
for (var i=0; i<arrayOfObj.length; i++){
	itemCost=itemCost+arrayOfObj[i].price;
    itemCount.push(1);
    if(itemCost > 100){
    itemCost=itemCost-arrayOfObj[i].price;	
    itemCount.pop();
    }
}
return "the total cost is: "+itemCost+" "+"number of items is "+itemCount.length;
}
shoppingSummary (shoppingList);

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

/*
*/
// your answer is here
function removeMostExpensive(arrayOfObj){
	var mostExp
	var mostExpIndex
	for (var i=0; i<arrayOfObj.length; i++){
		if(arrayOfObj[0].price<arrayOfObj[i].price){
			mostExp=arrayOfObj[i].item;
			mostExpIndex=i;
		}
	}
  console.log (arrayOfObj[mostExpIndex])
	arrayOfObj.splice(arrayOfObj[mostExpIndex],1)
	return arrayOfObj;
}
removeMostExpensive(shoppingList);