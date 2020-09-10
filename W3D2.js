
/*
1- Write a function called countNumOfStrings that takes an array of
mixed elements (different data types)
and returns the number of strings there are in the array.
Calling your function should result in:
countNumOfStrings(["hello", "world", 5, true, {}]); //2
countNumOfStrings(["foo", 2, 10, "bar", 5, false, {}, "baz"]); //3
countNumOfStrings(["There is only one string in this example"]); //1
Hint: Recall typeof? If not: check it out on MDN. :-)
*/
///**************using recursion****************/

function countNumOfStrings(s,count=0){
	if(s.length===0) return count;
	else{ if(typeof(s[0])==='string') count++;
	return countNumOfStrings(s.splice(1),count);
}
}
console.log(countNumOfStrings(["hello", "world", 5, true, {}]));
/*
2- Write a function called listLengthOfAllWords that takes an array
of words (strings),
and returns an array of numbers representing the length of each word.
Calling your function should result in:
listLengthOfAllWords(['hello', 'world', 'I', 'can', 'code']); //[5, 5,
1, 3, 4];
*/
/****************************** Recursion******************/
function listLengthOfAllWords(s,index=0){
	if(index===s.length) return s;
	if(typeof(s[index])==='string') s[index]=s[index].length
		return listLengthOfAllWords(s,index+1);

}
console.log(listLengthOfAllWords(['hello', 'world', 'I', 'can', 'code']));
/*
Write a function called flipPairs that takes a string a parameter
and returns the given string after Flip every pair of characters.
Example:
var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei
,si 't sniasenyli tnreseitgn!*/
/*************** Half Recursive  :) ************/ 
function flipPairs(s,temp=[]){
	if(s.length===0) return temp.join(" ");
	if(typeof(s)==='string') s=s.split(" ");
s[0]=s[0].split('');
	for(var i=0,j=s[0].length-1;i<j;i++,j--){
		var t=s[0][i];
		s[0][i]=s[0][j];
		s[0][j]=t;
		console.log(s[0]);
	}
	//console.log(s[0]);
	temp.push(s[0].join(""))
	//console.log(temp);
	return flipPairs(s.slice(1),temp)

}
console.log(flipPairs('check out how interesting this problem is, it\'s insanely interesting!'));

