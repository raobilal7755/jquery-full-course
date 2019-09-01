$(document).ready(function(){
	$('#btn1').click(function(){
		$('img').slideUp(2000);
	});

	$('#btn2').click(function(){
		$('img').slideDown(2000);
	});

	$('#btn3').click(function(){
		$('img').delay(3000).slideToggle(5000);
	});

	$('#btn4').click(function(){
		$('img').stop();
	});

	$('#btn5').click(function(){
		$('img').finish();
	});
});