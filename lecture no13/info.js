$(document).ready(function(){
	$('#btn1').click(function(){
		$('#ip').prop('color','red');
		$('#ip').append('the color property value is :'+ $('#ip').prop('color'));
	});

	$('#btn2').click(function(){
		$('#ip').removeProp('color');
		$('#ip').append('the color property value is :'+ $('#ip').prop('color'));
	});
});