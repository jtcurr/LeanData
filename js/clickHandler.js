//Default set the arrow to closed on page load
var open = false;
$(".arrow-button").click(function() {
	if(open) {
		$(".arrow-button").attr('src', 'Assets/Collapse_Arrow.png');
		open = false;
	} else {
		$(".arrow-button").attr('src', 'Assets/Expand_Arrow.png');
		open = true;
	}
})