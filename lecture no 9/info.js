$(document).ready(function(){
	$('#btn1').click(function(){
		$('#one').remove();
	});

	$('#btn2').click(function(){
		$('#one').empty();
	});

	$('#btn3').click(function(){
		$('p').detach();
	});
});