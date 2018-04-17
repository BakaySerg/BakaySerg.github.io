function showPage() {
  setTimeout(function(){
      document.body.classList.remove('js-loading');
      setTimeout(function(){
      $(".loader").fadeOut();
      },100);
  });

}
// document.body.classList.add('js-loading');


$(document).ready(function(){
  "use strict";

    // Ruffles
    var ww = $(window).width(),
        wh = $(window).height();
    //only desktop
    if ( ww > 1023) { 
      $('.s-project .col-sm-6,.s-advantage .col-xs-6,.gallery__box div').addClass("trnsl").viewportChecker({
        classToAdd: 'anim-play',
        offset: 50
      });
      $('.half-container > div').addClass("trnslx").viewportChecker({
        classToAdd: 'anim-play',
        offset: 100
      });
      $('.s-partnership .container').addClass("cliptrapez").viewportChecker({
        classToAdd: 'anim-play',
        offset: 320
      });
    };

  
    // Nav    
    $('a.top__link').on('click', function(event) {
      $('.navbar-toggle:visible').trigger('click');
    });

    //scroll to place
    $(".js-scroll-down").click(function() {
      $("html, body").animate({scrollTop: $($(this).closest('section').next('section')).offset().top + "px"}, {duration: 800});
      return false;
    });
    $(".js-scroll-up").click(function() {
      $("html, body").animate({scrollTop: 0}, {duration: 800});
      return false;
    });


    //slider
    // $('.slick-slider').slick({
    //   responsive:true,
    //   infinite: true,
    //   dots: false,
    //   speed:500,
    //   arrows: true,
    //   prevArrow: $('.prev'),
    //   nextArrow: $('.next'),
    //   slidesToShow: 3,
    //   slidesToScroll: 1,
    //   responsive: [{
    //     breakpoint: 800,
    //     settings: {
    //       draggable:false,
    //       slidesToShow: 2
    //     }        
    //   },{
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 1,
    //       centerMode:true,
    //       arrows: false,
    //       draggable:true,
    //       centerPadding:'80px'}
    //     },{
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       centerMode:true,
    //       arrows: false,
    //       draggable:true,
    //       centerPadding:'50px'
    //     }
    //   }]
    // });

    $("#intro-content-slider").slick({
        slidesToShow: 1,
        dots: true,
        customPaging: function(slider, i){return '<i><svg viewBox="0 0 32 32"><use xlink:href="#i-circle"/></svg></i>';},
        arrows: false,
        infinite: true,
        speed:800,
        fade: true,
        responsive: true,
        responsive: [{
            breakpoint: 2560,
            settings: {
                draggable: true,
            }
        }, {
            breakpoint: 640,
            settings: {
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
        centerMode: true,
        centerPadding: '160px',
        responsive: [{            
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToShow: 1,
          centerPadding: '40px'
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
        // fade: true,
        speed: 600,
        slidesToShow: 1,
      });
    };

    // Попап
    if ($('.js-popup').length){
      $('.js-popup').magnificPopup({
         type: 'inline',
         removalDelay: 300,
         fixedContentPos: true,
         fixedBgPos: true,
         mainClass: 'mfp-fade',
         closeOnBgClick: true,
         enableEscapeKey:true
      });
    };

    // VIDEO Заменить на свою ссылку после "/watch?v= ..."
    $('.js-popup-video').magnificPopup({
        items: {
            src: 'https://www.youtube.com/watch?v=0rq42Xe9Mv4'
        },
        type: 'iframe',
        mainClass: 'mfp-rotate-bottom'
    });

     
});
$(window).on('load', showPage);