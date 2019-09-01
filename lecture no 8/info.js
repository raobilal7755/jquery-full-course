$(document).ready(function(){
	$('#btn1').click(function(){
		$('p').addClass('one');
	});

	$('#btn2').click(function(){
		$('p').removeClass('one');
	});

	$('#btn3').click(function(){
		$('p').toggleClass('one');
	});
});