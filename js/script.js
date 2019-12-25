// Filtering works in the portfolio by type
$(".button").click(function() {

	// Click the button with the desired attribute filter is not equal "all"
	if($(this).attr("filter") && $(this).attr("filter") !== "all"){

		// If the filter attribute of the pressed button is not equal to the 
		// filter attribute of the div, then the div smoothly disappears
		$(".filter > div*[filter !='"+$(this).attr('filter')+"']").hide(300);

		// If equal, then smoothly shown or remains visible
		$(".filter > div*[filter ='"+$(this).attr('filter')+"']").show(300);
		// Else, if is equal to "all", then the entire portfolio becomes visible
	}else{
		$(".filter > div").show(300);
	}
});