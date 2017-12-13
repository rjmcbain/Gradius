$( document ).ready(function() {
    console.log( "ready!" );


$(function(){
    $('#gameover').hide();
    setTimeout(function(){                           //intro text
    $('#gameover').fadeIn('slow');    
    }, 500);
    setTimeout(function(){ 
    $('#gameover').fadeOut('slow');
	}, 9000);
})

$(function(){
    $('#thanks').hide();
    setTimeout(function(){                           //intro text
    $('#thanks').fadeIn('slow');    
    }, 11000);
    setTimeout(function(){ 
    $('#thanks').fadeOut('slow');
	}, 17000);
})


$('html, body').css({
    overflow: 'hidden',       //disables scrolling
    height: '100%'
});

});