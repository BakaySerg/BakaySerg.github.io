function showPage() {
  setTimeout(function(){
      document.body.classList.remove('js-loading');
      setTimeout(function(){
      $(".loader").delay(500).fadeOut();
      },800);
  });

}
document.body.classList.add('js-loading');

window.addEventListener("load", showPage, false);

$(document).ready(function(){
  "use strict";

    // Ruffles
    var ww = $(window).width();
    //only desktop
    if ( ww > 1270) {
      $('.has-double-title').viewportChecker({
        classToAdd: 'play',
        offset: 10
      });
      $('.abou').addClass("clip2").viewportChecker({
        classToAdd: 'clipplay2',
        offset: 110
      }); 
      $('.about__slider,.col-md-pull-right,.lines__slider,.news__item').addClass("trnsl").viewportChecker({
        classToAdd: 'trnslplay',
        offset:60
      }); 
    }
    $('.supply__countries,.product__tab-content').addClass("clip").viewportChecker({
      classToAdd: 'clipplay',
      offset: 100
    });
  
    // Nav    
    $('a.top__link').on('click', function(event) {
      $('.navbar-toggle:visible').trigger('click');
    });

    $('.navbar-toggle:visible').click(function(event) {
      $('body').toggleClass('menu-opened');
    });

    $(".js-scroll-page").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 800,
         easing: "swing"
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
        mouseDrag: false,
        touchDrag: false,
        margin:170,
        dots: true,
        nav: true,
        navText: "",
        stopOnHover:true,
        autoplay:true, 
        autoplayTimeout:5000,
        autoplaySpeed: 600,
        onInitialized: function () {
          var i = 1;
          $('#intro-slider__img .owl-dot>span').each(function () {
            $(this).text(i);
            i++;
          });
          var dotQuantity = $('#intro-slider__img .owl-dot>span').length;
          $('#intro-slider__img .owl-dots').append('/' +dotQuantity);         
        }//,
        // onChanged:function () {
        //     var compliMorph1;
        //     var compliMorph2;
        //     var motph = $('.intro-slider__img-box');
        //     motph.toggleClass('morphchange');
        //     if (motph.hasClass('morphchange')) {
        //       compliMorph1 = KUTE.to('#wobble-1', { path:'#wobble-2'}, { morphPrecision: 10, morphIndex: 10, duration: 3000, repeat: 0, yoyo: false, easing: 'easingCubicOut'}).start();
        //     }
        //     else {compliMorph2 = KUTE.to('#wobble-1', { path:'#wobble-4'}, { morphPrecision: 10, morphIndex: 10, duration: 3000, repeat: 0, yoyo: false, easing: 'easingCubicOut'}).start();}
        // }
    }).on('changed.owl.carousel', syncPosition);

    sync2.owlCarousel({
        items : 1,
        dots: false,
        nav: false,
        margin:60,
        mouseDrag: false,
        touchDrag: false,
        animateIn: "fxSoftScaleInNext",
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
      var count = el.item.count-1;
      var current = Math.round(el.item.index - (el.item.count/2) - .5);      
      if(current < 0) {current = count;}
      if(current > count) {current = 0;}

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

   // about__slider
   $('#about__slider').owlCarousel({
       items: 1,
       loop: true,
       mouseDrag: false,
       touchDrag: false,
       autoHeight:true,
       dots: true,
       nav: true,
       navText: "",
       onInitialized: function () {
         var i = 1;
         $('#about__slider .owl-dot>span').each(function () {
           $(this).text(i);
           i++;
         });
         var dotQuantity = $('#about__slider .owl-dot>span').length;
         $('#about__slider .owl-dots').append('/' +dotQuantity);         
       }
   });

   // lines__slider
   $('#lines__slider').owlCarousel({
       items: 1,
       loop: true,
       mouseDrag: false,
       touchDrag: false,
       margin:2,
       dots: true,
       nav: true,
       navText: "",
       onInitialized: function () {
         var i = 1;
         $('#lines__slider .owl-dot>span').each(function () {
           $(this).text(i);
           i++;
         });
         var dotQuantity = $('#lines__slider .owl-dot>span').length;
         $('#lines__slider .owl-dots').append('/' +dotQuantity);         
       }
   });
     
});