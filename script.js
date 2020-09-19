$('#important').on('click',function(){
    $('html').css({'background':'red','color':'white'})
    $('h1').css({'color':'darkred'})
})

$('#normal').on('click',function(){
    $('html').css({'background':'lightblue','color':'white'})
    $('h1').css({'color':'darkblue'})
})

$('#rest').on('click',function(){
    $('html').css({'background':'white','color':'black'})
    $('h1').css({'color':'black'})
})