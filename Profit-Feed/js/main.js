$(document).ready(function(){
  "use strict";

    $("img, a").on("dragstart", function(event) { event.preventDefault();});

    $(".header").scrollupbar();
  
    // Nav    
    $('a.top__link').on('click', function(event) {
      $('.navbar-toggle:visible').trigger('click');
    });


    $(".js-scroll-up").click(function() {
      $("html, body").animate({scrollTop: 0}, {duration: 800});
      return false;
    });    


    // intro-slider
    if ($(".intro__slider").length) {
      $('.intro__slider').slick({
        responsive:true,
        infinite:false,
        dots: false,
        arrows: false,
        speed:660,
        fade: true,
        draggable:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        // appendDots:$(".intro__pagin")
        asNavFor: '.intro__pagin'
      });
      $('.intro__pagin').slick({
          slidesToShow: 6,
          infinite:false,
          slidesToScroll: 1,
          asNavFor: '.intro__slider',
          arrows: false,
          dots: false,
          focusOnSelect: true
      });
    };

    //what-slider
    if ($(".what__tab-pane").length) {
      $('.what__tab-pane').slick({
        responsive:true,
        infinite:false,
        dots: false,
        arrows: false,
        speed:660,
        fade: true,
        draggable:false,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.what__tab-wrap'
      });
      $('.what__tab-wrap').slick({
        slidesToShow: 6,
        infinite:false,
        slidesToScroll: 1,
        asNavFor: '.what__tab-pane',
        dots: false,
        focusOnSelect: true
      });
    };

    //line__slider
    if ($(".line__slider").length) {
      $('.line__slider').slick({
        responsive:true,
        // infinite: true,
        dots: true,
        arrows: true,
        prevArrow: '<i class="slick-arrow slick-prev"><svg viewBox="0 0 32 32"><use xlink:href="#i-arrow-left"/></svg></i>',
        nextArrow: '<i class="slick-arrow slick-next"><svg viewBox="0 0 32 32"><use xlink:href="#i-arrow-right"/></svg></i>',
        speed:660,
        swipeToSlide: !0,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
          breakpoint: 800,
          settings: {
            draggable:false,
            slidesToShow: 3
          }
        },{
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            dots: false,
            draggable:true
          }
          },{
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            centerMode:true,
            dots: false,
            arrows: false,
            draggable:true,
            centerPadding:'50px'
          }
        }]
      });
    };
    


    //equalHeight 
    // if ($('.what__tab-slide').length){
    //   function setEqualHeight(columns){
    //     var tallestcolumn = 0;
    //     columns.each( function(){
    //       currentHeight = $(this).height();
    //       if(currentHeight > tallestcolumn){
    //         tallestcolumn = currentHeight;
    //       }
    //     });
    //     columns.height(tallestcolumn);
    //   }
    //   setEqualHeight($(".what__tab-slide .box"));
    // };

    // Попап

    // if ($('.js-popup').length){
    //   $('.js-popup').magnificPopup({
    //      type: 'inline',
    //      removalDelay: 300,
    //      fixedContentPos: true,
    //      fixedBgPos: true,
    //      mainClass: 'mfp-fade',
    //      closeOnBgClick: true,
    //      enableEscapeKey:true
    //   });
    // };

     
});