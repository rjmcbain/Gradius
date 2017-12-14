$( document ).ready(function() {
    console.log( "ready!" );


$(function(){
    $('#gameover').hide();
    setTimeout(function(){                           //intro text
    $('#gameover').fadeIn('slow');                   //intro text
    }, 500);
    setTimeout(function(){                           //intro text
    $('#gameover').fadeOut('slow');                  //intro text
	}, 4000);
})

$(function(){
    $('#winner').hide();
    setTimeout(function(){                           //intro text
    $('#winner').fadeIn('slow');                   //intro text
    }, 500);
    setTimeout(function(){                           //intro text
    $('#winner').fadeOut('slow');                  //intro text
    }, 4000);
})

$(function(){
    $('#thanks').hide();
    setTimeout(function(){                           //intro text
    $('#thanks').fadeIn('slow');                     //intro text
    }, 6000);
    setTimeout(function(){                           //intro text
    $('#thanks').fadeOut('slow');                    //intro text
	}, 8500);
})

$(function(){
    $('.fadeIn').hide();
    setTimeout(function(){                           //intro text
    $('.fadeIn').fadeIn('slow');                     //intro text
    }, 17750);
})

$(function(){
    $('.hard').hide();
    setTimeout(function(){                           //intro text
    $('.hard').fadeIn('slow');                       //intro text
    }, 31750);
})

$(function(){
    $('.hard1').hide();
    setTimeout(function(){                           //intro text
    $('.hard1').fadeIn('slow');                      //intro text
    }, 11750);
})

$(function(){
    $('.delayOut').show();
    setTimeout(function(){                           //intro text
    $('.delayOut').fadeOut('slow');                  //intro text
    }, 27750);
})

$(function(){
    $('.p1').hide();
    setTimeout(function(){                           //intro text
    $('.p1').fadeIn('slow');                         //intro text
    }, 17750);
})

$(function(){
    $('.p2').hide();
    setTimeout(function(){                           //intro text
    $('.p2').fadeIn('slow');                         //intro text
    }, 17750);
})

$(document).ready(function() {
    $("#bossintro").animate({top: "-=0"}, 1800);        //ship movement
    $("#bossintro").animate({top: "-=500"}, 8250);      //ship movement
    $("#bossintro").animate({left: "-=2500"}, 1000);    //ship movement
    $("#p1intro").animate({top: "-=0"}, 10500);         //ship movement
    $("#p1intro").animate({left: "+=6000"}, 5000);      //ship movement
    $("#p2intro").animate({top: "-=0"}, 12000);         //ship movement
    $("#p2intro").animate({left: "-=6000"}, 5000);      //ship movement
    $("#p3intro").animate({top: "-=0"}, 13750);         //ship movement
    $("#p3intro").animate({left: "+=6000"}, 5000);      //ship movement
    $("#p4intro").animate({top: "-=0"}, 15000);         //ship movement
    $("#p4intro").animate({left: "-=6000"}, 5000);      //ship movement
    $("#player1").animate({top: "-=0"}, 2000);          //ship movement
    $("#player1").animate({left: "+=500"}, 4000);       //ship movement
    $("#player2").animate({top: "-=0"}, 2000);          //ship movement
    $("#player2").animate({left: "+=600"}, 4000);       //ship movement
});

$('html, body').css({                               //disables scrolling
    overflow: 'hidden',                             //disables scrolling
    height: '100%'                                  //disables scrolling
});  

});