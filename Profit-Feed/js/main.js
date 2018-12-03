jQuery(document).ready(function(){
  // "use strict";

    jQuery("img, a").on("dragstart", function(event) { event.preventDefault();});

    jQuery(".header").scrollupbar();
  
    // Nav    
    jQuery('a.top__link').on('click', function(event) {
      jQuery('.navbar-toggle:visible').trigger('click');
    });


    jQuery(".js-scroll-up").click(function() {
      jQuery("html, body").animate({scrollTop: 0}, {duration: 800});
      return false;
    });    


    // intro-slider
    if (jQuery(".intro__slider").length) {
      jQuery('.intro__slider').slick({
        responsive:true,
        infinite:false,
        dots: false,
        arrows: false,
        speed:660,
        fade: true,
        draggable:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        // appendDots:jQuery(".intro__pagin")
        asNavFor: '.intro__pagin'
      });
      jQuery('.intro__pagin').slick({
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
    if (jQuery(".what__tab-pane").length) {
      jQuery('.what__tab-pane').slick({
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
      jQuery('.what__tab-wrap').slick({
        slidesToShow: 6,
        infinite:false,
        slidesToScroll: 1,
        asNavFor: '.what__tab-pane',
        dots: false,
        focusOnSelect: true
      });
    };

    //line__slider
    if (jQuery(".line__slider").length) {
      jQuery('.line__slider').slick({
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
          breakpoint: 900,
          settings: {
            draggable:false,
            slidesToShow: 3
          }
        },{
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            draggable:true
          }
          },{
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            centerMode:true,
            arrows: false,
            draggable:true,
            centerPadding:'30px'
          }
        }]
      });
    };

    //history__slider
    if (jQuery(".history__slider").length) {
      jQuery('.history__slider').slick({
        responsive:true,
        infinite: false,
        dots: false,
        arrows: true,
        prevArrow: '<i class="slick-arrow slick-arrow--light slick-prev"><svg viewBox="0 0 32 32"><use xlink:href="#i-arrow-left"/></svg></i>',
        nextArrow: '<i class="slick-arrow slick-arrow--light slick-next"><svg viewBox="0 0 32 32"><use xlink:href="#i-arrow-right"/></svg></i>',
        speed:660,
        draggable:false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            draggable:true
          }
          },{
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            centerMode:true,
            arrows: false,
            draggable:true,
            centerPadding:'30px'
          }
        }]
      });
    };

    //about article slider (today)
    if (jQuery(".article__slider").length) {
      jQuery('.article__slider').slick({
        responsive:true,
        infinite: true,
        dots: false,
        arrows: true,
        adaptiveHeight: true,
        prevArrow: '<i class="slick-arrow slick-prev"><svg viewBox="0 0 32 32"><use xlink:href="#i-arrow-left"/></svg></i>',
        nextArrow: '<i class="slick-arrow slick-next"><svg viewBox="0 0 32 32"><use xlink:href="#i-arrow-right"/></svg></i>',
        speed:660,
        slidesToShow: 1
      });
    };

    //sertificates__slider
    if (jQuery(".sertificates__slider").length) {
      jQuery('.sertificates__slider').slick({
        infinite: false,
        responsive:true,
        dots: false,
        arrows: true,
        prevArrow: '<i class="slick-arrow slick-arrow--light slick-prev"><svg viewBox="0 0 32 32"><use xlink:href="#i-arrow-left"/></svg></i>',
        nextArrow: '<i class="slick-arrow slick-arrow--light slick-next"><svg viewBox="0 0 32 32"><use xlink:href="#i-arrow-right"/></svg></i>',
        speed:500,
        asNavFor: '.sertificates__thumbnails',
        slidesToShow: 1,
        responsive: [{
          breakpoint: 1921,
          settings: {
            centerPadding:0
          }
          },{
          breakpoint: 1680,
          settings: {
          }
        },{
          breakpoint: 800,
          settings: {
            slidesToShow: 6
          }
        }]
      });
      jQuery(".sertificates__thumbnails").slick({
        infinite: false,
        slidesToScroll: 1,
        speed:500,
        swipeToSlide: !0,
        asNavFor: '.sertificates__slider',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        responsive: [{
          breakpoint: 1921,
          settings: {
            slidesToShow: 7,
            centerPadding:0
          }
          },{
          breakpoint: 1680,
          settings: {
            slidesToShow: 8,
          }
        },{
          breakpoint: 1367,
          settings: {
            slidesToShow: 9,
          }
        },{
          breakpoint: 1025,
          settings: {
            slidesToShow: 7,
            centerPadding:0
          }
        }]
      })
    };

    //video - popup
    jQuery('.js-video').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-rotate-bottom'
    });

    //placeholder
    if (jQuery(".es_shortcode_form").length )  {  
        var lbl = jQuery(".es_shortcode_form_email").text();
        jQuery("#es_txt_email").attr("placeholder", lbl);
    };

    // 1 ton(s)
    function incerment(selector,maxValue,units){
         var value = selector.val() != undefined ? parseInt(selector.val()) : 0;
         var max_value = maxValue != undefined ? parseInt(maxValue) : 99;
         var result = String(units);
         if(value >= max_value){
          return false;
         }
         else {
            selector.val(value + 1 + " " + result);
            selector.trigger("change");
     }
     }
     function decerment(selector,minValue,units){
          var value = selector.val() != undefined ? parseInt(selector.val()) : 0;
          var min_value = minValue != undefined ? parseInt(minValue) : 1;
          var result = String(units);
          if(value <= min_value){
           return false;
          }
          else {
              selector.val(value - 1 + " " + result);
              selector.trigger("change");
          }
      }

     jQuery('.plus').click(function(e){
        e.preventDefault();
        var a = jQuery(this).prev(jQuery("[data-value]")),
            b = 99,
            c = a.attr('data-value');
         incerment(a,b,c);
     });
     jQuery('.minus').click(function(e){
        e.preventDefault();
        var a = jQuery(this).next(jQuery("[data-value]")),
            b = 1,
            c = a.attr('data-value');
         decerment(a,b,c);
     });
     
     jQuery('.form-calc').on('change', function(){
        jQuery(this).closest('.form-calc').find('.quantity input').val(Number.parseInt(jQuery('#profit_weight').val() ));
     });
     jQuery('.profit-weight').on('change', function(){
        jQuery(this).closest('.weight').prev().find('input').val(Number.parseInt(jQuery(this).val())).trigger('change');
        
     });

     jQuery('.category__list .box,.what__tab-slide .box').on('click', function(){
        document.location.href = jQuery(this).children('.btn').attr('href');
     })

     // js-scroll
     jQuery('.js-scroll').click(function(){
         jQuery('html, body').animate({
             scrollTop: jQuery( jQuery.attr(this, 'href') ).offset().top - 30
         }, 500);
         return false;
     });

     //doc filter
     if (jQuery(".doc__list").length) {
       jQuery(document).ready(function(){
         $grid = jQuery('.doc__list').isotope({
           itemSelector: '.doc__list-item',
           layoutMode: 'masonry',
           masonry: {gutter: 0}
         });
         jQuery('.js-filter').on( 'click', 'li', function() {
           var filterValue = jQuery(this).attr('data-filter');
           $grid.isotope({ filter: filterValue });
           jQuery(this).addClass('active').siblings('li').removeClass('active');
         });
       });
    };

     
});