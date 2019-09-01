$(document).ready(function(){
	$('p').click(function(){
		$('p').slideToggle('slow');
	});

	$('button').click(function(){
		$('p').off();
	});
});