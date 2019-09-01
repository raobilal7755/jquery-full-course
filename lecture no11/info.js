$(document).ready(function(){
	$('#btn1').click(function(){
		$('img').attr('width', '800');
	});


	$('#btn2').click(function(){
		$('p').removeAttr('style');
	});
});