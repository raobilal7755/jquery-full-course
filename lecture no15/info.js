$(document).ready(function(){

	$('#btn1').click(function(){
		$('#one').before('<h1>i am before</h1>');
	});

	$('#btn2').click(function(){
		$('#one').after('<h1>i am after</h1>');
	});

});