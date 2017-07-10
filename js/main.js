function showPage() {
  $(".loader_inner").fadeOut();
  $(".loader").delay(400).hide();
  setTimeout(document.body.classList.remove('js-loading'), 6000);  
}
document.body.classList.add('js-loading');

window.addEventListener("load", showPage, false);


$(document).ready(function(){
    "use strict";
    var ww = $(window).width(),
        wh = $(window).height();

    if ( ww > 1023) {
      $('.about__brand').addClass("clip2").viewportChecker({
        classToAdd: 'clipplay2',
        offset: 60
      });
    }
    // $('.types__card').addClass("clip").viewportChecker({
    //   classToAdd: 'clipplay',
    //   offset: 0
    // });

    $('.about__adv-item,.salon__adv-item,.salon__content-box,.types__card,.s-brand .col-md-3').addClass("trnsl").viewportChecker({
      classToAdd: 'trnslplay'
    }); 
    
        // var i = 1;
        // $('section').each(function(){
        //     $(this).attr('id','slide_'+i);
        //     i++;
        // });    
  
    // Nav    
    $('a.top__link,.submenu__item a').on('click', function(event) {
      $('.navbar-toggle:visible').trigger('click');
    });

    $(".js-scroll-page").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 1000,
         easing: "easeOutExpo"
      });
      return false;
    });

    //intro-slider
    var sync1 = $("#intro-slider__img"),
        sync2 = $("#intro-slider__text"),
        syncedSecondary = true;

    sync2.on('click', '.owl-next', function () {
        sync1.trigger('next.owl.carousel')
    });
    sync2.on('click', '.owl-prev', function () {
        sync1.trigger('prev.owl.carousel')
    });

    sync1.owlCarousel({
        items: 1,
        loop: true,
        smartSpeed:1000,
        margin:60,
        lazyLoad:true,        
        mouseDrag: false,
        touchDrag: false,
        dots: false,
        nav: false,
        animateOut: 'fadeOut',
        autoplay:true, 
        autoplayTimeout:5000,
        navText: ""
    }).on('changed.owl.carousel', syncPosition);

    sync2.owlCarousel({
        items : 1,
        dots: true,
        mouseDrag: false,
        touchDrag: false,
        nav: false,
        // animateIn: "clipplay",
        animateOut: "fxSoftScaleOutNext",
        navText: "",
        responsive: {
            0: {
                touchDrag: true,
                margin:0
            },
            390: {
                touchDrag: false,              
                margin:30
            }
        }
    }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
      //if you set loop to false, you have to restore this next line
      //var current = el.item.index;
      
      //if you disable loop you have to comment this block
      var count = el.item.count-1;
      var current = Math.round(el.item.index - (el.item.count/2) - .5);
      
      if(current < 0) {
        current = count;
      }
      if(current > count) {
        current = 0;
      }      

      sync2
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
      var onscreen = sync2.find('.owl-item.active').length - 1;
      var start = sync2.find('.owl-item.active').first().index();
      var end = sync2.find('.owl-item.active').last().index();
      
      if (current > end) {
        sync2.data('owl.carousel').to(current, 100, true);
      }
      if (current < start) {
        sync2.data('owl.carousel').to(current - onscreen, 100, true);
      }
    };
    
    function syncPosition2(el) {
      if(syncedSecondary) {
        var number = el.item.index;
        sync1.data('owl.carousel').to(number, 100, true);
      }
    };

    //parallax
     if ($('[data-type="background"]').length && ww > 1200) {
        var $window = $(window);
          $('[data-type="background"]').each(function(){ 
              var $bgobj = $(this);
          
              $(window).scroll(function() {
                 var yPos = (($window.scrollTop() + 500) / $bgobj.data('speed')); 
                  
                  var coords = '50% '+ yPos + '%';
                  $bgobj.css({ backgroundPosition: coords });
              }); 
          });
    }

   //Services slider
   (function () {
     var $frame = $('#services-sly');
     var $wrap  = $frame.parent();
     // Call Sly on frame
     $frame.sly({
       horizontal: 1,
       itemNav: 'forceCentered',
       smart: 1,
       activateMiddle: 1,
       activateOn: 'click',
       mouseDragging: 1,
       touchDragging: 1,
       releaseSwing: 1,
       startAt: 1,
       scrollBy: 1,
       speed: 800,
       elasticBounds: 1,
       easing: 'easeOutExpo',
       dragHandle: 1,
       dynamicHandle: 1,
       clickBar: 1,
       pagesBar: $frame.parent().find('.gallery-paginator'),
       activatePageOn: 'click',
       // Buttons
       prev: $wrap.find('.prev'),
       next: $wrap.find('.next')
     });
   }());

   //Product slider
   (function () {
     var $frame = $('#product-sly');
     var $wrap  = $frame.parent();
     $frame.sly({
       horizontal: 1,
       itemNav: 'forceCentered',
       smart: 1,
       activateMiddle: 1,
       activateOn: 'click',
       mouseDragging: 1,
       touchDragging: 1,
       releaseSwing: 1,
       startAt: 1,
       scrollBar: $wrap.find('.scrollbar'),
       scrollBy: 1,
       speed: 800,
       elasticBounds: 1,
       easing: 'easeOutExpo',
       dragHandle: 1,
       dynamicHandle: 1,
       clickBar: 1,
       activatePageOn: 'click',
     });
   }());

   //карточки
   if ($('.types__card').length) {
   $('.types__card').click(function(){
      var card = $(this);
      $(this).find('.flip').toggleClass('flipped');
      setTimeout(function(){
          card.siblings().find('.flip').removeClass('flipped');
      },500);
   });}

   //Mask
   $(".phone").mask("+7 (999) 999-99-99");

   // Попап
   if ($('.js-popup').length){
    $('.js-popup').magnificPopup({
        type: 'inline',
        removalDelay: 300,
        fixedContentPos: true,
        fixedBgPos: true,
        mainClass: 'mfp-rotate-bottom',
        closeOnBgClick: true,
        enableEscapeKey:true,
        callbacks: {
          beforeOpen: function() {
            $('.wrapper').addClass('is-popup-open');
          },
          close:function() {
            $('.wrapper').removeClass('is-popup-open');
          }
        }   
    });
   };
   
     
});
