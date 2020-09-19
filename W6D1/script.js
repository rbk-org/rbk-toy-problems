$('.important').on('click',function(){
    $("body").css("background-color", "red");
    $("h1").css("background-color", "darkred");
    $("body").css("color", "white");
})

$('.normal').on('click',function(){
    $("body").css("background-color", "lightblue");
    $("h1").css("background-color", "darkblue");
    $("body").css("color", "white");
})

$('.rest').on('click',function(){
    $("body").css("background-color", "white");
    $("h1").css("background-color", "white");
    $("body").css("color", "black");
})
