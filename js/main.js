function showPage() {
  setTimeout(function(){
      document.body.classList.remove('js-loading');
      setTimeout(function(){
      $(".loader").fadeOut();
      },500);
  });

}
document.body.classList.add('js-loading');


$(document).ready(function(){
  "use strict";

    //header fixed
    $(".navbar").sticky({ topSpacing: 0 });

    //intro-slider
    if ($("#intro-slider").length) {
      $("#intro-slider").slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        pauseOnHover:false,
        pauseOnFocus:false,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: 'linear'
      });
    };

    // parallax-rellax
    if ($('.rellax').length){
      var rellax = new Rellax('.rellax', {
        speed: -4,
        center: true
      });
    };
  
    // Nav    
    $('a.top__link').on('click', function(event) {
      $('.navbar-toggle:visible').trigger('click');
    });

    //scroll to place
    // $(".js-scroll-down").click(function() {
    //   $("html, body").animate({scrollTop: $($(this).closest('section').next('section')).offset().top + "px"}, {duration: 800});
    //   return false;
    // });


    // G A L L E R Y
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
          // preload: [0,1] 
        },
        image: {
          tError: '<a href="%url%">Изображение #%curr%</a> не загружается.',
          titleSrc: function(item) {
            return item.el.attr('title');
          }    
        }
      });
    });

     
});
$(window).on('load', showPage);