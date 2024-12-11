$(document).ready(function(){

     $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

$(window).on('load scroll', function() {
    $('.fa-bars').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    // Scroll position check
    if ($(window).scrollTop() > 35) {
        // হেডারের ব্যাকগ্রাউন্ড এবং শ্যাডো পরিবর্তন
        $('.header').css({'background': '#002e5f', 'box-shadow': '0 .2rem .5rem rgba(0,0,0,.4)'});
        
        // লিঙ্কের কালার পরিবর্তন
        $('.header .navbar ul li a').css('color', '#ffffff');  // কালার পরিবর্তন করুন (যেমন সাদা)
    } else {
        // হেডারের ব্যাকগ্রাউন্ড এবং শ্যাডো পুনরুদ্ধার
        $('.header').css({'background': '#fff', 'box-shadow': 'none'});
        
        // লিঙ্কের কালার পরিবর্তন
        $('.header .navbar ul li a').css('color', '#000000');  // কালার পরিবর্তন করুন (যেমন কালো)
    }
});

    const counters = document.querySelectorAll('.counter');
    const speed = 120;
    counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;
		const inc = target / speed;
		if (count < target) {
			counter.innerText = count + inc;
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};
	  updateCount();
   });

   (function ($) {
    "use strict";
    
    $(".clients-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: {items: 2}, 768: {items: 4}, 900: {items: 6} }
    });

    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: {items: 1}, 576: {items: 2}, 768: {items: 3}, 992: {items: 4} }
    });
    
})(jQuery);

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
});

$('.accordion-header').click(function(){
    $('.accordion .accordion-body').slideUp(500);
    $(this).next('.accordion-body').slideDown(500);
    $('.accordion .accordion-header span').text('+');
    $(this).children('span').text('-');
});

});


$(window).on('scroll', function() {
    // যখন h1 এলিমেন্ট স্ক্রল করে দর্শনীয় হয়
    $('.animate-text').each(function() {
        var elementTop = $(this).offset().top;
        var windowHeight = $(window).scrollTop() + $(window).height();

        if (windowHeight > elementTop) {
            $(this).addClass('visible');

            // লেটার বাই লেটার অ্যানিমেশন
            var text = $(this).text();
            var wrappedText = '';

            // প্রতিটি লেটারকে span দিয়ে ঘিরে দেওয়া
            for (var i = 0; i < text.length; i++) {
                wrappedText += '<span>' + text[i] + '</span>';
            }

            $(this).html(wrappedText);

            // অ্যানিমেশন শুরু
            $(this).find('span').each(function(index) {
                $(this).css('transition-delay', index * 0.1 + 's'); // প্রতিটি লেটারের জন্য বিলম্বিত অ্যানিমেশন
            });
        }
    });
});
