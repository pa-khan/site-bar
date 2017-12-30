$(document).ready(function($) {

	$('.text_phone').mask('+7 (999) 999-99-99');
	
	var mobBtn = $('.mobile-btn'),
			nav = $('.panel__nav'),
			toggleStr = '_toggle'

	mobBtn.click(function(event) {
		$(this).toggleClass('mobile-btn' + toggleStr);
		nav.toggleClass('panel__nav' + toggleStr);
	});
	

});
