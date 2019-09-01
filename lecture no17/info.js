$(document).ready(function(){

	$('#btn1').click(function(){
		alert('the value of scroll Left is : '+ $('#one').scrollLeft()+'px');
	});

	$('#btn2').click(function(){
		alert('the value of scroll top is : '+ $('#one').scrollTop()+'px');
	});

});