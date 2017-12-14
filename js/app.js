console.log("hello");
$(document).ready(function(){
    animateDiv('#boss');
    animateDiv('#boss2');
    animateDiv('#boss3');
    animateDiv('#boss4');
});

$("#boss").animate({top: "-=0"}, 7000);         //delays boss for 7 seconds
$("#boss2").animate({top: "-=0"}, 7000);        //waits for ships to enter
$("#boss3").animate({top: "-=0"}, 7000);        
$("#boss4").animate({top: "-=0"}, 7000);

$(document).ready(function() {
    $("#player1").animate({top: "-=0"}, 2000);    //ships stand still
    $("#player1").animate({left: "+=400"}, 4000); //off screen for 2 seconds
    $("#player2").animate({top: "-=0"}, 2000);    //ships enter from off screen
    $("#player2").animate({left: "+=500"}, 4000); 
});

setTimeout (function(){
  $('#fade').fadeOut('slow');                      //intro text
}, 6000); 

$(function(){
    $('.countdownfade').hide();                      //hides countdown
    setTimeout(function(){                           //intro text
    $('.countdownfade').fadeIn('slow');             
    }, 31000);
    $('.countdown').hide();
    setTimeout(function(){                           //intro text
    $('.countdown').fadeIn('slow');    
    }, 6000);
})



function makeNewPosition(){
    
    var h = $(window).height() - 50;         //animates bosses at random
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(mydiv){
    var newPosition = makeNewPosition();
    $(mydiv).animate({ top: newPosition[0], left: newPosition[1] }, 750,   
  function(){
      animateDiv(mydiv);   
    });
    
};

  var doUpdate = function() {
    $('.countdown').each(function() {
      var count = parseInt($(this).html());
      if (count !== 0) {
        $(this).html(count - 1);
      }
    });
  };
  // Schedule the update to happen once every second
  setInterval(doUpdate, 1000);

  var doUpdateAgain = function() {
    $('.countdownfade').each(function() {
      var count = parseInt($(this).html());
      if (count !== 0) {
        $(this).html(count - 1);
      }
    });
  };
  // Schedule the update to happen once every second
  setInterval(doUpdateAgain, 1000);

  var delay = 37000; 
setTimeout(function(){ window.location = 'winner.html'; }, delay);

function getPositions(box) {
  var $box = $(box);
  var pos = $box.position();
  var width = $box.width();
  var height = $box.height();
  return [ [ pos.left, pos.left + width ], [ pos.top, pos.top + height ] ];
}
        
function comparePositions(p1, p2) {
  var x1 = p1[0] < p2[0] ? p1 : p2;
  var x2 = p1[0] < p2[0] ? p2 : p1;
  return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
}

function checkCollisions(){
  var box = $("#boss")[0];
  var pos = getPositions(box);

  var pos2 = getPositions(this);
  var horizontalMatch = comparePositions(pos[0], pos2[0]);
  var verticalMatch = comparePositions(pos[1], pos2[1]);            
  var match = horizontalMatch && verticalMatch;
   if (match) { window.location = ("credits.html"); }
  // if (match) { 
  //  alert('<p><a id= "gameover" href="credits.html">GAME OVER</a>');
  
  //   }
}

//player 1 controls
//player 1 controls
//player 1 controls
$(document).keydown(function(e) {
    switch (e.which) {
        case 37:
            $('#player1').finish().animate({
                left: "-=75"
            },checkCollisions);
            break;
        case 38:
            $('#player1').finish().animate({
                top: "-=75"
            },checkCollisions);
            break;
        case 39:
            $('#player1').finish().animate({
                left: "+=75"
            },checkCollisions);
            break;
        case 191:
            $('#player1').finish().animate({
                left: "-=100"
            },checkCollisions);
            break;
        case 16:
            $('#player1').finish().animate({
                left: "+=125"
            },checkCollisions);
            break;
        case 40:
            $('#player1').finish().animate({
                top: "+=75"
            },checkCollisions);
            break;            
    }

})
//player 2 controls
//player 2 controls
//player 2 controls
$(document).keydown(function(e) {
    switch (e.which) {
        case 65:
            $('#player2').finish().animate({
                left: "-=75"
            },-200,checkCollisions);
            break;
        case 87:
            $('#player2').finish().animate({
                top: "-=75"
            },-200,checkCollisions);
            break;
        case 68:
            $('#player2').finish().animate({
                left: "+=75"
            },-200,checkCollisions);
            break;
        case 81:
            $('#player2').finish().animate({
                left: "-=100"
            },-200,checkCollisions);
            break;
        case 70:
            $('#player2').finish().animate({
                left: "+=125"
            },-200,checkCollisions);
            break;
        case 83:
            $('#player2').finish().animate({
                top: "+=75"
            },-200,checkCollisions);
            break;            
    }

})

$('html, body').css({
    overflow: 'hidden',       //disables scrolling
    height: '100%'            //disables scrolling
});

