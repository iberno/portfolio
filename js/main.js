$(document).ready(function(){
	var $toggle = $('#nav-toggle');
  	var $menu = $('#nav-menu');
	$toggle.click(function(){
		$(this).toggleClass("is-active");
		$menu.toggleClass("is-active");
	});
	$(".animsition").animsition({
	    inClass: 'fade-in-right-sm',
	    outClass: 'fade-out-right-sm',
	    inDuration: 1500,
	    outDuration: 800,
	    linkElement: '.animsition-link',
	    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
	    loading: true,
	    loadingParentElement: 'main', //animsition wrapper element
	    loadingClass: 'animsition-loading',
	    loadingInner: '', // e.g '<img src="loading.svg" />'
	    timeout: false,
	    timeoutCountdown: 5000,
	    onLoadEvent: true,
	    browser: [ 'animation-duration', '-webkit-animation-duration'],
	    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
	    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
	    overlay : false,
	    overlayClass : 'animsition-overlay-slide',
	    overlayParentElement : 'section',
	    transition: function(url){ window.location.href = url; }
  	});
});
