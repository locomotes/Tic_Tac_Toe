
var playerturn = 0;
var veiwModel = {
	details: ko.observable()
};

$('.ttt').click(function() {
	playerturn += 1;
	console.log(playerturn);

	if (playerturn >= 9) {
	playerturn = 0;
	console.log("pturn reset");
	};

});

$('.one').click(function() {
	if (playerturn % 2 != 0) {
		veiwModel.details("<p>X</p>");
		console.log("odd");
	} else { 
		veiwModel.details("<p>O</p>");
		console.log('even');
	};
});

// var i = 2;
// if (i % 2 != 0) {
// 	console.log("odd");
// } else {
// 	console.log('even');
// }


for (var i = 10; i >= 0; i--) {
	console.log(i);
};