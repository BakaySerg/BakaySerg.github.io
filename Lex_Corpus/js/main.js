function showPage() {
  setTimeout(function(){
      document.body.classList.remove('js-loading');
      setTimeout(function(){
      $(".loader").fadeOut();},2000);
  });
}
// document.body.classList.add('js-loading');


$(document).ready(function(){
  "use strict";

  
    $("img, a").on("dragstart", function(e) {e.preventDefault();});

    //top-show
    function sticky(){
      $(window).scroll(function() {
        var hedHeight = $(".header").height();
        var winTop = $(window).scrollTop();
        $('.navbar-collapse').collapse('hide');

          if(winTop >= hedHeight + 40){
           $("#top-fixed").addClass("slideInDown");
         } else {
           $("#top-fixed").removeClass("slideInDown");
         }
       });
    }
    sticky();
    // $(".top__contacts").on('wheel', (function(e) {e.preventDefault();}));

    // Nav    
    $('a.top__link').on('click', function(event) {
      $('.navbar-toggle:visible').trigger('click');
    });

    //scroll to target
    $(".js-scroll").click(function(e) {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top - 50
      }, {
         duration: 800,
         easing: "swing"
      });
      e.preventDefault();
    });
    $(".js-scroll-up").click(function(e) {
      $("html, body").animate({scrollTop: 0}, {duration: 800});
      e.preventDefault();
    });

    //parallax-rellax
    if (window.matchMedia('(min-width: 1023px)').matches) {
      skrollr.init({
      smoothScrolling: true,
      smoothScrollingDuration: 100,
      forceHeight: !1
      });
    };

    //intro-slider
    if ($("#intro-slider").length) {
      $("#intro-slider").slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 2100,
        focusOnSelect: true,
        slidesToShow: 1,
        fade: true
      });
    };

    //any-slider
    if ($(".any-slider").length) {
      $(".any-slider").slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{            
        breakpoint: 670,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '40px'
        }
        }]
      });
    };

    //etaps-img-slider
    $("#etaps-img-slider").slick({
        infinite: false,
        speed: 800,
        arrows: false,
        dots: true,
        customPaging: function(slider, i){var thumb = $(slider.$slides[i]).data(); return '<i>' + (i + 1) + '</i>';},
        slidesToShow: 1,
        focusOnSelect: true,
        fade: true,
        asNavFor: '#etaps-steps-slider'
    });
    $('#etaps-steps-slider').slick({
        infinite: false,
        slidesToShow: 1,
        speed: 800,
        asNavFor: '#etaps-img-slider',
        vertical: true,
        verticalSwiping: true,
        arrows: false,
        dots: false,
        draggable:false,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 720,
            settings: {
                vertical: false,
                verticalSwiping: false,
                adaptiveHeight:true,
                draggable:true,
                fade: true
            }
        }]
    });

    //mousewheel-slide
    $(function() {
      var wheelBox = $("#s-etaps");
      var curSlide = 1;

      if (window.matchMedia("(min-width: 1023px)").matches) {

        $("#s-clients,.s-any").addClass('before-anim').viewportChecker({
          classToAdd: 'anim-play',
          offset:250
        });
        wheelBox.viewportChecker({
          classToAdd: '',
          classToAddForFullView: 'full-visible',
          classToRemove: 'disablewheel',
          // callbackFunction: function(elem, action){
          //   if (wheelBox.hasClass('full-visible')){
          //   $("body").addClass('overflow-hidden');
          // }
          // },
          repeat: true,
        });

        $(window).scroll(function() {
          var winTop = $(window).scrollTop();
          var wheelBoxTop = wheelBox.offset().top;
            if((wheelBoxTop > winTop - 25) && (wheelBoxTop < winTop + 10)){
              wheelBox.addClass("full-visible");
            }
         });

        $('#etaps-img-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
            curSlide = currentSlide + 1;
            if((curSlide === 1) || (curSlide === 7)){
              wheelBox.addClass('disablewheel');
            } else {
              wheelBox.removeClass('disablewheel');
            }
        });          

        wheelBox.on('wheel', (function(e) {
          var winTop = $(window).scrollTop();
          var wheelBoxTop = wheelBox.offset().top;

          if(wheelBox.hasClass('full-visible')) {
            wheelBox.removeClass("disablewheel");
            // $("body").addClass('overflow-hidden');
            if (e.originalEvent.deltaY > 0) {
              $('#etaps-img-slider').slick('slickNext');
              if (curSlide === 7){
                wheelBox.addClass('disablewheel');
                // $("body").removeClass('overflow-hidden');
                return true;
              } else if (curSlide !== 7){
                wheelBox.removeClass('disablewheel');
                // e.preventDefault();
                return false;
              }
            } else if (e.originalEvent.deltaY < 0){
              $('#etaps-img-slider').slick('slickPrev');
              if (curSlide === 1){
                wheelBox.addClass('disablewheel');
                // $("body").removeClass('overflow-hidden');
                return true;
              } else if (curSlide !== 1){
                wheelBox.removeClass('disablewheel');
                // e.preventDefault();
                return false;
              }
            }
          } else {wheelBox.removeClass("disablewheel");}
        }));
      };
    });

    $('.js-popup-callback').magnificPopup({
        type: 'inline',
        removalDelay: 300,
        fixedContentPos: true,
        fixedBgPos: true,
        mainClass: 'mfp-fade',
        closeBtnInside: true,
        enableEscapeKey: true,
        closeOnBgClick: true
    });

    //form
    $(".form").submit(function(event) {
      event.preventDefault();
      $.ajax({
        type: 'POST',
        url: 'mail.php',
        data: $(this).serialize(),
        success: function(){  
          $.magnificPopup.open({items: {src: '#popup-thank'},type: 'inline',mainClass: 'mfp-fade',},0);
        },
        error: function() {
          $.magnificPopup.open({items: {src: '#popup-error'},type: 'inline',mainClass: 'mfp-fade',},0);
        }
      }).done(function() {
        $(".form").trigger("reset");
      });
      return false;
    });

    //Гугл карта
    jQuery(function($) {
      var LatMarker = new google.maps.LatLng(55.8425577,37.4858135),
          LatCenter = new google.maps.LatLng(55.8425577, 37.4871),
          googlemap = new google.maps.Map(document.getElementById('map'),
          {
            center: LatCenter,
            zoom: 16,
            scrollwheel: false,
            mapTypeControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          }
        );
        var contentString = 
            '<div id="content">'+
            '<b id="siteNotice">Кронштадтский б-р, 7А.</b>'+
            '</div>';
        var infowindow = new google.maps.InfoWindow({
         content: contentString
       });       
        var marker = new google.maps.Marker({
              position: LatMarker,
              map: googlemap,
              title:"Кронштадтский б-р, 7А."           
          });
        infowindow.open(map, marker);
        marker.addListener('click', function() {infowindow.open(map, marker);});
      });
    
    //скрывать адрес
    $('.contact__resize').click(function(){
        $(this).parent().children('.contact__box').toggle('300');
        return false;
    });

     
});
$(window).on('load', showPage);