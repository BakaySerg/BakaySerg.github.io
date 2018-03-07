$(document).ready(function(){
  "use strict";

    // Параллакс
    function parallax(){
      var ww = $(document).width();
      var s1 = document.getElementById('scene1'),
      prlx = false;
        ww > 999 ? prlx = new Parallax(s1) : prlx = false; 
    };
    parallax();

    $(window).on('resize', parallax);

    //Timer
    $('#countdown').timeTo({
        timeTo: new Date(new Date('Fri Nov 20 2018 10:00:00 GMT+0200 (Финляндия (зима))')),
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

    //spoiler
    $('.collap').hide();
    $('.js-has-collapse').click(function(event) {
      event.preventDefault();
      $(this).toggleClass('expand').find('.collap').slideToggle(300);
    });

    //choice
    $('.earn__choice-item').mouseenter(function(){
      $(this).siblings('.earn__choice-item').addClass('no-active');
    }).mouseleave(function(){
      $(this).siblings('.earn__choice-item').removeClass('no-active');
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