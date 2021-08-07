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

setTimeout(function(){
    let name
name = prompt("Какое у тебя официальное имя?")

if (name == "Михаил") {
 alert(" Ого ты знаешь свое официальное имя! Какой ты умный!") 
}   else if (name == "михаил") {
    alert("Имена пишутся с большой буквы, дурень!!")
}   else {
    alert("Ты забыл свое имя? Серьезно?!")
}

}, 1750);

