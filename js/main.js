$(function() {

    var buttonMenu = $('.button-menu');
	var overlayMenu = $('.menu-overlay');
    var buttonTop = $('.button-top');

    var html = $('html');

    $(window).on('scroll', function(){

	    if ($(this).scrollTop() > 100) {

	        buttonTop.fadeIn();

	    } else {

	        buttonTop.fadeOut();
	        
	    }

	});

	var overlayCount = 0;
	var scrollPos = 0;

	function menuClassToggles() {

		buttonMenu.toggleClass('is-morphed');
		overlayMenu.toggleClass('is-opened');
		html.toggleClass('no-scroll');

	}

	buttonMenu.on('click', function() {

		overlayCount++;

		if(overlayCount % 2 !== 0) { //opened

			scrollPos = html.scrollTop();
			menuClassToggles();
			html.css('top', '-'+scrollPos+'px');

		}else{

			menuClassToggles();
			html.scrollTop(scrollPos);
			html.css('top', '0');

		}

	});

	buttonTop.on('click', function() {

		html.animate({scrollTop : 0}, 500);

	});

});