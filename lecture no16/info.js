$(document).ready(function(){

	$('#btn1').click(function(){
		$('#one').prepend('<h1>i am prepend</h1>');
	});

	$('#btn2').click(function(){
		$('<h1>i am prepend to</h1>').prependTo('#one');
	});

});