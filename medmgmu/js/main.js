$(document).ready(function(){
  "use strict";
  
    // Nav    
    $('a.top__link').on('click', function(event) {
      $('.navbar-toggle:visible').trigger('click');
    });

    $('.search__form input').focusin(function() {
      $(this).next('[type=submit]').css('display', 'block');
    });

    //slider
    $('.slick-slider').slick({
      responsive:true,
      infinite: true,
      dots: false,
      speed:500,
      arrows: true,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 800,
        settings: {
          draggable:false,
          slidesToShow: 2
        }        
      },{
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode:true,
          arrows: false,
          draggable:true,
          centerPadding:'80px'}
        },{
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode:true,
          arrows: false,
          draggable:true,
          centerPadding:'50px'
        }
      }]
    });

    // Попап-маленький
    $('.js-popup').magnificPopup({
       type: 'inline',
       removalDelay: 300,
       fixedContentPos: true,
       fixedBgPos: true,
       mainClass: 'mfp-fade',
       closeOnBgClick: true,
       enableEscapeKey:true,
       callbacks: {
         // beforeOpen: function() { $('.wrapper').addClass('is-popup-open'); },
         // close:function() { $('.wrapper').removeClass('is-popup-open'); }
       }
    });

    //Дата и время
    flatpickr("#date",{
      dateFormat: "d-M-Y", //"Y-m-d"
      "disable": [
              function(date) {
                  // return true to disable
                  return (date.getDay() === 5 || date.getDay() === 6);

              }
          ],
          "locale": {
              "firstDayOfWeek": 1 // start week on Monday
          }

    });
    flatpickr("#time",{
      enableTime: true,
      noCalendar: true,
      dateFormat: "H:i",
      // time_24hr: true,
      defaultDate: "09:00",
      minDate: "09:00",
      maxDate: "18:00"
    });

     
});