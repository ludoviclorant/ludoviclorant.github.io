$(function() {

    var buttonMenu = $('.button-menu');
	var overlayMenu = $('.menu-overlay');
    var buttonTop = $('.button-top');

    $(window).on('scroll', function(){

	    if ($(this).scrollTop() > 100) {

	        buttonTop.fadeIn();

	    } else {

	        buttonTop.fadeOut();
	        
	    }

	});

	buttonMenu.on('click', function() {

		$(this).toggleClass('is-morphed');
		overlayMenu.toggleClass('is-opened');

	});

	buttonTop.on('click', function() {

		$('html, body').animate({scrollTop : 0}, 500);

	});

});