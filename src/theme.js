$('#theme').click(function () {
	if ($('#theme').is(':checked')) {
		$('.dark').addClass('light').removeClass('dark')
	} else {
		$('.light').addClass('dark').removeClass('light')
	}
})

$('#theme').click(function () {
	if ($('#theme').is(':checked')) {
		$('.nlight').addClass('ndark').removeClass('nlight')
	} else {
		$('.ndark').addClass('nlight').removeClass('ndark')
	}
})

$('#theme-mobile').click(function () {
	if ($('#theme-mobile').is(':checked')) {
		$('.dark').addClass('light').removeClass('dark')
	} else {
		$('.light').addClass('dark').removeClass('light')
	}
})
