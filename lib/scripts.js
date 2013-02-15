$(document).ready(function() {

  //Options screen animation
  $(".footer-true").click(function () {
    $('#options').animate(
    { left: 0 }, // what we are animating
    {
      duration: 600, // how fast we are animating
    });
	$('.footer-false').fadeOut('fast');
  });
  
  $("#footer-back").click(function () {
	$('#options').animate(
    { left: '100%' }, // what we are animating
    {
      duration: 600, // how fast we are animating
    });
	$('.footer-false').fadeIn('slow');
  }) 
  
  
  //Footer button actions 
  $("#footer-add").click(function () {
	$('.options-add').fadeIn('fast')
	$('.options-about').fadeOut('fast')
  }) 
  
  $("#footer-about").click(function () {
	$('.options-add').fadeOut('fast')
	$('.options-about').fadeIn('fast')
  }) 
  


});

