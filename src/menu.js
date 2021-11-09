// $(document).ready(function () {
// 	// abre o menu
// 	$('#menu').on('click', function () {
// 		$('.menu-mobile').slideToggle('fast')
// 	})

// 	// evento de scroll
// 	$(window).on('scroll', function () {
// 		// verifica se o menu ta visível
// 		if ($('.menu-mobile').is(':visible')) {
// 			$(window).scrollTop(0) // bloqueia o scroll
// 		}
// 	})
// })

$('#menu').on('click', function () {
	if ($('#menu').is(':checked')) {
		$('div').addClass('menu-mobile-active')
	} else {
		$('div').removeClass('menu-mobile-active')
	}
})
