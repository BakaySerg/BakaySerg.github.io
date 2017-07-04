function showPage() {
  $(".loader_inner").fadeOut();
  $(".loader").delay(400).hide();
  setTimeout(document.body.classList.remove('js-loading'), 6000);  
}
document.body.classList.add('js-loading');

window.addEventListener("load", showPage, false);

$(document).ready(function(){
    "use strict";

    // Ruffles
    var ww = $(document).width();
    if ( ww > 1280) {
      $('.about__title-container,#tab-menu,.tab-content').addClass("clip").viewportChecker({
        classToAdd: 'clipplay',
        offset: 0
      });
    }
    $('.about__tab-note,.s-product .title-box,.s-catalog .title-box,.s-supply .title-box,.article__text,.article__img').addClass("clip").viewportChecker({
      classToAdd: 'clipplay',
      offset: 0
    }); 
    $('.top,.catalog__item,.supply__globe,.supply__location').addClass("trnsl").viewportChecker({
      classToAdd: 'trnslplay',
      offset: 100
    }); 
  
    // Nav    
    $('a.top__link,.submenu__item a').on('click', function(event) {
      $('.navbar-toggle:visible').trigger('click');
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
        margin:30,
        dots: false,
        nav: false,
        navText: "",
        stopOnHover:true,
        autoplay:true, 
        autoplayTimeout:5000,
        smartSpeed:5000,
        animateIn: "fxSoftScaleInNext",
        animateOut: "fxSoftScaleOutNext",
    }).on('changed.owl.carousel', syncPosition);

    sync2.owlCarousel({
        items : 1,
        dots: true,
        margin:60,
        mouseDrag: false,
        touchDrag: false,
        nav: false,
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

    // tab - magic - line
    if ($('#tab-menu').length) {
      magicLine();
    }
    function magicLine() {
    var leftPos, newWidth, $magicLine;

    $('#tab-menu').append("<li id='magic-line'></li>");
    $magicLine = $('#magic-line');
    $magicLine.width($('li.active').width())
    .css('left', $('li.active').position().left)
    .data('origLeft', $magicLine.position().left)
    .data('origWidth', $magicLine.width());

    $('#tab-menu .tab').on('shown.bs.tab', function() {
      var $this = $(this);
      $magicLine
      .data('origLeft', $this.position().left)
      .data('origWidth', $this.width())
      .css({
         "left": $magicLine.data('origLeft'),
         "width": $magicLine.data('origWidth')
      });
      return false;
    });
    $(window).on('resize', function() {
      $magicLine.width($('li.active').width()).css('left', $('li.active').position().left);
    });

   /*Magicline hover animation*/
   // $('#tab-menu .tab').hover(function() {
   // var $thisBar = $(this);
   // leftPos = $thisBar.position().left;
   // newWidth = $thisBar.width();
   // $magicLine.css({
   //    "left": leftPos,
   //    "width": newWidth
   // });}, function() {
   //    $magicLine.css({
   //       "left": $magicLine.data('origLeft'),
   //       "width": $magicLine.data('origWidth')
   //    });
   // });
   };

   //Product slider
   var ProductSlider = $('.product__slider');
   ProductSlider.owlCarousel({
       loop: false,
       smartSpeed:300,
       dots: true,
       nav: true,
       navText: "",
       margin:60,
       responsiveRefreshRate: 200,
       responsive: {
           0: {
               items: 1,
               dots: false,
               margin:0
           },
           500: {
               items: 2,
               dots: false,
               margin:40
           },
           840: {
               items: 3,
               dots: true,
               margin:40
           },
           1200: {
               items: 4
           },
           1600: {
               items: 5
           }
       }
   });

   $('.product__slider .owl-item.active,.quote').addClass("op").viewportChecker({
     classToAdd: 'opplay',
     offset: 150
   });

   //HOVERS
   $('#loc-switzerland').hover(function() {
      $('#switzerland').css({fill: '#ff6b02', opacity: '1'});
      $('#marker-switz').css({fill: '#ff6b02', animation: '1.2s shake'});      
   }, function() {
     $('#switzerland').css({fill: '#fff', opacity: '0.58'});
     $('#marker-switz').css({fill: '#fff', animation: 'none'}); 
   });
   $('#loc-usa').hover(function() {
      $('#usa').css({fill: '#ff6b02', opacity: '1'});
   }, function() {
     $('#usa').css({fill: '#fff', opacity: '0.58'});
   });
   $('#loc-uae').hover(function() {
      $('#uae').css({fill: '#ff6b02', opacity: '1'});
   }, function() {
     $('#uae').css({fill: '#fff', opacity: '0.58'});
   });
   $('#loc-africa').hover(function() {
      $('#africa').css({fill: '#ff6b02', opacity: '1'});
   }, function() {
     $('#africa').css({fill: '#fff', opacity: '0.58'});
   });
   $('#loc-china').hover(function() {
      $('#china').css({fill: '#ff6b02', opacity: '1'});
   }, function() {
     $('#china').css({fill: '#fff', opacity: '0.58'});
   });
   $('#loc-s-korea').hover(function() {
      $('#s-korea').css({fill: '#ff6b02', opacity: '1'});
   }, function() {
     $('#s-korea').css({fill: '#fff', opacity: '0.58'});
   });
   $('#loc-singapore').hover(function() {
      $('#singapore').css({fill: '#ff6b02', opacity: '1'});
   }, function() {
     $('#singapore').css({fill: '#fff', opacity: '0.58'});
   });
   $('#loc-malaysia').hover(function() {
      $('#malaysia').css({fill: '#ff6b02', opacity: '1'});
   }, function() {
     $('#malaysia').css({fill: '#fff', opacity: '0.58'});
   });
   $('#loc-indonesia').hover(function() {
      $('#indonesia').css({fill: '#ff6b02', opacity: '1'});
   }, function() {
     $('#indonesia').css({fill: '#fff', opacity: '0.58'});
   });
    

     
});
