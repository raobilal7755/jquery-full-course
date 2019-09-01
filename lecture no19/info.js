$(document).ready(function(){
	$('button').click(function(){
		$('body').append($('p:first').clone(true));
	});

	$('p').click(function(){
		$(this).css({'background-color':'purple','color':'yellow'}).fadeOut(5000).fadeIn(5000);
	});
});