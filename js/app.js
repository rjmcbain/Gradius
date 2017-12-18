console.log("hello");

$("#boss").animate({top: "-=0"}, 7000);         //delays boss for 7 seconds
$("#boss2").animate({top: "-=0"}, 7000);        //waits for ships to enter
$("#boss3").animate({top: "-=0"}, 7000);        //delays boss for 7 seconds
$("#boss4").animate({top: "-=0"}, 7000);        //waits for ships to enter

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
    $('.countdownfade').fadeIn('slow');              //31 seconds countdown delay
    }, 31000);
    $('.countdown').hide();
    setTimeout(function(){                           //countdown timer
    $('.countdown').fadeIn('slow');    
    }, 6000);
})



function makeNewPosition(){
    
    var h = $(window).height() - 50;         //animates bosses at random
    var w = $(window).width() - 50;          //animates bosses at random
    
    var nh = (Math.random() * h);            //animates bosses at random
    var nw = (Math.random() * w);            //animates bosses at random
    
    return [nh,nw];    
    
}

function animateDiv(mydiv){
    var newPosition = makeNewPosition();      //animates bosses at random
    $(mydiv).animate({ top: newPosition[0],   //animates bosses at random
      left: newPosition[1] }, 750,            //animates bosses at random
  function(){ 
      animateDiv(mydiv);   
    });
    
};

$(document).ready(function(){
    animateDiv('#boss');                      //animates bosses at random
    animateDiv('#boss2');
    animateDiv('#boss3');                     //animates bosses at random
    animateDiv('#boss4');
});

  var doUpdate = function() {                 //30 second timer
    $('.countdown').each(function() {
      var count = parseInt($(this).html());   //30 second timer
      if (count !== 0) {
        $(this).html(count - 1);              //30 second timer
      }
    });
  };
  // Schedule the update to happen once every second
  setInterval(doUpdate, 1000);

  var doUpdateAgain = function() {            //5 second timer
    $('.countdownfade').each(function() {
      var count = parseInt($(this).html());   //5 second timer
      if (count !== 0) {
        $(this).html(count - 1);              //5 second timer
      }
    });
  };
  // Schedule the update to happen once every second
  setInterval(doUpdateAgain, 1000);

  var delay = 37000;                                                    //delay timer, sends to winner screen
setTimeout(function(){ window.location = 'winner.html'; }, delay);      //after 37 seconds

// Hit Detection
//Hit Detection
//Hit Detection

function getPositions(box) {
  var mybox = $(box);
  var pos = mybox.position();                     
  var width = mybox.width();                
  var height = mybox.height();
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
}

//Hit Detection
//Hit Detection
//Hit Detection

$(document).keydown(function(e) {
    switch (e.which) {
        case 37:
            $('#player1').finish().animate({        //player 1 controls
                left: "-=75"
            },checkCollisions);
            break;
        case 38:
            $('#player1').finish().animate({        //player 1 controls
                top: "-=75"
            },checkCollisions);
            break;
        case 39:
            $('#player1').finish().animate({        //player 1 controls
                left: "+=75"
            },checkCollisions);
            break;
        case 191:
            $('#player1').finish().animate({        //player 1 controls
                left: "-=100"                       //booster
            },checkCollisions);
            break;
        case 16:
            $('#player1').finish().animate({        //player 1 controls
                left: "+=125"                       //booster
            },checkCollisions);
            break;
        case 40:
            $('#player1').finish().animate({        //player 1 controls
                top: "+=75"
            },checkCollisions);
            break;            
    }

})

$(document).keydown(function(e) {
    switch (e.which) {
        case 65:
            $('#player2').finish().animate({      //player 2 controls
                left: "-=75"
            },-200,checkCollisions);
            break;
        case 87:
            $('#player2').finish().animate({      //player 2 controls
                top: "-=75"
            },-200,checkCollisions);
            break;
        case 68:
            $('#player2').finish().animate({      //player 2 controls
                left: "+=75"
            },-200,checkCollisions);
            break;
        case 81:
            $('#player2').finish().animate({      //player 2 controls 
                left: "-=100"                     //booster
            },-200,checkCollisions);
            break;
        case 70:
            $('#player2').finish().animate({      //player 2 controls
                left: "+=125"                     //booster
            },-200,checkCollisions);
            break;
        case 83:
            $('#player2').finish().animate({      //player 2 controls
                top: "+=75"
            },-200,checkCollisions);
            break;            
    }

})

$('html, body').css({
    overflow: 'hidden',       //disables scrolling
    height: '100%'            //disables scrolling
});

