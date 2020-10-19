

$(document).ready(function () {


	// $('.slider-one').slick();

	// $('.slider-nav').slick({
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// });

	$('.slider-one').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav',
		infinite: false,
		responsive: [
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 1,
				variableWidth: false,
				// centerMode: true,
				// asNavFor: false,
				// centerPadding: '25px',
				fade: false,
			  }
			}
		  ]
	});

	$('.slider-nav').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.slider-one',
		// centerMode: true,
		focusOnSelect: true,
		// centerPadding: '0px',
		infinite: false,
		initialSlide: 0,
		variableWidth: true,
		responsive: [
			{
			  breakpoint: 700,
			  settings: {
				slidesToShow: 3,
				variableWidth: false,
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 1,
				variableWidth: false,
			  }
			}
		  ]
	});



	$(document).ready(function() {
		$('.hover').on('touchstart touchend', function(e) {
			e.preventDefault();
			$(this).toggleClass('hover_effect');
		});
	});



})



