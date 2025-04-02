if (("ontouchstart" in document.documentElement)) {
	document.documentElement.className += " no-touch";
}

$(function() {

	var buttonTop = $('.button-top');

    var html = $('html');

    $(window).on('scroll', function(){

	    if ($(this).scrollTop() > 100) {

	        buttonTop.fadeIn();

	    } else {

	        buttonTop.fadeOut();
	        
	    }

	});

	buttonTop.on('click', function() {

		html.animate({scrollTop : 0}, 500);

	});

	function scrollToAnchor(aid){
		var aTag = $("#"+ aid);
		$('html,body').animate({scrollTop: aTag.offset().top},'slow');
	}

	$("a[href='#work']").on( "click", function() {
		scrollToAnchor("work");
	} );

	$("a[href='#about']").on( "click", function() {
		scrollToAnchor("about");
	} );

	$("a[href='#hitmeup']").on( "click", function() {
		scrollToAnchor("hitmeup");
	} );

	$(".email").on( "click", function(e) {

		e.preventDefault();

		navigator.clipboard.writeText("lorant.ludovic@gmail.com");
		alert("Email has been copied to your clipboard!");

	} );

});