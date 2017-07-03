function showPage() {
  $(".loader_inner").fadeOut();
  $(".loader").delay(400).hide();
  setTimeout(document.body.classList.remove('js-loading'), 6000);  
}
document.body.classList.add('js-loading');

window.addEventListener("load", showPage, false);


$(document).ready(function(){
    "use strict";
    var ww = $(window).width();
    var wh = $(window).height();

    //FullPage
    function init_scroll() {
      // if (ww >= 991 && wh > 580) { 
        $('section').removeAttr('id');       
        $('#fullpage').fullpage({
            sectionSelector: 'section',
            verticalCentered: false,
            scrollOverflow: true,
            anchors: ['slide_1', 'slide_2', 'slide_3', 'slide_4', 'slide_5'],
            menu: '.navline',
            // responsiveWidth: 768,
            // resize: true,
            // afterResize: function(){},
            css3: true,
            scrollingSpeed: 1000,
            onLeave: function (index, nextIndex, direction) {
              $('.about__brand').addClass('clip2');
              $('.about__adv-item').addClass('trnsl');
              if (nextIndex == 2) {
                $('.about__brand').addClass('clipplay2');
                $('.about__adv-item').addClass('trnslplay');
              }
            }
        });        
      // } else {return false;}
    }   

    init_scroll();

    $(window).on('load resize', function(){
      init_scroll();
      if($(window).width() < 991 || wh < 580) {
          if($('html').hasClass('fp-enabled')){
              $.fn.fullpage.destroy('all');
              
              var i = 1;
              $('section').each(function(){
                  $(this).attr('id','slide_'+i);
                  i++;
              });
          }
      }
      else {
          if(!$('html').hasClass('fp-enabled')) {
              $('section').removeAttr('id');           
              init_scroll();
          }          
    }});

    $('.is-scroll-down').click(function(){
        $.fn.fullpage.moveSectionDown();
    });    
  
    // Nav    
    $('a.top__link,.submenu__item a').on('click', function(event) {
      $('.navbar-toggle:visible').trigger('click');
    });

    // $(".js-scroll-page").click(function() {
    //   $("html, body").animate({
    //      scrollTop: $($(this).attr("href")).offset().top + "px"
    //   }, {
    //      duration: 800,
    //      easing: "swing"
    //   });
    //   return false;
    // });

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
        margin:60,
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
       // scrollBar: $wrap.find('.scrollbar'),
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


   // var ServicesSlider = $('.services__slider');
   // ServicesSlider.owlCarousel({
   //     loop: false,
   //     smartSpeed:300,
   //     dots: true,
   //     nav: true,
   //     navText: "",
   //     // margin:0,
   //     center: true,
   //     responsiveRefreshRate: 200,
   //     responsive: {
   //         0: {
   //             items: 1,
   //             dots: false,
   //             margin:0
   //         },
   //         500: {
   //             items: 2,
   //             dots: false,
   //             margin:40
   //         },
   //         840: {
   //             items: 3,
   //             dots: true,
   //             margin:40
   //         }
   //     }
   // });

   
     
});