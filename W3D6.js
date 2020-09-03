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
The list is mentioned to be in "decreasing priority" simply because you do not have to sort the 
input array to optimize for anything else.
 So do not worry about coming up with any other sorting algorithm for the most
  "bang for your buck" or what not :-)
Take for example the data below:
*/
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
//Calling your function should result in:

//shoppingSummary(shoppingList); //"I got 3 items at $99.73"
	 sum=0;
function shoppingSummary(item){

	var count=0;
		for(var i=0;i<shoppingList.length;i++){
			
		if(shoppingList[i].hasOwnProperty('sold')) count++;
	}

	for(var i=0;i<shoppingList.length;i++){
		if(typeof(item)==='string' && shoppingList[i].item===item ){ 
			if(shoppingList[i].hasOwnProperty('sold')) return "you already buy \""+ item+"\" ";
			shoppingList[i]['sold']=true; count++; 
			sum+=shoppingList[i].price;
			if(sum>100) return "you don't have enough money to buy any more , you have just: "+(100-sum+shoppingList[i].price)
		}

	}
	return "I got "+count+ "items at "+sum;
}

console.log(shoppingSummary("green beans"));
console.log(shoppingSummary("green beans"));
console.log(shoppingSummary("carrots"));
console.log(shoppingSummary("cookware"));
 console.log(shoppingSummary("chicken"));
console.log(shoppingSummary("rice"));

/*
Exercise 2
Suppose that you wanted to take out the most expensive item on your shopping list. 
Write a function called removeMostExpensive 
which returns a new array without the most expensive thing in the list. 
Your function should preserve the order of the items in this array.

removeMostExpensive(shoppingList);
Would return a new array with the following elements:
*/
list=[
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

function removeMostExpensive(list){
	max=0;
	for(var i=1;i<list.length;i++)
	{
		if(list[i].price > list[max].price) max=i;
		console.log(max)
	}

	//console.log(list.splice(max,1)[0]);
	return list;
}
console.log(removeMostExpensive(list));