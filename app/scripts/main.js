
var playerturn = 0;

$('.one, .two, .three, .four, .five, .six, .seven, .eight, .nine').click(function() {
    console.log("clicked");
    if($(this).hasClass("clicked")) {
        alert("choose another");
    } else if (playerturn % 2 != 0) {
        $(this).append('<p>X</p>');
        $(this).addClass('x');
        playerturn += 1;
            console.log(playerturn);
        $(this).addClass('clicked');
    } else { 
        $(this).append('<p>O</p>');
        $(this).addClass('o');
        playerturn += 1;
            console.log(playerturn);
        $(this).addClass('clicked');
    };

});


$('.reset').click(function() {
    $('.one').removeClass('clicked');
    $('.one').removeClass('x');
    $('.one').removeClass('o');
    $('.two').removeClass('clicked');
    $('.two').removeClass('x');
    $('.two').removeClass('o');
    $('.three').removeClass('clicked');
    $('.three').removeClass('x');
    $('.three').removeClass('o');
    $('.four').removeClass('clicked');
    $('.four').removeClass('x');
    $('.four').removeClass('o');
    $('.five').removeClass('clicked');
    $('.five').removeClass('x');
    $('.five').removeClass('o');
    $('.six').removeClass('clicked');
    $('.six').removeClass('x');
    $('.six').removeClass('o');
    $('.seven').removeClass('clicked');
    $('.seven').removeClass('x');
    $('.seven').removeClass('o');
    $('.eight').removeClass('clicked');
    $('.eight').removeClass('x');
    $('.eight').removeClass('o');
    $('.nine').removeClass('clicked');
    $('.nine').removeClass('x');
    $('.nine').removeClass('o');

    $('p').remove();
    playerturn = 0;
});

$('.ttt').click(function() {
    if(
        // testing for x's horizontally
        $(".one").hasClass("x") && $(".two").hasClass("x") && $(".three").hasClass("x") ||
        $(".four").hasClass("x") && $(".five").hasClass("x") && $(".six").hasClass("x") ||
        $(".seven").hasClass("x") && $(".eight").hasClass("x") && $(".nine").hasClass("x") ||
        // testing for x's vertically
        $(".one").hasClass("x") && $(".four").hasClass("x") && $(".seven").hasClass("x") ||
        $(".two").hasClass("x") && $(".five").hasClass("x") && $(".eight").hasClass("x") ||
        $(".three").hasClass("x") && $(".six").hasClass("x") && $(".nine").hasClass("x") ||
        // testing for x's diagonally
        $(".one").hasClass("x") && $(".five").hasClass("x") && $(".nine").hasClass("x") ||
        $(".three").hasClass("x") && $(".five").hasClass("x") && $(".seven").hasClass("x") 
        ) {
        alert("x wins!!");
    };
});

$('.ttt').click(function() {
    if(
        // testing for o's horizontally
        $(".one").hasClass("o") && $(".two").hasClass("o") && $(".three").hasClass("o") ||
        $(".four").hasClass("o") && $(".five").hasClass("o") && $(".six").hasClass("o") ||
        $(".seven").hasClass("o") && $(".eight").hasClass("o") && $(".nine").hasClass("o") ||
        // testing for o's vertically
        $(".one").hasClass("o") && $(".four").hasClass("o") && $(".seven").hasClass("o") ||
        $(".two").hasClass("o") && $(".five").hasClass("o") && $(".eight").hasClass("o") ||
        $(".three").hasClass("o") && $(".six").hasClass("o") && $(".nine").hasClass("o") ||
        // testing for o's diagonally
        $(".one").hasClass("o") && $(".five").hasClass("o") && $(".nine").hasClass("o") ||
        $(".three").hasClass("o") && $(".five").hasClass("o") && $(".seven").hasClass("o") 
        ) {
        alert("o wins!!");
    };
});










































