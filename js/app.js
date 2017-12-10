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
      $("#player").stop(true).animate({"left" : "-=30px"});
    }

    if(moveTo == "39") {
      $("#player").stop(true).animate({"left" : "+=30px"});
    }

    if(moveTo == "38") {
      $("#player").stop(true).animate({"top" : "-=30px"});
    }

    if(moveTo == "40") {
            $("#player").stop(true).animate({"top" : "+=30px"});
    }
    
     keys = keys.slice (1);

     
};

	$(function(){
		$('#hide').click(function(){
			$("button").hide();
		});
	});

 