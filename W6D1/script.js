


$('#important').on('click',function(){
    $("body").css("background-color", "red");
    $("h1").css("color", "darkred");
    $("body").css("color", "white");
})

$('#normal').on('click',function(){
    $("body").css("background-color", "lightblue");
    $("h1").css("color", "darkblue");
    $("body").css("color", "white");
})

$('#reset').on('click',function(){
    $("body").css("background-color", "white");
    $("h1").css("color", "white");
    $("body").css("color", "black");
})


