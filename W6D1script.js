let imp=$("#Important")
let nor=$("#normal")
let res=$("#rest")

//when the Important button clicked! change the background color to red and text to white and heading to dark red
$("#Important").on('click',function(e){
$(".div1").css({"background-color":"red","text-color":"white","heading":"dark"});
})
//

// when the normal button clicked! change the background color to lightblue and text to white and heading to dark blue
$("#normal").on('click',function(e){
$(".div1").css({"background-color":"lightblue","text":"white","heading":"darkblue"});
})

// when the rest button clicked! change the background white and the text to dark
$("#rest").on('click',function(e){
$(".div1").css({"background-color":"white","text-color":"dark"});
})





 


