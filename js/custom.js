$(function(){
    
    "use strict";
    
    
    //==================Preloader Start==================
    
    $(window).on("load", function(){
       $(".preloader").delay(1500).fadeOut(800); 
    });
    
    //==================Preloader End==================

    
    // Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
    
    //==================Banner Down Arrow Start==================

    $('.down-btn').on("click", function () {
        var h = $('#banner').outerHeight();
        $('body,html').animate({
            scrollTop: h
        }, 1000);
    });

    //==================Banner Down Arrow End==================


    //==================Sticky Menu Start==================

    $(window).on("scroll", function () {
        var scrolling = $(this).scrollTop();
        if (scrolling >= 100) {
            $(".navbar").addClass("bg");
        } else {
            $(".navbar").removeClass("bg");
        }
    });

    //==================Sticky Menu End==================


    //==================Animated Scroll Start==================

    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 50
                }, 1500);
                return false;
            }
        }
    });

    //==================Animated Scroll End==================
    
    
    //========================Banner Slide JS Start==================

    $('.banner-slide').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: true,
        arrows: true,
        prevArrow: ".bleft",
        nextArrow: ".bright",
    });

    //==================Banner Slide JS End=========================


    //==================Counter JS Start==================

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //==================Counter JS End==================


    //==================Testimonial Slider Start==================

    $('.test-slide').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '.left',
        nextArrow: '.right',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });

    //==================Testimonial Slider End==================


    //==================Back To Top Button Start==================

    $(".back2top").on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 700);
    });
    $(window).on("scroll", function () {
        var scrolling = $(this).scrollTop();
        if (scrolling >= 300)
            $(".back2top").fadeIn(500);
        else
            $(".back2top").fadeOut(500);
    });

    //==================Back To Top Button End==================
    

    //==================Background Video JS Start========================= 

    jQuery(".player").YTPlayer();

    //==================Background Video JS End========================= 

    
    //==================Typed JS Start==================

    var typed = new Typed(".type", {
        strings: ["I'm an Web Designer", "Let's Work Together", "I Can Design Awesome Stuff"],
        typeSpeed: 65,
        backSpeed: 65,
        loop: true
    });

    //==================Typed JS End================== 
    
});
