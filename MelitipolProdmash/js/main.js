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
    var ww = $(window).width(),
        wh = $(window).height();
    //only desktop
    if ( ww > 1270) {
      $('.about__title-container,.s-contact .col-md-4,.s-contact .form,.s-cutted .col-md-8,.s-cutted .col-md-12').addClass("clip").viewportChecker({
        classToAdd: 'clipplay',
        offset: 60
      });
      $('.s-about .col-md-5,.address__box address,.s-contact .col-md-2,.descr__text,.s-cutted .col-md-5').addClass("clip2").viewportChecker({
        classToAdd: 'clipplay2',
        offset: 110
      }); 
      $('.s-about .tab,.catalog__item').addClass("trnsl").viewportChecker({
        classToAdd: 'trnslplay',
        offset: 100
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

    // morph
    // var multiMorph1;
    // function morphIt() {
    //   multiMorph1 = KUTE.to('#wobble-1', {
    //     path: '#wobble-2'
    //     // path: '#wobble-3',
    //     // path: '#wobble-4',
    //     // path: '#wobble-5'
    //   }, {
    //     morphPrecision: 10,
    //     morphIndex: 10,
    //     // reverseSecondPath: true,
    //     duration: 200,
    //     // repeat: 1,
    //     // yoyo: true,
    //     easing: 'easingCubicOut'
    //   }).start();
    // }
    // setInterval(morphIt, 8000);


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
        // autoplay:true, 
        // autoplayTimeout:5000,
        // autoplaySpeed: 600,
        // animateIn: "fxSoftScaleInNext",
        // animateOut: "fxSoftScaleOutNext",
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
        //   var dotQuantity = $('#intro-slider__img .owl-dot>span').length;
        //   $('#intro-slider__img .owl-dots').append('<div class="owl-dot--quantity">' + '/' +dotQuantity + '</div>');         
        // },
        // resize:function () {
        //   var dotQuantity = $('#intro-slider__img .owl-dot>span').length;
        //   $('#intro-slider__img .owl-dots').append('<div class="owl-dot--quantity">' + '/' +dotQuantity + '</div>');         
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
      //end block

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
       margin:40,
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

   //
   // lines__slider
   $('#lines__slider').owlCarousel({
       items: 1,
       loop: true,
       mouseDrag: false,
       touchDrag: false,
       margin:40,
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