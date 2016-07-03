$(function() {

    var buttonMenu = $('.button-menu');
	var overlayMenu = $('.menu-overlay');
    var buttonTop = $('.button-top');
    var rootHtml = $('html');

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
		rootHtml.toggleClass('no-scroll');

	});

	buttonTop.on('click', function() {

		$('html, body').animate({scrollTop : 0}, 500);

	});

});