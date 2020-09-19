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

/////////////html file 
/*< !DOCTYPE html >
    <html>

        <head>
            <meta charset="utf-8">
                <meta name="viewport" content="width=device-width">
                    <title>W6D1</title>
                    <script src="https://code.jquery.com/jquery-3.5.1.min.js"
                        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
                    <link href="style.css" rel="stylesheet" type="text/css" />
</head>

                <body>

                    <div class="main">
                        <h1 id="main-header">Heading for the div</h1>
                        <p>I'm a simple html paragraph and the css can controll my attributes.</p>
                    </div>

                    <div id="buttons">
                        <button type="button" class="button" id="important">important</button>
                        <button type="button" class="button" id="normal">normal</button>
                        <button type="button" class="button" id="reset">reset</button>
                    </div>
                    <script src="W6D1.js"></script>
                </body>

</html>*/

/////////////////////////////css file
/*body{
    display: flex;
    justify - content: center;
    align - items: center;
    flex - flow: column wrap;
    margin: 00px;
    border: 5px solid cyan;

}

.button{
    border: 5px solid black;
    border - radius: 5px;
}*/



/////////////////////script file
/*$(document).ready(function () {
    $("#buttons#improtant").click(function () {
        $("body").css("background-color", "red");
        $("h1").css("color", "rgb(139, 0, 0)");
        $("body").css("color", "white");
    });
});

$(document).ready(function () {
    $("#buttons#normal").click(function () {
        $("body").css("background-color", "rgb(173, 216, 230)");
        $("h1").css("color", "rgb(0, 0, 139)");
        $("body").css("color", "white");
    });
});


$(document).ready(function () {
    $("#buttons#reset").click(function () {
        $("body").css("background-color", "white");
        $("body").css("color", "black");
    });
});*/