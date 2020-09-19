
 $(document).ready(function(){


	$('#i').click(function(){
		$("#divBox").attr("class","red")
		$("#hd").attr("class","darkRed")
	})

	$('#n').click(function(){
		$("#divBox").attr("class","blue")
		$("#hd").attr("class","darkBlue")		
	})

	$('#r').click(function(){
		$("#divBox").attr("class","white")
		$("#hd").attr("class","darkWhite")	})

	$("#hd").text("Heading for the div")
	$("#pd").text("I'm a simple html paragraph and the css can controll my attributes. The JS will make the page interactive")
 });//end of Jquery 