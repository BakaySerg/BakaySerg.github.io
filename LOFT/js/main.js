$(document).ready(function(){
  // "use strict";

    // Ruffles
    var ww = $(window).width();

    //only desktop
    if ( ww > 310) { 
      $('.ty-d, .tx-l, .tx-r').viewportChecker({
        classToAdd: 'anim-tranform',
        offset: 120
      });
      $('.cl-l').viewportChecker({
        classToAdd: 'anim-clippath',
        offset: 130
      });
    };
  
    // Nav
    $('a.top__link').on('click', function(event) {
      $('.navbar-toggle:visible').trigger('click');
    });

    // top-show
    function sticky(){
      $(window).scroll(function() {
        var winTop = $(window).scrollTop();
        $('.navbar-collapse').collapse('hide');

          if(winTop >= 25){
           $("#top").addClass("not-up");
         } else {
           $("#top").removeClass("not-up");
         }
       });
    }
    sticky();

    // scroll to place
    $(".js-scroll-down").click(function() {
      $("html, body").animate({scrollTop: $($(this).closest('section').next('section')).offset().top - 70 +"px"}, {duration: 800});
      return false;
    });

    //anhors
    $(".nav__link").on('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 850, 'swing')
      event.preventDefault();
    });

    // slider
    const slider = $('.gallery__slider');
    slider.slick({
      responsive:true,
      infinite: true,
      dots: false,
      speed:80,
      fade:true,
      arrows: true,
      prevArrow: $('.gallery__prev'),
      nextArrow: $('.gallery__next'),
      slidesToShow: 1
    });
    changeSlide();
    slider.on('afterChange', changeSlide);

    function changeSlide(){
      const current = $('.gallery__slider .slick-current');
      var prevImg = current.prev().find('img').attr('src') || current.siblings('[data-slick-index]:last').find('img').attr('src');
      var nextImg = current.next().find('img').attr('src') || current.siblings('[data-slick-index]:first').find('img').attr('src');
      const btnPrev = $('.gallery__prev');
      const btnNext = $('.gallery__next');
      btnPrev.addClass('clip'); setTimeout(function(){ btnPrev.css('background-image', 'url(' + prevImg + ')')},500);
      btnNext.addClass('clip'); setTimeout(function(){ btnNext.css('background-image', 'url(' + nextImg + ')')},500);
      setTimeout(function(){$('.gallery__prev, .gallery__next').removeClass('clip')},980);
    };

    /// gallery
    $('.popup-gallery').each(function() {
      $(this).magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Загрузка...',
        mainClass: 'mfp-zoom-in',
        removalDelay: 355,
        fixedContentPos: true,
        fixedBgPos: true,
        autoFocusLast:true,
        midClick: true,
        gallery: {
          enabled: true,
          tCounter: '%curr% — %total%',
          navigateByImgClick: true
        },
        image: {
          tError: '<a href="%url%">Изображение #%curr%</a> не загружается.',
          titleSrc: function(item) {return item.el.attr('title');}
        },
        callbacks: {
          open: function() {
              $.magnificPopup.instance.next = function() {
                  var self = this;
                  self.wrap.removeClass('mfp-image-loaded');
                  setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
              }
              $.magnificPopup.instance.prev = function() {
                  var self = this;
                  self.wrap.removeClass('mfp-image-loaded');
                  setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
              }
          },
          imageLoadComplete: function() { 
              var self = this;
              setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
          }
        }
      });
    });

    // popup-gmaps"
    $('.popup-gmaps').magnificPopup({
        type: 'iframe',
        removalDelay: 310,
        mainClass: 'mfp-rotate-bottom'
    });

    // variants (tabs)
    $(".variants__slider").slick({
        arrows: false,
        speed:500,
        fade: true,
        responsive: true,
        draggable:false,
        responsive: [{
          breakpoint: 575,
          settings: {adaptiveHeight:true}
        }]
    });
    $('.tab-menu li').click(function(e) {
        e.preventDefault();
        const current = $(this),
              currentIndex = current.index();
        $('.variants__slider').slick('slickGoTo', currentIndex);
        current.addClass('active').siblings().removeClass('active');
    });     
});