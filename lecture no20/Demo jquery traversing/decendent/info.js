$(document).ready(function(){
	$('#btn1').click(function(){
		$('li').children().css({
							"color":"red",
							"border":"4px solid red"
		});
	});
});