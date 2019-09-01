$(document).ready(function(){

	$('button').click(function(){
		$('span').not('span#one').css({
							"color":"red",
							"border":"3px solid red",
		});
	});

});