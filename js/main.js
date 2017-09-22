function showPage() {
  setTimeout(function(){
      document.body.classList.remove('js-loading');
      setTimeout(function(){
      $(".loader").fadeOut();
      },500);
  });

}
document.body.classList.add('js-loading');


$(document).ready(function(){
  // "use strict";

    // Ruffles
    var ww = $(window).width(),
        wh = $(window).height();
    //only desktop
    if ( ww > 1023) { 
      $('.s-project .col-sm-6,.s-advantage .col-xs-6').addClass("trnsl").viewportChecker({
        classToAdd: 'trnslplay',
        offset: 50
      });
      $('.s-partnership .container').addClass("cliptrapez").viewportChecker({
        classToAdd: 'cliptrapezplay',
        offset: 320
      });


    };

    //counter statistic
    if ( $('.stats__list').length) {

       $('.stats__list .col-sm-4').addClass("trnsl").viewportChecker({
         classToAdd: 'trnslplay',
         offset: 120,
         callbackFunction: countStats
       });

       function countStats(){
         $('.trnslplay .stats__item .stats__counter').each(function() {
             var $this = $(this),
                 countTo = $this.attr('data-count');
             $({countNum: $this.text() }).animate({
                 countNum: countTo
             }, {
                 duration: 3000,
                 easing: 'linear',
                 step: function() {$this.text(Math.floor(this.countNum));},
                 complete: function() {$this.text(this.countNum);}
             });
         });
       };
    };
  
    // Nav    
    $('a.top__link').on('click', function(event) {
      $('.navbar-toggle:visible').trigger('click');
    });

    $('.top__country').on('focusout', function(){
      $(this).trigger('click');
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

    //audio
    var audio = $('#audio');
    $('.top__link,.top__country-box a,.is-load-doc,.btn-outline,.form__btn').mouseenter(function(e) {
      audio.children('audio')[0].pause();
      audio.children('audio')[0].currentTime = 0;
      audio.children('audio')[0].play();
      audio.children('audio').stop().animate({volume:1},100);
    });
    $('.top__link').mouseleave(function(e) {
      audio.children('audio').stop().animate({volume:0},100);
    });

    //advantes card
    if ($('.advantage__more').length) {
    $('.advantage__more').click(function(e){
      e.preventDefault();
      var c = $(this),
          p = $(this).parents('.col-md-3');
      p.toggleClass('extend');
      setTimeout(function(){
          p.siblings().removeClass('extend');
      },500);
    });}

    //slider
    $('.slick-slider').slick({
      responsive:true,
      infinite: true,
      dots: false,
      speed:500,
      arrows: true,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 800,
        settings: {
          draggable:false,
          slidesToShow: 2
        }        
      },{
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode:true,
          arrows: false,
          draggable:true,
          centerPadding:'80px'}
        },{
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode:true,
          arrows: false,
          draggable:true,
          centerPadding:'50px'
        }
      }]
    });

    // Попап
    if ($('.js-popup').length){
      $('.js-popup').magnificPopup({
         type: 'inline',
         removalDelay: 300,
         fixedContentPos: true,
         fixedBgPos: true,
         mainClass: 'mfp-fade',
         closeOnBgClick: true,
         enableEscapeKey:true,
         callbacks: {
           beforeOpen: function() { $('.wrapper').addClass('is-popup-open'); },
           close:function() { $('.wrapper').removeClass('is-popup-open'); }
         }
      });
    };

     
});
$(window).on('load', showPage);