"use strict";

// Preloader page
jQuery(document).ready(function($) {
    $(window).on('load', function () {
        var $preloader = $('.preloader'),
            $loader = $preloader.find('.preloader__loader');
        $loader.fadeOut();
        $preloader.delay(1000).fadeOut(500);
    });
});
