$(document).ready(function(){
	$('#btn1').click(function(){
		$('#child').animate({
							'height':'300px',
							'width':'300px',
							'border-width':'10px'
		},5000);
	});

	$('#btn2').click(function(){
		$('#child').animate({
							'height':'100px',
							'width':'100px',
							'border-width':'1px'
		},5000);
	});
});