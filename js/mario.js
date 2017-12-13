$(document).keydown(function(e) {
    switch (e.which) {
        case 37:
            $('#mario').finish().animate({
                left: "-=30"
            });
            break;
        case 38:
            $('#mario').finish().animate({
                top: "-=30"
            });
            break;
        case 39:
            $('#mario').finish().animate({
                left: "+=30"
            });
            break;
        case 191:
            $('#mario').finish().animate({
                left: "-=100"
            });
            break;
        case 16:
            $('#mario').finish().animate({
                left: "+=125"
            });
            break;
        case 40:
            $('#mario').finish().animate({
                top: "+=30"
            });
            break;            
    }

})

$('html, body').css({
    overflow: 'hidden',             //disables scrolling
    height: '100%'
});