/*
	Alpha by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

const main = function ($) {

	var $window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
	breakpoints({
		wide: ('1281px', '1680px'),
		normal: ('981px', '1280px'),
		narrow: ('737px', '980px'),
		narrower: ('737px', '840px'),
		mobile: ('481px', '736px'),
		mobilep: (null, '480px')
	});

	// Play initial animations on page load.
	
	window.setTimeout(function () {
		$("#overlay").removeClass('is-preload');
	}, 100);
	

	// drdowns.
	$('#nav > ul').dropotron({
		alignment: 'right',
		speed: 300,
	});

	// NavPanel.

	// Button.
	$(
		'<div id="navButton">' +
		'<a href="#navPanel" class="toggle"></a>' +
		'</div>'
	)
		.appendTo($body);

	// Panel.
	$(
		'<div id="navPanel">' +
		'<nav>' +
		$('#nav').navList() +
		'</nav>' +
		'</div>'
	)
		.appendTo($body)
		.panel({
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'left',
			target: $body,
			visibleClass: 'navPanel-visible'
		});

	// Header.
	if (!browser.mobile
		&& $header.hasClass('alt')
		&& $banner.length > 0) {

		$window.on('load', function () {

			$banner.scrollex({
				bottom: $header.outerHeight(),
				terminate: function () { $header.removeClass('alt'); },
				enter: function () { $header.addClass('alt reveal'); },
				leave: function () { $header.removeClass('alt'); }
			});

		});

	}
	$("a[href='info.html']").click(function (event) {
		event.preventDefault()
		var $body = $("html, body");
		$body.stop().animate({ scrollTop: $("#main").offset().top }, 800, 'swing', function () {

		});
	})

	$(document).ready(() => {
		$(".language_selector a").click(function (event) {
			event.preventDefault();
			localStorage["language"] = $(this).attr("data-value")
			window.history.go(0)
		})
	})

}

window.onbeforeunload = ()=>{
    $("#overlay").addClass("is-preload");
}
// Google Analytic
$.ajax({
    url: 'https://www.googletagmanager.com/gtag/js?id=UA-87019455-2',
    dataType: 'script',
    success: function(){
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-87019455-2');
    }
});

