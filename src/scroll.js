var previousScroll = 0,
	headerOrgOffset = $('#brand').offset().top

$('#brand').height($('#brand').height())

$(window).scroll(function () {
	var currentScroll = $(this).scrollTop()
	console.log(
		currentScroll + ' and ' + previousScroll + ' and ' + headerOrgOffset
	)
	if (currentScroll > headerOrgOffset) {
		if (currentScroll > previousScroll) {
			$('#brand').fadeOut()
		} else {
			$('#brand').fadeIn()
			$('#brand').addClass('fixed')
		}
	} else {
		$('#brand').removeClass('fixed')
	}
	previousScroll = currentScroll
})
