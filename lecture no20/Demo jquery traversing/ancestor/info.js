$(document).ready(function(){
	$('#btn1').click(function(){
		$('span').parentsUntil('div').css({
							"color":"red",
							"border":"4px solid red"
		});
	});
});