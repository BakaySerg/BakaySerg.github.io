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
      $('h2,.about__title-container,.s-contact .col-md-4,.s-contact .form,.s-cutted .col-md-8,.s-cutted .col-md-12').addClass("clip").viewportChecker({
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

   // intro-slider
   $("#intro-slider").owlCarousel({       
     items: 1,
     loop: true,
     smartSpeed:1000,
     margin:60,
     mouseDrag: false,
     touchDrag: false,
     dots: true,
     nav: false,
     animateOut: 'fadeOut',
     autoplay:true, 
     autoplayTimeout:4500,
     navText: "",
     responsive: {
         0: {
             touchDrag: true,
             margin:0
         },
         490: {
             touchDrag: false,              
             margin:30
         }
     }
   });

   //parallax
    if ($('[data-type="background"]').length && ww > 1200) {
       var $window = $(window);
         $('[data-type="background"]').each(function(){ 
             var $bgobj = $(this);
         
             $(window).scroll(function() {
                var yPos = (($window.scrollTop() + 20) / $bgobj.data('speed')); 
                 
                 var coords = '50% '+ yPos + '%';
                 $bgobj.css({ backgroundPosition: coords });
             }); 
         });
   }

     
});