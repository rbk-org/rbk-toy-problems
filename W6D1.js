<!-- // 1. create new HTML file a with a three buttons and div with heading and paragraph inside it.
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
// I'm a simple html paragraph and the css can controll my attributes. The JS will make the page interactive -->

<!DOCTYPE html>
<html>
    <head>
        <script src="https://code.jquery.com/jquery-3.5.1.min.js" 
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="style.css">
       
    </head>
    <body>
        <button id="button1"> Important</button>
        <button  id="button2"> normal</button>
        <button id="button3"> rest</button>
        <div>
            <h1> Heading for the div</h1>
            <p> I'm a simple html paragraph and the css can controll my attributes. The JS will make the page interactive</p>
        </div> 
        <script type="text/javascript" src="s.js">
        </script>
    </body>
   
</html>

/////js
$('#button1').click(function(){
    $("p").css("background-color", "red");
    $("p").css("color", "white");
    $("h1").css("color", "darkred");
});

$("#button2").click(function(){
    $("p").css("background-color", "lightblue");
    $("p").css("color", "white");
    $("h1").css("color", "darkblue");
});

$("#button3").click(function(){
    $("p").css("background-color", "white");
    $("p").css("color", "dark");
   
});
/////css
body{
    text-align: center;
    margin: 60px;
}
button{
    border: none;
    font-size: 16px;
    font-weight: bold;
}
h1{
    color: palevioletred;
    font-style: italic;
    
    
}
