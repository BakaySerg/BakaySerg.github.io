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
       enableEscapeKey:true
    });

    //Дата и время
    flatpickr("#date",{
      dateFormat: "d-M-Y",
      // inline: true,
      "disable": [
          function(date) {
            var i
              return (date.getDay() === 6 || date.getDay() === 0);
              // return (date.getMonth() % 6 < 0);
              // return !(date.getDate() % 8);
          }
      ],
      "locale": {"firstDayOfWeek": 1 }
    });
    flatpickr("#time",{
      enableTime: true,
      noCalendar: true,
      dateFormat: "H:i",
      // time_24hr: true,
      defaultDate: "07:00",
      minDate: "07:00",
      maxDate: "20:00"
    });

    //mask
    $("[type=tel]").mask("Телефон: +7 (999) 999-9999");

    //faq
    if ($('.faq__hidden').length) {
      $('.faq__hidden').hide();
      $('.faq__visible').click(function() {
        $(this).toggleClass('opened').next('.faq__hidden').slideToggle(300);
      });
    };   
    if ($('.analyzes__list').length) {
      $(".analyzes__list").accordion({
        accordion: true,
        speed: 200,
        closedSign: '',
        openedSign: ''
      });
    };

     
});