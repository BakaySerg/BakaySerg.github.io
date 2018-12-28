jQuery.noConflict();
jQuery( document ).ready(function( $ ) {
  // "use strict";

    jQuery("img, a").on("dragstart", function(event) { event.preventDefault();});

    // Nav
    jQuery('a.top__link').on('click', function(event) {
      jQuery('.navbar-toggle:visible').trigger('click');
    });

    //scroll to place
    jQuery(function() {
      jQuery('.js-scroll-up').hide();
      jQuery(window).on('scroll', function() {
        if((parseInt(jQuery(window).scrollTop(), 10) > 200)) {
         jQuery('.js-scroll-up').fadeIn(400);
       }
       else {
         jQuery('.js-scroll-up').fadeOut(400);
       }
     });
      jQuery('.js-scroll-up').click(function(){
        jQuery("html, body").stop().animate({scrollTop: 0}, {duration: 800});
        return false;
      });
    });
    onscroll = function(){
      var scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );

      if(window.scrollY >= scrollHeight - innerHeight - 40) {
        jQuery('.js-scroll-up').addClass('scroll-complete');
      }
      else {
        jQuery('.js-scroll-up').removeClass('scroll-complete');
      }
    };
    //scroll to place
    jQuery(".js-scroll-down").click(function() {
      jQuery("html, body").animate({scrollTop: jQuery(jQuery(this).closest('section').next('section')).offset().top + "px"}, {duration: 700});
      return false;
    });

    // intro-slider
    if (jQuery(".intro__slider").length) {
      const introSlider = jQuery('.intro__slider');
      introSlider.slick({
        responsive:true,
        infinite:false,
        dots: false,
        arrows: true,
        prevArrow: jQuery('.intro__slider-prev button'),
        nextArrow: jQuery('.intro__slider-next button'),
        speed:100,
        fade: true,
        // draggable:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.intro__nav',
        responsive: [{
          breakpoint: 767,
          settings: {
            draggable:true,
            speed:200,
            adaptiveHeight: true
          }
        }]
      });
      jQuery('.intro__nav').slick({
        slidesToShow: 8,
        infinite:false,
        speed:100,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.intro__slider',
        arrows: false,
        dots: false,
        focusOnSelect: true
      });

      var slides = jQuery(".intro__slider .slick-track > .slick-slide").length;
      jQuery('.intro__slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        var inFocus = jQuery('.intro__slider .slick-current').attr('data-slick-index');
        jQuery('.intro__nav .slick-current').removeClass('slick-current');
        jQuery('.intro__nav .slick-slide[data-slick-index="' + inFocus + '"]').trigger('click');
      });

      jQuery('.intro__slider-action .slide-amount').html( introSlider.slick("getSlick").slideCount);
      introSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        jQuery('.intro__slider-action .slide-current').html(i);
      });
    };

    // promo-slider
    if (jQuery(".promo__slider").length) {
      const promoSlider = jQuery('.promo__slider');
      promoSlider.slick({
        responsive:true,
        infinite: false,
        dots: true,
        dotsClass: "promo-dots",
        arrows: true,
        prevArrow: jQuery('.promo__slider-prev button'),
        nextArrow: jQuery('.promo__slider-next button'),
        adaptiveHeight: true,
        speed:600,
        slidesToShow: 1
      });

      jQuery('.promo__slider-action .slide-amount').html( promoSlider.slick("getSlick").slideCount);
      promoSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        jQuery('.promo__slider-action .slide-current').html(i);
      });
    };

    // equipment-slider
    if (jQuery(".equipment__slider-pict").length) {
      const equipmentSlider = jQuery('.equipment__slider-pict');
      equipmentSlider.slick({
        responsive:true,
        infinite: false,
        dots: false,
        fade: true,
        arrows: false,
        speed:100,
        slidesToShow: 1
      });
      jQuery('.equipment__slider-brand div').click(function() {
          const current = jQuery(this).index();
          equipmentSlider.slick('slickGoTo', current);
          jQuery(this).addClass('active').siblings('div').removeClass('active');
      });
    };

    // about equipment-slider
    if (jQuery(".about-equipment__slider").length) {
      const equipmentSlider = jQuery('.about-equipment__slider');
      equipmentSlider.slick({
        responsive:true,
        infinite: true,
        dots: false,
        arrows: true,
        prevArrow: '<i class="slick-arrow slick-prev"><svg viewBox="0 0 32 32"><use xlink:href="#i-left"/></svg></i>',
        nextArrow: '<i class="slick-arrow slick-next"><svg viewBox="0 0 32 32"><use xlink:href="#i-right"/></svg></i>',
        speed:600,
        focusOnSelect: true,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '32%',
        responsive: [{
            breakpoint: 969,
            fade: true,
            settings: {
               draggable:true,
               centerPadding: '130px'
            }
        }, {
            breakpoint: 640,
            settings: {
               centerPadding: '60px',
            }
        }, {
            breakpoint: 480,
            settings: {
               centerPadding: '30px',
            }
        }]
      });
    };

    //spec__slider
    if (jQuery(".spec__slider").length) {
      jQuery('.spec__slider').slick({
        responsive:true,
        infinite: false,
        dots: true,
        fade: true,
        arrows: false,
        speed:100,
        slidesToShow: 1
      });
    };

    //we-first__slider
    if (jQuery(".we-first__slider").length) {
      jQuery('.we-first__slider').slick({
        responsive:true,
        infinite: false,
        dots: true,
        arrows: false,
        speed:600,
        slidesToShow: 1
      });
    };

    // testimon__slider
    if (jQuery(".testimon__slider").length) {
      const promoSlider = jQuery('.testimon__slider');
      promoSlider.slick({
        responsive:true,
        infinite: false,
        dots: false,
        arrows: true,
        prevArrow: jQuery('.testimon__slider-prev button'),
        nextArrow: jQuery('.testimon__slider-next button'),
        adaptiveHeight: true,
        speed:600,
        draggable:false,
        vertical: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        responsive: [{
            breakpoint: 801,
            settings: {
               draggable:true,
               vertical: false,
               dots: true,
               arrows: false
            }
        }]
      });

      jQuery('.testimon__slider-action .slide-amount').html( promoSlider.slick("getSlick").slideCount);
      promoSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        jQuery('.testimon__slider-action .slide-current').html(i);
      });
    };

    // new Cocoen(document.querySelector('.before-after'));
    document.querySelectorAll('.cocoen').forEach(function(element){
      new Cocoen(element);
    });    

    //popup
    jQuery('.js-popup').magnificPopup({
        type: 'inline',
        removalDelay: 200,
        fixedContentPos: true,
        fixedBgPos: true,
        mainClass: 'mfp-fade',
        closeBtnInside: true,
        enableEscapeKey: true,
        closeOnBgClick: true
    });

    //js-popup-feedback
    jQuery('.js-popup-feedback').magnificPopup({
        type: 'inline',
        removalDelay: 200,
        fixedContentPos: true,
        fixedBgPos: true,
        mainClass: 'mfp-in-right',
        closeBtnInside: true,
        enableEscapeKey: true,
        closeOnBgClick: true
    });

    //about__bg-slider
    if (jQuery(".about__bg-slider").length) {
      jQuery('.about__bg-slider').slick({
        responsive:true,
        infinite: true,
        dots: false,
        arrows: false,
        responsive: true,
        fade: true,
        speed:700,
        asNavFor: '.about__thumb-slider',
        slidesToShow: 1
      });

      // about__thumb-slider
      const aboutSlider = jQuery('.about__thumb-slider');
      aboutSlider.slick({
        responsive:true,
        infinite: true,
        dots: false,
        arrows: true,
        asNavFor: '.about__bg-slider',
        prevArrow: jQuery('.about__slider-prev button'),
        nextArrow: jQuery('.about__slider-next button'),
        fade: true,
        speed:80,
        slidesToShow: 1
      });
      jQuery('.about__slider-action .slide-amount').html( aboutSlider.slick("getSlick").slideCount);
      aboutSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        jQuery('.about__slider-action .slide-current').html(i);
      });
      jQuery('.about__thumb-slider .slick-slide').on('click', function() {
        aboutSlider.slick("slickNext");
      });
    };
    
    
});