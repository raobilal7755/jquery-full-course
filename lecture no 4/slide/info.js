$(document).ready(function(){
	$('#btn1').click(function(){
		$('img').slideUp(2000);
	});

	$('#btn2').click(function(){
		$('img').slideDown(2000);
	});

	$('#btn3').click(function(){
		$('img').slideToggle(2000);
	});
});