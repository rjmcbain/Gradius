console.log("hello");

// $(function(){
// 	var gamepiece = "player";
// 	$('#gameboard').append(player);

// 	$(document).keydown(function(e){

		
// 	})

// });

var keys = [];

$("html").keydown(function(event){

    if (keys.length > 2) return;
    keys.push (event.which);
    
    movePlayer();
});

function movePlayer () {
    var moveTo = keys[0];
    if(moveTo == "37") {
      $("#player1").stop(true).animate({"left" : "-=30px"});  		//player 1
    }																//movement

    if(moveTo == "39") {
      $("#player1").stop(true).animate({"left" : "+=30px"});
    }

    if(moveTo == "38") {
      $("#player1").stop(true).animate({"top" : "-=30px"});
    }

    if(moveTo == "40") {
            $("#player1").stop(true).animate({"top" : "+=30px"});
    }
    
     keys = keys.slice (1);

     
};

var keys = [];

$("html").keydown(function(event){

    if (keys.length > 2) return;
    keys.push (event.which);
    
    movePlayer2();
});

function movePlayer2 () {
    var moveTo = keys[0];
    if(moveTo == "65") {
      $("#player2").stop(true).animate({"left" : "-=30px"});
    }

    if(moveTo == "68") {
      $("#player2").stop(true).animate({"left" : "+=30px"});		//player 2
    }																//movement

    if(moveTo == "87") {
      $("#player2").stop(true).animate({"top" : "-=30px"});
    }

    if(moveTo == "83") {
      $("#player2").stop(true).animate({"top" : "+=30px"});
    }
    
     keys = keys.slice (1);

     
};


	$(function(){
		$('#hide').click(function(){
			$("button").slideToggle(200);
			$("#instructions").slideToggle(1500);
			$(".blue").slideToggle(2500);
		});
	});



// $('html, body').css({
//     overflow: 'hidden',				//disables scrolling
//     height: '100%'
// });

