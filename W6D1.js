// 1. create new HTML file a with a three buttons and div with heading and paragraph inside it.
//      a. button1 : Important
//      b. button2 : normal
//      c. button3 : rest
// 2. create a new JS file  and link between the js and HTML
// 3. create a new css file and change the styles of the buttons and div with it's content
// 4. add Interaction for the buttons as the following: 
// when the Important button clicked! change the background color to red and text to white and heading to dark red
// when the normal button clicked! change the background color to lightblue and text to white and heading to dark blue
// when the rest button clicked! change the background white and the text to dark



// you can use this code for the div content: 
// Heading for the div
// I'm a simple html paragraph and the css can controll my attributes. The JS will make the page interactive
//____________________________________________________HTML CODE _____________________________________________________________
// <!DOCTYPE html>
// <html>
// <head>
// 	<title></title>
// 	<link rel="stylesheet" type="text/css" href="style.css">
// <script src="https://code.jquery.com/jquery-3.5.1.min.js" 
// integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" 
// crossorigin="anonymous"></script>
// </head>
// <body>
// 	<div id="input-container">
// 			<h1 id="main-header">header1</h1>
// 			<p>rbk toy problem w6d1</p>
// 	</div>
// 		<button id="button1">Important</button>
// 		<button id="button2">normal</button>
// 		<button id="button3">rest</button>
// 	<script type="text/javascript" src="script.js"></script>

// </body>
// </html>
// _____________________________________________________________JS CODE________________________________________________________
// $("#main-header").text("Todo App");
// $("#button1").on("click",function(){
// 	$("#input-container").css("color","white");
// 	$("body").css("background-color","red");
// });
// $("#button2").on("click",function(){
// 	$("#input-container").css("color","white");
// 	$("body").css("background-color","lightblue");
// });
// $("#button3").on("click",function(){
// 	$("#input-container").css("color","black");
// 	$("body").css("background-color","white");
// });
