function showPage() {
  setTimeout(function(){
      setTimeout(function(){$(".loader").fadeOut();}, 200);
  });
};

$(document).ready(function(){
  "use strict";

    //header fixed
    $(".navbar").sticky({ topSpacing: 0 });

    //intro-slider
    if ($("#intro-slider").length) {
      $("#intro-slider").slick({
        dots: true,
        // arrows: false,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        infinite: true,
        slidesToShow: 1,
        pauseOnHover:false,
        pauseOnFocus:false,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true
      });
    };

    // parallax-rellax
    if ($('.rellax').length){
      var rellax = new Rellax('.rellax', {speed: 2, center: false});
    };
  
    // Nav    
    $('a.top__link').on('click', function(event) {
      $('.navbar-toggle:visible').trigger('click');
    });

    // g a l l e r y
    $('.popup-gallery').each(function() {
      $(this).magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Загрузка...',
        mainClass: 'mfp-fade',
        removalDelay: 300,
        fixedContentPos: true,
        fixedBgPos: true,
        autoFocusLast:true,
        midClick: true,
        gallery: {
          enabled: true,
          navigateByImgClick: true
        },
        image: {
          tError: '<a href="%url%">Изображение #%curr%</a> не загружается.',
          titleSrc: function(item) {
            return item.el.attr('title');
          }    
        }
      });
    });

    //sliders equipment
    if ($("#equipment-slider-big").length) {
      $("#equipment-slider-big").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        infinite: true,
        slidesToShow: 1,
        fade: true,
        asNavFor: '#equipment-slider-small'
      });
      $('#equipment-slider-small').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#equipment-slider-big',
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: '70px',
        focusOnSelect: true,
        vertical: true,
        verticalSwiping: true
      });
    };

    //sliders lines
    if ($("#lines-slider-big").length) {
      $("#lines-slider-big").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        fade: true,
        asNavFor: '#lines-slider-small'
      });
      $('#lines-slider-small').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#lines-slider-big',
        dots: false,
        arrows: false,
        focusOnSelect: true
      });
    };
     
});
$(window).on('load', showPage);