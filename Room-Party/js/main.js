$(document).ready(function(){
  "use strict";

    // viewport
    var ww = $(window).width(),
        wh = $(window).height();
  
    // Nav    
    $('a.top__link').on('click', function(event) {
      $('.navbar-toggle:visible').trigger('click');
    });
    //scroll to place
    $(".js-scroll-down").click(function() {
      $("html, body").animate({scrollTop: $($(this).closest('section').next('section')).offset().top + "px"}, {duration: 700});
      return false;
    });

    //ЯКОРЯ    
    $(".nav__link").on('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 800, 'swing');            
      event.preventDefault();
    });

    //parallax
    if ($('[data-type="background"]').length && ww > 1200){
        $('.s-intro').parallax('50%', -0.09);
        $('.s-events').parallax('50%', -0.08);
        $('.s-rent').parallax('50%', -0.08);
    };

    //Дата
    flatpickr("[name=date]",{
      dateFormat: "d-M-Y",
      // -- выходные --
      // "disable": [
      //     function(date) {
      //       var i
      //         return (date.getDay() === 6 || date.getDay() === 0);
      //     }
      // ],
      "locale": {"firstDayOfWeek": 1 }
    });

    //mask
    $("[type=tel]").mask("+7 (999) 999-9999");

    //Гугл карта
    jQuery(function($) {
      var LatMarker = new google.maps.LatLng(56.14156,40.4091496),
          LatCenter = new google.maps.LatLng(56.14156,40.4101),
          googlemap = new google.maps.Map(document.getElementById('map'),
          {
            center: LatCenter,
            zoom: 16,
            scrollwheel: false,
            mapTypeControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          }
        );       
        var marker = new google.maps.Marker({
              position: LatMarker,
              map: googlemap,
              title:"ул. Мира, 36"           
          });
      });
    
    //скрывать адрес
    $('.contact__resize').click(function(){
        $(this).parent().children('.contact__box').toggleClass('hidden').toggle('300');
        return false;
    });

    // Попап ЗАКАЗА
    $('.js-popup').click(function(e) {
        const subject = $(this).parent().siblings('.h3').text();
        $('.small-pop-up [name="message"]').text('Выбранный пакет:' + '\n— ' + subject);
    })
      .magnificPopup({
          type: 'inline',
          removalDelay: 300,
          fixedContentPos: true,
          fixedBgPos: true,
          mainClass: 'mfp-fade',
          closeBtnInside: true,
          enableEscapeKey: true,
          closeOnBgClick: true          
    });
     
});