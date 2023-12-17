/*global $, jQuery, console*/

$(function () {
    'use strict';
    
    // UPER-BAR Trigger Opening Hours Button.
    $('.open-btn').click(function () {
        $('.open-hour').animate({
            top: 0
        }, function () {
            $('.open-hour i.fa-times').click(function () {
                $('.open-hour').animate({
                    top: '-160px'
                });
            });
        });
    });
    
    // NAV OnClick Add Class Active To Navbar Link.
    $('.navbar-nav .nav-item').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    // HEADER Slider Height = Window Height.
    $('header .carousel-item img').height($(window).height() - ($('.navbar').innerHeight() + $('.upper-bar').innerHeight()) * 2);
    
    // Hide Placeholder On Focus & Restore On Blur.
    var backUp = '';
    $('[placeholder]').focus(function () {
        backUp = $(this).attr('placeholder');
        $(this).attr('placeholder', '');
    }).blur(function () {
        $(this).attr('placeholder', backUp);
    });
    
    // Show Message On Required Field.
    $('[required]').blur(function () {
        if ($(this).val() === '') {
            $('.error-message').slideDown().delay(3000).slideUp();
        }
    });
    
    // Trigger Nice Scroll.
    $("body, html").niceScroll({
        cursorcolor: "#5FA022",
        cursorwidth: "10px",
        cursorborder: "1px solid #5FA022",
        cursorborderradius: 0,
        zindex: 9
    });
    
    /*//style Trigger Owl Carousel().
    $('.index.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    */
    
    // Main Trigger Owl Carousel().
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
    //// Start About Us Page.
    // Triggers About-Us Taps.
    $('.taps li').click(function () {
        $(this).addClass('clicked').siblings().removeClass('clicked');
        $(".taps-content > div").hide();
        $($(this).data('tap')).fadeIn();
    });
    
    // Trigger Testimonials AutoSlider.
    (function autoSlider() {
        $('.own-slider .t-active').each(function () {
            if (!$(this).is(':last-child')) {
                $(this).delay(4000).fadeOut(1000, function () {
                    $(this).removeClass('t-active')
                        .next().addClass('t-active').fadeIn(1000);
                    autoSlider();
                });
            } else {
                $(this).delay(4000).fadeOut(1000, function () {
                    $(this).removeClass('t-active');
                    $('.own-slider .client-say').eq(0).addClass('t-active').fadeIn(1000);
                    autoSlider();
                });
            }
        });
    }());
    
    //// Start Menu Page.
    // Adjust Menu Taps
    $('.menu .menu-tap-link li').click(function () {
        $(this).addClass('choosed').siblings().removeClass('choosed');
        $(".menu-tap-content > div").hide();
        $($(this).data('mtap')).fadeIn();
        console.log($(this).data('mtap'));
    });
    

    
    
    
    
    
});