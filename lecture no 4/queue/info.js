$(document).ready(function(){
	$('#btn1').click(function(){
		$('#child').animate({'height':'300px'},5000);
		$('#child').animate({'width':'500px'},5000);
		$('#child').animate({'padding':'50px'},5000);
		$('#child').animate({'border-width':'10px'},5000);
		$('#child').animate({'border-radius':'100%'},5000);

		$('span').text($('#child').queue().length);
	});
});