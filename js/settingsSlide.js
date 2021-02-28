$(document).ready(function(){
    $(".header_slider").owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        autoplayTimeout: 3000,
        dots: true,
        animateOut: 'fadeOut',
        checkVisibility: false,
        lazyLoad: true
    });

    $(".carousel_block").owlCarousel({
        items: 1,
        autoplay: false,
        loop: true,
        autoplayTimeout: 3000,
        dots: true
    });

    $(".services_carousel").owlCarousel({
        items: 1,
        autoplay: false,
        autoplayTimeout: 3000,
        loop: true,
        dots: false,
        nav: true
    });

    $(".blogSingle_slide").owlCarousel({
        items: 1,
        slideBy: 1,
        autoplay: false,
        autoplayTimeout: 3000,
        loop: true,
        dots: false,
        nav: true,
        responsive : {
            // breakpoint from 0 up
            800 : {
                items: 2,
                slideBy: 2,
                margin: 30
            }
        }
    });
  });