$(document).ready(function(){
  "use strict";

    //Timer
    $('[data-countdown]').each(function() {
      var $this = $(this), 
      finalDate = $this.data('countdown');
      $this.countdown(finalDate, function(event) {
      $this.html(event.strftime(''
        + '<div><span>Days</span><div>%D</div></div>'
        + '<div><span>Hours</span><div>%H</div></div>'
        + '<div><span>Minutes</span><div>%M</div></div>'
        + '<div><span>Seconds</span><div>%S</div></div>'));
      });
    });

    //slider
    if ($('.quote-slider').length) {
      var $slider =  $('.quote-slider');

      var $status = $('.pagingInfo'); 
      
      $slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {          
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.html('<span>' + i + '</span>' + ' ' + 'of' + ' ' + slick.slideCount);
      });

      $slider.slick({
        responsive:true,
        infinite:false,
        dots: false,
        arrows: true,
        prevArrow: '<i class="slick-arrow slick-prev"><svg viewBox="0 0 32 32"><use xlink:href="#i-left2"/></svg></i>',
        nextArrow: '<i class="slick-arrow slick-next"><svg viewBox="0 0 32 32"><use xlink:href="#i-right2"/></svg></i>',
        speed:660,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });
    };

    //viewport-animation
    $('.timeline__item').addClass("vp-wait").viewportChecker({
      classToAdd: 'vp',
      // repeat: true,
      offset: 130
    });
});