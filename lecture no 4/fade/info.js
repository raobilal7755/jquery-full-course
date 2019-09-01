$(document).ready(function(){

	$('#btn1').click(function(){
		$('img').fadeOut(2000);
	});

	$('#btn2').click(function(){
		$('img').fadeIn(2000);
	});

	$('#btn3').click(function(){
		$('img').fadeToggle(2000);
	});

	$('#btn4').click(function(){
		$('img').fadeTo(2000,0.2);
	});
});