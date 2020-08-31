/*
Write a function  called favoriteDessert that takes no paremeters
and returns an object with 3 key-value pairs.
The names of each property and their respective values are up to you, 
but the values cannot be undefined. How would you describe your favorite dessert?

For example, one could return an object such as:

{ name: "Flan", ovenTemp: 350, prepTime: "25 minutes + 50 minutes chilling" }
Another example could be:

{ name: "Gelato", countryOfOrigin: "Italy", flavor: "Chocolate Chip" }
*/

function favoriteDessert(){
  return {
    name:'gelato',
    countryOfOrigin:'italy',
    flavor:'Chocolate Chip',
  }
}

/*
function favoriteDessert(){
  var dess='';
	return {
    myDessert:function(name,countryOfOrigin,flavor){
     return 'my favoriteDessert is  '+name+' ,'+ 'this dessert come from '+ countryOfOrigin+' ,'+ 'it is have '+ flavor+' flavor';
    },
}
}
var myDESS= favoriteDessert();
*/// i tried to do clouser to add any dessert detail but it //didt work .