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

$(function(){
    $('.fadeIn').hide();
    setTimeout(function(){                           //intro text
    $('.fadeIn').fadeIn('slow');    
    }, 17750);
})

$(function(){
    $('.hard').hide();
    setTimeout(function(){                           //intro text
    $('.hard').fadeIn('slow');    
    }, 31750);
})

$(function(){
    $('.delayOut').show();
    setTimeout(function(){                           //intro text
    $('.delayOut').fadeOut('slow');    
    }, 27750);
})

$(function(){
    $('.p1').hide();
    setTimeout(function(){                           //intro text
    $('.p1').fadeIn('slow');  
    }, 17750);
})

$(function(){
    $('.p2').hide();
    setTimeout(function(){                           //intro text
    $('.p2').fadeIn('slow');  
    }, 17750);
})

$(document).ready(function() {
    $("#bossintro").animate({top: "-=0"}, 1800);        //ship movement
    $("#bossintro").animate({top: "-=500"}, 8250);
    $("#bossintro").animate({left: "-=2500"}, 1000);
    $("#p1intro").animate({top: "-=0"}, 10500);
    $("#p1intro").animate({left: "+=6000"}, 5000);
    $("#p2intro").animate({top: "-=0"}, 12000);
    $("#p2intro").animate({left: "-=6000"}, 5000); 
    $("#p3intro").animate({top: "-=0"}, 13750);         
    $("#p3intro").animate({left: "+=6000"}, 5000);
    $("#p4intro").animate({top: "-=0"}, 15000);
    $("#p4intro").animate({left: "-=6000"}, 5000);
    $("#player1").animate({top: "-=0"}, 2000);
    $("#player1").animate({left: "+=500"}, 4000);
    $("#player2").animate({top: "-=0"}, 2000);
    $("#player2").animate({left: "+=600"}, 4000);
});









});