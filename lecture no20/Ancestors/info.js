$(document).ready(function(){

	$('button').click(function(){
		$('li').parentsUntil('div').css({
							"color":"red",
							"border":"3px solid red",
		});
	});

});