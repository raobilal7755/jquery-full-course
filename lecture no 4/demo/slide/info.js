$(document).ready(function(){
	$('#btn1').click(function(){
		$('img').hide(2000);
	});

	$('#btn2').click(function(){
		$('img').show(2000);
	});

	$('#btn3').click(function(){
		$('img').toggle(2000);
	});
});