$(document).ready(function()
{

	$('.image').mouseenter(function()
	{		
		$(this).animate({height:'+=10px'});
	});

	$('.image').mouseleave(function()
	{
		
		$(this).animate({height:'-=10px'});
	});
	$(".image").click(function()
	{
		
		$("#cen").attr("src", $(this).attr("src"));      //To select other image on click ****very imp***
	});

	$("#Rarrow").click(function()
	{
		$('.image:first').before($('.image:last'));     //pseudo code for swaping
   });
	$("#Larrow").click(function()
	{
		$('.image:last').before($('.image:first'));    //swaping 
	});

});
