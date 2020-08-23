
// 1-using the console calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15].
// function average(array) {
// var total = 0;
// for(var i = 0; i < grades.length; i++) {
//     total += grades[i];
// }
// var avg = total / grades.length;
// return avg 
// }



3-
function identity(parameter){
  return parameter
}



Write a function convertTo that takes  a string and a number as parameters.
// If the string input is "cm", then the function should convert the 2nd argument into centimeters by multiplying it to 2.54 and returning that value.
// If the string input is "in", then the function should convert the 2nd argument into inches by dividing it by 2.54.
// Calling your function should result in something like:
// convertTo('cm', 100);  ==> 254
// convertTo('in', 50.8); ==> 20

function convertTo(units, num) {
  if (units=== cm) {
    result = (num*2.54);
  } else {
    result = (num/2.54);
  }
  return result;
}  



