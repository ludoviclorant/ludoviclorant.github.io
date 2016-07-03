$(function() {

    var menuButton = $('.menu-button');
	var menuOverlay = $('.menu-overlay');

	menuButton.on('click', function() {

		$(this).toggleClass('is-active');
		//menuOverlay.toggleClass('is-opened');

	});

});