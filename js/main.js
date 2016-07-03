$(function() {

    var menuButton = $('#menu-button');
	var menuOverlay = $('#menu-overlay');

	menuButton.on('click', function() {

		$(this).toggleClass('is-morphed');
		menuOverlay.toggleClass('is-opened');

	});

});