// when the Important button clicked! change the background color to red and text to white and heading to dark red
// when the normal button clicked! change the background color to lightblue and text to white and heading to dark blue
// when the rest button clicked! change the background white and the text to dark
var Importantbtn=document.createElement("button")
var Normaltbtn=document.createElement("button")
var Resttbtn=document.createElement("button")
var div=document.getElementById("div")
Importantbtn.setAttribute("id", "Important")
Importantbtn.innerHTML="Important"
div.appendChild(Importantbtn)