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
    var ww = $(document).width();
    //only desktop
    if ( ww > 1270) {
      $('.about__title-container').addClass("clip").viewportChecker({
        classToAdd: 'clipplay',
        offset: 0
      });
      $('.s-about .col-md-5,.address__box address,.s-contact .col-md-2,.s-contact .col-md-3,.s-contact .form').addClass("clip2").viewportChecker({
        classToAdd: 'clipplay2',
        offset: 100
      }); 
      $('h2,.s-about .tab,.catalog__item').addClass("trnsl").viewportChecker({
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

     
});