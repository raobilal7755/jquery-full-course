$(document).ready(function(){

	$('#btn1').click(function(){
		$('ol').append('<li>append</li>');
	});

	$('#btn2').click(function(){
		$('<li>append to</li>').appendTo('ol');
	});

});