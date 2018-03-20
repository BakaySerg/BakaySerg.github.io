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
    $('.photo-slider').slick({
      responsive:true,
      // infinite: false,
      dots: false,
      arrows: true,
      prevArrow: '<i class="slick-arrow slick-prev"><svg width="40" height="40"><path d="M23.5 11.5 L15.5 19.5 L23.5 27.5" stroke-linejoin="round" stroke-linecap="round" style="fill:none; stroke:#ce202e; stroke-width:3px"></path></svg></i>',
      nextArrow: '<i class="slick-arrow slick-next"><svg width="40" height="40"><path d="M16.5 11.5 L24.5 19.5 L16.5 27.5" stroke-linejoin="round" stroke-linecap="round" style="fill:none; stroke:#ce202e; stroke-width:3px"></path></svg></i>',
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 900,
        settings: {
          slidesToShow: 3
        }        
      },{
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          draggable:true}
        },{
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          centerMode:true,
          arrows: false,
          draggable:true,
          centerPadding:'30px'
        }
      }]
    });

    // Галерея
    if ($('.photo-gallery').length){
      $('.photo-gallery').each(function() {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Загрузка...',
            mainClass: 'mfp-zoom-in',
            removalDelay: 160,
            fixedContentPos: true,
            fixedBgPos: true,
            autoFocusLast:true,
            midClick: true,          
            gallery: {
              enabled: true,
              tCounter: '%curr% из %total%',
              navigateByImgClick: true
            },
            image: {
              tError: '<a href="%url%">Изображение #%curr%</a> не загружается.',
              titleSrc: function(item) {
                return item.el.find('span').text();
              }
            },
            callbacks: {
              buildControls: function() {
                if(this.arrowLeft) {
                  this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
                }
              }
            }
        });
      });      
    };

    // Попапы -обратной связи
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