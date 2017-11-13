$("body").addClass('js-loading');
function page() {
  $("body").removeClass('js-loading');
  $(".loader").delay(2200).fadeOut();
}

window.addEventListener("load", page, false);

$(document).ready(function(){
  "use strict";

    // Параллакс
    function parallax(){
      var ww = $(document).width();
      var s1 = document.getElementById('scene1'),
      parallax1 = false;
        if ( ww > 1000) {
          parallax1 = new Parallax(s1);
        }
        else {
          parallax1 = false;
        }    
    };
    parallax();

    $(window).on('resize', function() {
      parallax();
    });

    //Timer
    $('#countdown').timeTo({
        timeTo: new Date(new Date('Fri Nov 20 2017 10:00:00 GMT+0200 (Финляндия (зима))')),
        displayDays: 2,
        displayCaptions: true,
        captionSize: 22,
        fontSize: 36
    });  

    // Навигация и подскрол по якорю
    $("#top").scrollupbar();
    
    $('a.top__link').on('click', function(event) {
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