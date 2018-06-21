$(document).ready(function(){
  "use strict";
  
    // Nav    
    $('a.top__link').on('click', function(event) {
      $('.navbar-toggle:visible').trigger('click');
    });

    //scroll to place
    $(".js-scroll-down").click(function() {
      $("html, body").animate({scrollTop: $($(this).closest('section').next('section')).offset().top + "px"}, {duration: 800});
      return false;
    });
    $(".js-scroll-up").click(function() {
      $("html, body").animate({scrollTop: 0}, {duration: 800});
      return false;
    });

    $(".collapse").on('show.bs.collapse', function () {
        $(this).parent('.col-4').siblings('.col-4').children('.collapse').collapse('hide');
    });


    //slider
    $('.intro-slider').slick({
      responsive:true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4100,
      dots: true,
      speed:660,
      fade: true,
      arrows: false,
      // slide: ".intro__slide",
      slidesToShow: 1,
      slidesToScroll: 1
    });

    //slider
    if ($(".services-slider").length) {
      $(".services-slider").slick({
        dots: false,
        arrows: true,
        prevArrow: '<i class="slick-arrow slick-prev"><svg width="40" height="40"><path d="M27.5 6.5 L13.5 19.5 L27.5 32.5" stroke-linejoin="round" stroke-linecap="round" style="fill:none; stroke:#eee; stroke-width:1px"></path></svg></i>',
        nextArrow: '<i class="slick-arrow slick-next"><svg width="40" height="40"><path d="M14.5 6.5 L29.5 19.5 L14.5 32.5" stroke-linejoin="round" stroke-linecap="round" style="fill:none; stroke:#eee; stroke-width:1px"></path></svg></i>',
        infinite: true,
        speed: 600,
        focusOnSelect: true,
        slidesToShow: 4,
        swipeToSlide: !0,
        responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 3
            }
        }, {
            breakpoint: 750,
            settings: {
              slidesToShow: 2
            }
        }, {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              arrows: false,
              centerMode: true,
              centerPadding: '40px'
            }
        }]
      });
    };

    //slider
    if ($(".brands-slider").length) {
      $(".brands-slider").slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 600,
        slidesToShow: 6,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 1025,
            settings: {
              slidesToShow: 5,
              slidesToScroll:5
            }
        }, {
            breakpoint: 700,
            settings: {
              slidesToShow: 4,
              slidesToScroll:4
            }
        }, {
            breakpoint: 500,
            settings: {
              slidesToShow: 3
            }
        }]
      });
    };

    //counter statistic
    if ( $('.s-statistic').length) {
       $(window).scroll(function() {
          if($(window).scrollTop() + $(window).height() >= $('.s-statistic').offset().top) {
            countStats();                
          }
       });

       function countStats(){
         $('.s-statistic .statistic__value').each(function() {
             var $this = $(this),
                 countTo = $this.attr('data-count');
             $({countNum: $this.text() }).animate({
                 countNum: countTo
             }, {
                 duration: 1000,
                 easing: 'swing',
                 step: function() {$this.text(Math.floor(this.countNum));},
                 complete: function() {$this.text(this.countNum);}
             });
         });
       };
    };

    // Попап
    if ($('.js-popup').length){
      $('.js-popup').magnificPopup({
         type: 'inline',
         removalDelay: 300,
         fixedContentPos: true,
         fixedBgPos: true,
         mainClass: 'mfp-fade',
         closeOnBgClick: true,
         enableEscapeKey:true
      });
    };

    // Попап
    if ($('.js-popup-ajax').length){
      $('.js-popup-ajax').magnificPopup({
         type: 'ajax',
         settings: {cache:true},
         removalDelay: 300,
         fixedContentPos: true,
         fixedBgPos: true,
         mainClass: 'mfp-fade',
         closeOnBgClick: true,
         tError: 'Контент не загрузился :(',
         tLoading: 'ЗАГРУЗКА...',
         cursor: 'mfp-ajax-cur',
         enableEscapeKey:true 
      });
    };

    //mask
    $("[type=tel]").mask("+7 (999) 999-9999");

    //Гугл карта
    jQuery(function($) {
      var LatMarker = new google.maps.LatLng(56.1688, 40.4942083),
          LatCenter = new google.maps.LatLng(56.1690312, 40.49256),
          googlemap = new google.maps.Map(document.getElementById('map'),
          {
            center: LatCenter,
            zoom: 17,
            scrollwheel: false,
            mapTypeControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          }
        );
        var contentString = 
            '<div id="content">'+
            '<b id="siteNotice">ул. Добросельская, 212а.</b>'+
            '</div>';
        var infowindow = new google.maps.InfoWindow({
         content: contentString
       });       
        var marker = new google.maps.Marker({
              position: LatMarker,
              map: googlemap,
              title:"ул. Добросельская, 212а."           
          });
        infowindow.open(map, marker);
        marker.addListener('click', function() {infowindow.open(map, marker);});
      });
     
});