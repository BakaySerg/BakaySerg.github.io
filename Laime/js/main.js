function showPage() {
  setTimeout(function(){
      document.body.classList.remove('js-loading');
      setTimeout(function(){
      jQuery(".loader").fadeOut();
      },100);
  });

}
// document.body.classList.add('js-loading');


jQuery(document).ready(function($){
  // "use strict";

    (function($, window, undefined) {
      if(/iP/.test(navigator.platform) && /Safari/i.test(navigator.userAgent)){
        var mobileSafari = "Safari";
      }     
      function safariDetection() {
        if (typeof mobileSafari === 'string'){ $('body').addClass("is-safari") };
      };
      safariDetection();
     
    }(jQuery, this));    


    // Ruffles
    var ww = $(window).width();
    //only desktop
    if ( ww > 1025) { 
      $('.s-product,.s-awards').addClass("enter-y").viewportChecker({
        classToAdd: 'anim-play',
        offset: 60
      });
      $('.s-brand .is-brand').addClass("cliptrapez").viewportChecker({
        classToAdd: 'anim-play',
        offset: 200
      });
      $('.s-brand .text-center').addClass("enter--x").viewportChecker({
        classToAdd: 'anim-play',
        offset: 200
      });
      $('.s-brand .is-type-text,.brand__video').addClass("enter-x").viewportChecker({
        classToAdd: 'anim-play',
        offset: 200
      });
      $('.category__container').addClass("before-anim").viewportChecker({
        classToAdd: 'anim-play'
      });
      $('.category__container').addClass("before-anim").viewportChecker({
        classToAdd: 'anim-play'
      });
      $('#s-footer').viewportChecker({
        classToAdd: 'in-viewport',
        repeat: true
      });
    };
  
    //top
    $('.navbar-toggle').click(function() {
      $('#top').toggleClass('open');
    });
    // Nav    
    $('a.top__link').on('click', function(event) {
      $('.navbar-toggle:visible').trigger('click');
    });
    //scroll to place
    $(".footer__up").click(function() {
      $("html, body").stop().animate({scrollTop: 0}, {duration: 800});
      return false;
    });

    //* up  anchor*/
    $(function() {
      $('.js-scroll-up').hide();
      $(window).on('scroll', function() {
        if((parseInt($(window).scrollTop(), 10) > 200)) {
         $('.js-scroll-up').fadeIn(400);
       }
       else {
         $('.js-scroll-up').fadeOut(400);
       }
     });
      $('.js-scroll-up').click(function(){
        $("html, body").stop().animate({scrollTop: 0}, {duration: 800});
        return false;
      });
    });

    //scroll to target
    $(".js-scroll-target").click(function(e) {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top - 5
      }, {
         duration: 800,
         easing: "swing"
      });
      e.preventDefault();
    });

    //intro-slider
    $("#intro-content-slider").slick({
        slidesToShow: 1,
        dots: true,
        customPaging: function(slider, i){return '<i><svg viewBox="0 0 32 32"><use xlink:href="#i-circle"/></svg></i>';},
        arrows: false,
        infinite: true,
        speed:800,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5200,
        pauseOnHover:false,
        responsive: true,
        responsive: [{
            breakpoint: 2566,
            settings: {
                draggable: true,
            }
        }, {
            breakpoint: 640,
            settings: {
                draggable: true
            }
        }, {
            breakpoint: 380,
            settings: {
                autoplay:false,
                draggable: true
            }
        }],
        asNavFor: '#intro-bg-slider'
    });
    $('#intro-bg-slider').slick({
        asNavFor: '#intro-content-slider',
        slidesToShow: 1,
        dots: false,
        speed:800,
        arrows: false,
        fade: true,
        draggable: false        
    });

    //product-slider
    if ($("#product-slider").length) {
      $("#product-slider").slick({
        dots: false,
        arrows: true,
        prevArrow: '<i class="slick-arrow slick-prev"><svg viewBox="0 0 32 32"><use xlink:href="#i-left"/></svg></i>',
        nextArrow: '<i class="slick-arrow slick-next"><svg viewBox="0 0 32 32"><use xlink:href="#i-right"/></svg></i>',
        infinite: true,
        speed: 600,
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: !0,
        centerMode: true,
        centerPadding: '160px',
        responsive: [{
            breakpoint: 2566,
            settings: {
                slidesToShow: 5,
                centerMode: true,
                centerPadding: '10px'
            }
        }, {
            breakpoint: 1922,
            settings: {
                slidesToShow: 3,
                centerPadding: '160px'
            }
        }, {
            breakpoint: 1281,
            settings: {
                slidesToShow: 3,
                centerPadding: '90px'
            }
        }, {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                centerPadding: '50px'
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                centerPadding: '0px'
            }
        }, {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
                slidesToShow: 1,
                arrows: false,
                centerPadding: '70px'
            }
        }, {
            breakpoint: 420,
            settings: {
                slidesToShow: 1,
                slidesToShow: 1,
                arrows: false,
                centerPadding: '30px'
            }
        }]
      });
    };

    //awards__slider
    if ($("#awards-slider").length) {
      $("#awards-slider").slick({
        dots: false,
        arrows: true,
        prevArrow: '<i class="slick-arrow slick-prev"><svg viewBox="0 0 32 32"><use xlink:href="#i-left"/></svg></i>',
        nextArrow: '<i class="slick-arrow slick-next"><svg viewBox="0 0 32 32"><use xlink:href="#i-right"/></svg></i>',
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        responsive: true,
        responsive: [{
            breakpoint: 380,
            settings: {
                infinite: false,
                speed: 500,
                draggable: true
            }
        }]
      });
    };

    // item-slider
    if ($("#item-slider").length) {
      $("#item-slider").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
          infinite: true,
          fade: true,
          speed: 600,
          slidesToShow: 1,
          lazyLoad: 'ondemand',
          responsive: true,
          responsive: [{
              breakpoint: 2560,
              fade: true,
              settings: {
                  draggable: false,
              }
          }, {
              breakpoint: 640,
              settings: {
                  fade: false,
                  draggable: true
              }
          }],
          asNavFor: '#item-slider-thumb'
      });
      $('#item-slider-thumb').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          asNavFor: '#item-slider',
          dots: false,
          arrows: false,
          speed: 600,
          centerMode: true,
          centerPadding: '0px',
          focusOnSelect: true
      });
    }
    // Попап
    if ($('.js-popup').length){
      $('.js-popup').magnificPopup({
         type: 'inline',
         removalDelay: 300,
         fixedContentPos: true,
         fixedBgPos: true,
         mainClass: 'mfp-rotate-bottom',
         closeOnBgClick: true,
         enableEscapeKey:true
      });
    };

    //input
    $('.form input,.form textarea').focusin(function(event) {
      $(this).addClass('focused');
    }).focusout(function(event) {
      if($(this).val() == '' || $(this).val() == '+7 (___) ___-____'){$(this).removeClass('focused')}
    });
    //mask
    $("[type=tel]").mask("+7 (999) 999-9999");

    //form
    $(".form").submit(function(event) {
      var _data = $(this).serialize() + '&action=' + 'make_sending';
      event.preventDefault();
      $.ajax({
        type: 'POST',
        url: MaAjax.ajaxurl,
        data: _data,
        success: function(){  
          $.magnificPopup.open({
            items: {
              src: MaAjax.form_success,
              type: 'inline',
              mainClass: 'mfp-rotate-bottom'
            }
          });
          setTimeout(function(){$.magnificPopup.close()},3300);
        },
        error: function() {
          $.magnificPopup.open({
            items: {
              src: MaAjax.form_error,
              type: 'inline',
              mainClass: 'mfp-rotate-bottom'
            }
          });
          setTimeout(function(){$.magnificPopup.close()},3300);
        }
      }).done(function() {
        $(".form").trigger("reset");
      });
      return false;
    });

    // VIDEO Заменить на свою ссылку после "/watch?v= ..."
    // $('.js-popup-video').magnificPopup({
    //     items: {
    //         src: 'https://www.youtube.com/watch?v=0rq42Xe9Mv4'
    //     },
    //     type: 'iframe',
    //     mainClass: 'mfp-fade'
    // });
     
});
jQuery(window).on('load', showPage);