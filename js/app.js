console.log("hello");

// $(function(){
//  var gamepiece = "player";
//  $('#gameboard').append(player);

//  $(document).keydown(function(e){

    
//  })

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


// $(document).ready(function() {
//     $("#boss").animate({top: "+=200"}, 5500);           //boss movement
//     $("#boss").animate({top: "-=400"}, 500);
//     $("#boss").animate({top: "+=100"}, 500);
//     $("#boss").animate({left: "-=450"}, 500);
//     $("#boss").animate({left: "+=450"}, 2000);
//     $("#boss").animate({left: "-=100"}, 750);
//     $("#boss").animate({top: "+=100"}, 750);
//     $("#boss").animate({top: "-=100"}, 750);
//     $("#boss").animate({top: "+=250"}, 500);
//     $("#boss").animate({top: "-=300"}, 500);           //boss movement
//     $("#boss").animate({top: "+=150"}, 500);
//     $("#boss").animate({left: "+=100"}, 500);
//     $("#boss").animate({top: "+=200"}, 750);
//     $("#boss").animate({top: "-=400"}, 400);
//     $("#boss").animate({top: "+=100"}, 700);
//     $("#boss").animate({left: "-=200"}, 700);
//     $("#boss").animate({left: "+=200"}, 800);
//     $("#boss").animate({left: "-=100"}, 2000);          //boss movement
//     $("#boss").animate({top: "+=100"}, 2000);
//     $("#boss").animate({top: "-=100"}, 1000);
//     $("#boss").animate({top: "+=250"}, 1500);
//     $("#boss").animate({top: "-=300"}, 2500);
//     $("#boss").animate({top: "+=150"}, 1500);
//     $("#boss").animate({left: "+=100"}, 1500);
//     $("#boss").animate({top: "+=200"}, 2000);
//     $("#boss").animate({top: "-=400"}, 1000);
//     $("#boss").animate({top: "+=100"}, 2000);
//     $("#boss").animate({left: "-=200"}, 2000);          //boss movement
//     $("#boss").animate({left: "+=200"}, 1500);
//     $("#boss").animate({left: "-=100"}, 3000);
//     $("#boss").animate({top: "+=100"}, 2000);
//     $("#boss").animate({top: "-=100"}, 1000);
//     $("#boss").animate({top: "+=250"}, 1500);
//     $("#boss").animate({top: "-=300"}, 2500);
//     $("#boss").animate({top: "+=150"}, 1500);
//     $("#boss").animate({left: "+=100"}, 1500);
//     $("#boss").animate({top: "+=200"}, 2000);
//     $("#boss").animate({top: "-=400"}, 1000);
//     $("#boss").animate({top: "+=100"}, 2000);
//     $("#boss").animate({left: "-=200"}, 2000);
//     $("#boss").animate({left: "+=200"}, 1500);
//     $("#boss").animate({left: "-=100"}, 3000);          //boss movement
//     $("#boss").animate({top: "+=100"}, 2000);
//     $("#boss").animate({top: "-=100"}, 1000);
//     $("#boss").animate({top: "+=250"}, 1500);
//     $("#boss").animate({top: "-=300"}, 2500);
//     $("#boss").animate({top: "+=150"}, 1500);
//     $("#boss").animate({left: "+=100"}, 1500);
// });

// $(document).ready(function(){
//     animateDiv();
//     animateDiv2();
    
// });

// function makeNewPosition(){
    
//     // Get viewport dimensions (remove the dimension of the div)
//     var h = $(window).height() - 50;
//     var w = $(window).width() - 1;
    
//     var nh = Math.floor(Math.random() * h);
//     var nw = Math.floor(Math.random() * w);
    
//     return [nh,nw];    
    
// }

// function animateDiv(){
//     var newq = makeNewPosition();
//     var oldq = $('#boss').offset();
//     var speed = calcSpeed([oldq.top, oldq.left], newq);
    
//     $('#boss').animate({ top: newq[0], left: newq[1] }, speed, function(){
//       animateDiv();        
//     });
    
// };

// function animateDiv2(){
//     var newq = makeNewPosition();
//     var oldq = $('#boss2').offset();
//     var speed = calcSpeed([oldq.top, oldq.left], newq);
    
//     $('#boss2').animate({ top: newq[0], left: newq[1] }, speed, function(){
//       animateDiv();        
//     });
    
// };

// function calcSpeed(prev, next) {
    
//     var x = Math.abs(prev[1] - next[1]);
//     var y = Math.abs(prev[0] - next[0]);
    
//     var greatest = x > y ? x : y;
    
//     var speedModifier = 0.5;

//     var speed = Math.ceil(greatest/speedModifier);

//     return speed;

// }

$(document).ready(function(){
    animateDiv('#boss');
    animateDiv('#boss2');
    animateDiv('#boss3');
    animateDiv('#boss4');
    animateDiv('#boss5');
    animateDiv('#boss6'); 
});

// $("#boss2").animate({top: "-=0"}, 7000);
// $("#boss3").animate({top: "-=0"}, 7000);
// $("#boss4").animate({top: "-=0"}, 7000);
// $("#boss5").animate({top: "-=0"}, 7000);
// $("#boss6").animate({top: "-=0"}, 7000);
function makeNewPosition(){
    
   
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 1;
    var w = $(window).width() - 1;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(mydiv){
    var newq = makeNewPosition();
    $(mydiv).animate({ top: newq[0], left: newq[1] }, 500,   function(){
      animateDiv(mydiv);   
    // setTimeout(animateDiv, 5000);
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

// $(document).ready(function() {
//     $("#bossintro").animate({top: "-=0"}, 1800);        //ship movement
//     $("#bossintro").animate({top: "-=500"}, 8250);
//     $("#bossintro").animate({left: "-=2500"}, 1000);
// });

// $(document).ready(function() {
//     $("#p1intro").animate({top: "-=0"}, 10500);
//     $("#p1intro").animate({left: "+=6000"}, 5000);      //ship movement
// });

// $(document).ready(function() {
//     $("#p2intro").animate({top: "-=0"}, 12000);
//     $("#p2intro").animate({left: "-=6000"}, 5000);      //ship movement
// });

// $(document).ready(function() {
//     $("#p3intro").animate({top: "-=0"}, 13750);         
//     $("#p3intro").animate({left: "+=6000"}, 5000);      //ship movement
// });

// $(document).ready(function() {
//     $("#p4intro").animate({top: "-=0"}, 15000);
//     $("#p4intro").animate({left: "-=6000"}, 5000);
// });

// $(document).ready(function() {
//     $("#player1").animate({top: "-=0"}, 2000);
//     $("#player1").animate({left: "+=500"}, 4000);
// });

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
  if (match) { 
   alert('Collision Detected!');
    }
}


// var keys = [];

// $("html").keydown(function(event){

//     if (keys.length > 2) return;
//     keys.push (event.which);
    
//     movePlayer();
// });

// function movePlayer () {
//     var moveTo = keys[0];
//     if(moveTo == "37") {
//       $("#player1").go(true).animate({"left" : "-=30px"});     //player 1
//     }                                //movement

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
            },checkCollisions);
            break;
        case 38:
            $('#player1').finish().animate({
                top: "-=30"
            },checkCollisions);
            break;
        case 39:
            $('#player1').finish().animate({
                left: "+=30"
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
                top: "+=30"
            },checkCollisions);
            break;            
    }

})

$(document).keydown(function(e) {
    switch (e.which) {
        case 65:
            $('#player2').finish().animate({
                left: "-=30"
            },-200,checkCollisions);
            break;
        case 87:
            $('#player2').finish().animate({
                top: "-=30"
            },-200,checkCollisions);
            break;
        case 68:
            $('#player2').finish().animate({
                left: "+=30"
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
                top: "+=30"
            },-200,checkCollisions);
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
//       $("#player2").stop(true).animate({"left" : "+=30px"});   //player 2
//     }                                //movement

//     if(moveTo == "87") {
//       $("#player2").stop(true).animate({"top" : "-=30px"});
//     }

//     if(moveTo == "83") {
//       $("#player2").stop(true).animate({"top" : "+=30px"});
//     }
    
//      keys = keys.slice (1);

     
// };


  // $(function(){
  //  $('#hide').click(function(){
  //    $("button").slideToggle(200);
  //    $("#instructions").slideToggle(1500);     Old Hide Button
  //    $(".blue").slideToggle(2500);       Replaced with Fade
  //  });
  // });



$('html, body').css({
    overflow: 'hidden',       //disables scrolling
    height: '100%'
});

