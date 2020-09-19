$(".important").click(function(){
  alert("hello I will change the background color to red and text to white and heading to dark red.");
$("body").css("background-color","red")
$("body").css("color","white")
$("h1").css("background-color","dark red")
});	

$('.normal').on('click',function(){
	  alert("hello, I will change the background color to lightblue and text to white and heading to dark blue");
    $("body").css("background-color", "lightblue");
     $("body").css("color", "white");
    $("h1").css("background-color", "darkblue");
   
})

$('.rest').on('click',function(){
    $("body").css("background-color", "white");
    $("body").css("color", "black");
    $("h1").css("background-color", "white");
 
})