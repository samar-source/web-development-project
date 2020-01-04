$(document).ready(function() {
	
	/*Portfolio*/
	$(".button[filter]").click(function() {
		if ($(this).attr("filter") && $(this).attr("filter") !== "all") {
			$(".filter > div*[filter !='" + $(this).attr('filter') + "']").hide();
			$(".filter > div*[filter ='" + $(this).attr('filter') + "']").show();
		} else {
			$(".filter > div").show();
		}
		$(".button[filter]").removeClass('focused');
		$(this).addClass('focused');
	});

	// Slick slider for section Team
	$('.multiple-items').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
		dots: true,
		dotsClass: 'dots-style'
	});
});
