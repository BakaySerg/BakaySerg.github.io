function page() {
  document.body.classList.remove('js-loading');
};
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

    $('.collap').hide();
    $('.js-has-collapse').click(function(event) {
      event.preventDefault();
      $(this).toggleClass('expand').find('.collap').slideToggle(300);
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
    $('.js-mfp-close').on('click', function(e) {
      $.magnificPopup.close();
    });
    
    //отправка формы
    $(".form").submit(function(event) {
      event.preventDefault();
      $.ajax({
        type: 'POST',
        url: 'mail.php',
        data: $(this).serialize(),
        success: function(){  
          $.magnificPopup.open({
            items: {src: '#popup-thank'},mainClass: 'mfp-fade',type: 'inline'},0);
        },
        error: function() {                    
          $.magnificPopup.open({
            items: {src: '#popup-error'},mainClass: 'mfp-fade',type: 'inline'},0);
        }
      }).done(function() {
        $(".form").trigger("reset");
      });
      return false;
    });

    
});