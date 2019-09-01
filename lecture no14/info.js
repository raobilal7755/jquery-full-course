$(document).ready(function(){

	$('#btn1').click(function(){
		$('p').replaceWith('<h2>i am replace wti</h2>');
	});

	$('#btn2').click(function(){
		$('<h2>i am replace All</h2>').replaceAll('p');
	});

});