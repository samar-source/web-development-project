$(document).ready(function() {
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
});