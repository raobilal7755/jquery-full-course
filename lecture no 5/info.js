$(document).ready(function(){
	$('button').click(function(){
		$('img').css('border', '10px solid red').slideUp(3000).slideDown(3000).fadeOut(3000).fadeIn(3000);
	});
});