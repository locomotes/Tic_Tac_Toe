
var playerturn = 0;

$('.one').click(function() {
    if($( ".one" ).hasClass("clicked")) {
        alert("choose another");
    } else if (playerturn % 2 != 0) {
        $('.one').append('<p>X</p>');
        $('.one').addClass('x');
        playerturn += 1;
            console.log(playerturn);
        $('.one').addClass('clicked');
    } else { 
        $('.one').append('<p>O</p>');
        $('.one').addClass('o');
        playerturn += 1;
            console.log(playerturn);
        $('.one').addClass('clicked');
    };
});

$('.two').click(function() {
    if($( ".two" ).hasClass("clicked")) {
        alert("choose another");
    } else if (playerturn % 2 != 0) {
        $('.two').append('<p>X</p>');
        $('.two').addClass('x');
        playerturn += 1;
            console.log(playerturn);
        $('.two').addClass('clicked');
    } else { 
        $('.two').append('<p>O</p>');
        $('.two').addClass('o');
        playerturn += 1;
            console.log(playerturn);
        $('.two').addClass('clicked');
    };
});

$('.three').click(function() {
    if($( ".three" ).hasClass("clicked")) {
        alert("choose another");
    } else if (playerturn % 2 != 0) {
        $('.three').append('<p>X</p>');
        $('.three').addClass('x');
        playerturn += 1;
            console.log(playerturn);
        $('.three').addClass('clicked');
    } else { 
        $('.three').append('<p>O</p>');
        $('.three').addClass('o');
        playerturn += 1;
            console.log(playerturn);
        $('.three').addClass('clicked');
    };
});

$('.four').click(function() {
    if($( ".four" ).hasClass("clicked")) {
        alert("choose another");
    } else if (playerturn % 2 != 0) {
        $('.four').append('<p>X</p>');
        $('.four').addClass('x');
        playerturn += 1;
            console.log(playerturn);
        $('.four').addClass('clicked');
    } else { 
        $('.four').append('<p>O</p>');
        $('.four').addClass('o');
        playerturn += 1;
            console.log(playerturn);
        $('.four').addClass('clicked');
    };
});

$('.five').click(function() {
    if($( ".five" ).hasClass("clicked")) {
        alert("choose another");
    } else if (playerturn % 2 != 0) {
        $('.five').append('<p>X</p>');
        $('.five').addClass('x');
        playerturn += 1;
            console.log(playerturn);
        $('.five').addClass('clicked');
    } else { 
        $('.five').append('<p>O</p>');
        $('.five').addClass('o');
        playerturn += 1;
            console.log(playerturn);
        $('.five').addClass('clicked');
    };
});

$('.six').click(function() {
    if($( ".six" ).hasClass("clicked")) {
        alert("choose another");
    } else if (playerturn % 2 != 0) {
        $('.six').append('<p>X</p>');
        $('.six').addClass('x');
        playerturn += 1;
            console.log(playerturn);
        $('.six').addClass('clicked');
    } else { 
        $('.six').append('<p>O</p>');
        $('.six').addClass('o');
        playerturn += 1;
            console.log(playerturn);
        $('.six').addClass('clicked');
    };
});


$('.seven').click(function() {
    if($( ".seven" ).hasClass("clicked")) {
        alert("choose another");
    } else if (playerturn % 2 != 0) {
        $('.seven').append('<p>X</p>');
        $('.seven').addClass('x');
        playerturn += 1;
            console.log(playerturn);
        $('.seven').addClass('clicked');
    } else { 
        $('.seven').append('<p>O</p>');
        $('.seven').addClass('o');
        playerturn += 1;
            console.log(playerturn);
        $('.seven').addClass('clicked');
    };
});

$('.eight').click(function() {
    if($( ".eight" ).hasClass("clicked")) {
        alert("choose another");
    } else if (playerturn % 2 != 0) {
        $('.eight').append('<p>X</p>');
        $('.eight').addClass('x');
        playerturn += 1;
            console.log(playerturn);
        $('.eight').addClass('clicked');
    } else { 
        $('.eight').append('<p>O</p>');
        $('.eight').addClass('o');
        playerturn += 1;
            console.log(playerturn);
        $('.eight').addClass('clicked');
    };
});

$('.nine').click(function() {
    if($( ".nine" ).hasClass("clicked")) {
        alert("choose another");
    } else if (playerturn % 2 != 0) {
        $('.nine').append('<p>X</p>');
        $('.nine').addClass('x');
        playerturn += 1;
            console.log(playerturn);
        $('.nine').addClass('clicked');
    } else { 
        $('.nine').append('<p>O</p>');
        $('.nine').addClass('o');
        playerturn += 1;
            console.log(playerturn);
        $('.nine').addClass('clicked');
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










































