console.log("hello");

// $(function(){
// 	var gamepiece = "player";
// 	$('#gameboard').append(player);

// 	$(document).keydown(function(e){

		
// 	})

// });

setTimeout (function(){
	$('#fade').fadeOut('slow');                      //intro text
}, 6000);   

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
    }, 28750);
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
    $("#boss").animate({top: "+=200"}, 2000);           //boss movement
    $("#boss").animate({top: "-=400"}, 1000);
    $("#boss").animate({top: "+=100"}, 2000);
    $("#boss").animate({left: "-=200"}, 2000);
    $("#boss").animate({left: "+=200"}, 1500);
    $("#boss").animate({left: "-=100"}, 3000);
    $("#boss").animate({top: "+=100"}, 2000);
    $("#boss").animate({top: "-=100"}, 1000);
    $("#boss").animate({top: "+=250"}, 1500);
    $("#boss").animate({top: "-=300"}, 2500);           //boss movement
    $("#boss").animate({top: "+=150"}, 1500);
    $("#boss").animate({left: "+=100"}, 1500);
     $("#boss").animate({top: "+=200"}, 2000);
    $("#boss").animate({top: "-=400"}, 1000);
    $("#boss").animate({top: "+=100"}, 2000);
    $("#boss").animate({left: "-=200"}, 2000);
    $("#boss").animate({left: "+=200"}, 1500);
    $("#boss").animate({left: "-=100"}, 3000);          //boss movement
    $("#boss").animate({top: "+=100"}, 2000);
    $("#boss").animate({top: "-=100"}, 1000);
    $("#boss").animate({top: "+=250"}, 1500);
    $("#boss").animate({top: "-=300"}, 2500);
    $("#boss").animate({top: "+=150"}, 1500);
    $("#boss").animate({left: "+=100"}, 1500);
     $("#boss").animate({top: "+=200"}, 2000);
    $("#boss").animate({top: "-=400"}, 1000);
    $("#boss").animate({top: "+=100"}, 2000);
    $("#boss").animate({left: "-=200"}, 2000);          //boss movement
    $("#boss").animate({left: "+=200"}, 1500);
    $("#boss").animate({left: "-=100"}, 3000);
    $("#boss").animate({top: "+=100"}, 2000);
    $("#boss").animate({top: "-=100"}, 1000);
    $("#boss").animate({top: "+=250"}, 1500);
    $("#boss").animate({top: "-=300"}, 2500);
    $("#boss").animate({top: "+=150"}, 1500);
    $("#boss").animate({left: "+=100"}, 1500);
     $("#boss").animate({top: "+=200"}, 2000);
    $("#boss").animate({top: "-=400"}, 1000);
    $("#boss").animate({top: "+=100"}, 2000);
    $("#boss").animate({left: "-=200"}, 2000);
    $("#boss").animate({left: "+=200"}, 1500);
    $("#boss").animate({left: "-=100"}, 3000);          //boss movement
    $("#boss").animate({top: "+=100"}, 2000);
    $("#boss").animate({top: "-=100"}, 1000);
    $("#boss").animate({top: "+=250"}, 1500);
    $("#boss").animate({top: "-=300"}, 2500);
    $("#boss").animate({top: "+=150"}, 1500);
    $("#boss").animate({left: "+=100"}, 1500);
});

$(document).ready(function() {
    $("#bossintro").animate({top: "-=0"}, 1800);        //ship movement
    $("#bossintro").animate({top: "-=500"}, 8250);
    $("#bossintro").animate({left: "-=2500"}, 1000);
});

$(document).ready(function() {
    $("#p1intro").animate({top: "-=0"}, 10500);
    $("#p1intro").animate({left: "+=6000"}, 5000);      //ship movement
});

$(document).ready(function() {
    $("#p2intro").animate({top: "-=0"}, 12000);
    $("#p2intro").animate({left: "-=6000"}, 5000);      //ship movement
});

$(document).ready(function() {
    $("#p3intro").animate({top: "-=0"}, 13750);         
    $("#p3intro").animate({left: "+=6000"}, 5000);      //ship movement
});

$(document).ready(function() {
    $("#p4intro").animate({top: "-=0"}, 15000);
    $("#p4intro").animate({left: "-=6000"}, 5000);
});


// var keys = [];

// $("html").keydown(function(event){

//     if (keys.length > 2) return;
//     keys.push (event.which);
    
//     movePlayer();
// });

// function movePlayer () {
//     var moveTo = keys[0];
//     if(moveTo == "37") {
//       $("#player1").go(true).animate({"left" : "-=30px"});  		//player 1
//     }																//movement

//     if(moveTo == "39") {
//       $("#player1").go(true).animate({"left" : "+=30px"});
//     }

//     if(moveTo == "38") {
//       $("#player1").go(true).animate({"top" : "-=30px"});
//     }

//     if(moveTo == "40") {
//             $("#player1").go(true).animate({"top" : "+=30px"});
//     }
    
//      keys = keys.slice (1);

     
// };

$(document).keydown(function(e) {
    switch (e.which) {
        case 37:
            $('#player1').finish().animate({
                left: "-=30"
            });
            break;
        case 38:
            $('#player1').finish().animate({
                top: "-=30"
            });
            break;
        case 39:
            $('#player1').finish().animate({
                left: "+=30"
            });
            break;
        case 191:
            $('#player1').finish().animate({
                left: "-=100"
            });
            break;
        case 16:
            $('#player1').finish().animate({
                left: "+=125"
            });
            break;
        case 40:
            $('#player1').finish().animate({
                top: "+=30"
            });
            break;            
    }

})

$(document).keydown(function(e) {
    switch (e.which) {
        case 65:
            $('#player2').finish().animate({
                left: "-=30"
            });
            break;
        case 87:
            $('#player2').finish().animate({
                top: "-=30"
            });
            break;
        case 68:
            $('#player2').finish().animate({
                left: "+=30"
            });
            break;
        case 81:
            $('#player2').finish().animate({
                left: "-=100"
            });
            break;
        case 70:
            $('#player2').finish().animate({
                left: "+=125"
            });
            break;
        case 83:
            $('#player2').finish().animate({
                top: "+=30"
            });
            break;            
    }

})

// var keys = [];

// $("html").keydown(function(event){

//     if (keys.length > 2) return;
//     keys.push (event.which);
    
//     movePlayer2();
// });

// function movePlayer2 () {
//     var moveTo = keys[0];
//     if(moveTo == "65") {
//       $("#player2").stop(true).animate({"left" : "-=30px"});
//     }

//     if(moveTo == "68") {
//       $("#player2").stop(true).animate({"left" : "+=30px"});		//player 2
//     }																//movement

//     if(moveTo == "87") {
//       $("#player2").stop(true).animate({"top" : "-=30px"});
//     }

//     if(moveTo == "83") {
//       $("#player2").stop(true).animate({"top" : "+=30px"});
//     }
    
//      keys = keys.slice (1);

     
// };


	// $(function(){
	// 	$('#hide').click(function(){
	// 		$("button").slideToggle(200);
	// 		$("#instructions").slideToggle(1500); 		Old Hide Button
	// 		$(".blue").slideToggle(2500);				Replaced with Fade
	// 	});
	// });



$('html, body').css({
    overflow: 'hidden',				//disables scrolling
    height: '100%'
});

