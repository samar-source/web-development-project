$(document).ready(function() {

	//Menu bar
	$('ul.menu a[href^="#"]').click(function() {
		var target = $(this).attr('href');

		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 800);

		$('ul.menu a[href^="#"]').css({'color':'#212121'});

		$(this).css({'color':'#00897b'});

		return false;
	});

	// Menu burger
	$('.menu-burger').click(function() {
		$('nav').slideToggle(500);
		$('.menu').css(
		{
			'display':'flex', 'flex-direction':'column'
		});
		if ($('.menu-burger').html() == '<i class="fas fa-bars"></i>')
			$(this).html('<i class="fas fa-times"></i>');
		else
			$(this).html('<i class="fas fa-bars"></i>');
	});

	//Portfolio
	$(".button[filter]").click(function() {
		if ($(this).attr("filter") && $(this).attr("filter") !== "all") {
			$(".filter > div*[filter !='" + $(this).attr('filter') + "']").hide(300);
			$(".filter > div*[filter ='" + $(this).attr('filter') + "']").show(300);
		} else {
			$(".filter > div").show(300);
		}
		$(".button[filter]").removeClass('focused');
		$(this).addClass('focused');
	});

	//Slick slider for section Team
	$('.multiple-items').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
		dots: true,
		dotsClass: 'dots-style',
		responsive: [{
			breakpoint: 1200,
			settings: {
			slidesToShow: 2,
			slidesToScroll: 2}
		},{
			breakpoint: 768,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1}
		}]
	});

	// To top
	$(window).scroll(function() {
		if ($(this).scrollTop() != 0)
			$('#to-top').fadeIn();
		else
			$('#to-top').fadeOut();
	});
	$('#to-top').click(function() {
		$('body, html').animate({
			scrollTop: 0}, 800);
	});
})
