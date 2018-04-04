function showPage() {
  setTimeout(function(){
      document.body.classList.remove('js-loading');
      setTimeout(function(){$(".loader").fadeOut(); },500);
      setTimeout(function(){$("#top__request").text('37'); },20000);
  });

}
function openPopupCallback() {
  $.magnificPopup.close();
  // $.magnificPopup.open({
  //     items: { src: '#popup'},
  //     type: 'inline',
  //     mainClass: 'mfp-fade',
  //     closeOnBgClick: true,
  //     closeMarkup: '<button title="%title%" type="button" class="mfp-close">закрыть <span>&#215;</span></button>',
  //     enableEscapeKey:true
  // }, 0);
};

document.body.classList.add('js-loading');


$(document).ready(function(){
  "use strict";
  
    // Nav    
    $(window).scroll(function() {
      var winTop = $(window).scrollTop();
        if(winTop >= 5){
          $(".top__container").css('background-color', 'rgba(1,0,0,.9)');
        } else {
          $(".top__container").css('background-color', 'rgba(0,0,0,.4)');
        }
    });
    $('a.top__link').on('click', function(event) {
      $('.navbar-toggle:visible').trigger('click');
    });

    $(".js-scroll").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top - 50
      }, {
         duration: 800,
         easing: "swing"
      });
      return false;
    });
    $(".footer__up").click(function() {
      $("html, body").animate({scrollTop: 0},{duration: 800});
      return false;
    });

    // intro-slider
    if ($("#intro-slider").length) {
      $("#intro-slider").slick({
        dots: false,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        infinite: true,
        slidesToShow: 1,
        pauseOnHover:false,
        pauseOnFocus:false,
        // autoplay: true,
        autoplaySpeed: 5000,
        speed:200,
        fade: true
      });
    };

    // parallax-rellax
    if (window.matchMedia('(min-width: 1024px)').matches) {
      var rellax = new Rellax();
    };

    // video events
    $('.video-box').each(function(index, el) {
      $(this).click(function(e) {
        var vid = $(this);
        vid.toggleClass('play');
        if(vid.hasClass('play')){playVideo();} 
        else { pauseVideo();}
      });
      function playVideo(e) { $('video', this).get(index).play();}
      function pauseVideo(e) {$('video', this).get(index).pause();}      
    });
    $('.video').hover(function toggleControls() {
        if (this.hasAttribute("controls")) {
            this.removeAttribute("controls")
        } else {
            this.setAttribute("controls", "controls")
        }
    });   

    //.slogan__slider
    $(".slogan__slider").slick({
        infinite: true,
        dots: true,
        customPaging: function(slider, i){
          var slogan = ["С","Е","Р","В","И","С"]
          var thumb = $(slider.$slides[i]).data(); 
          return '<i>' + slogan[i] + '</i>';
        },
        prevArrow: '<i class="slick-prev"><svg viewBox="0 0 12 32"><path d="M11.536 0.228c0.39 0.255 0.644 0.689 0.644 1.183 0 0.285-0.085 0.551-0.23 0.772l0.003-0.005-8.959 13.823 8.959 13.822c0.142 0.217 0.227 0.482 0.227 0.767 0 0.779-0.632 1.411-1.411 1.411-0.494 0-0.928-0.254-1.18-0.638l-0.003-0.005-9.358-14.445c-0.141-0.214-0.226-0.476-0.228-0.758v-0c0-0.054 0.004-0.108 0.010-0.16l-0.001 0.007c-0.001-0.023-0.002-0.050-0.002-0.078s0.001-0.054 0.002-0.081l-0 0.004c0-0.285 0.085-0.55 0.231-0.771l-0.003 0.005 9.358-14.444c0.256-0.384 0.687-0.634 1.176-0.634 0.284 0 0.549 0.084 0.77 0.229l-0.005-0.003z"></path></svg></i>',
        nextArrow: '<i class="slick-next"><svg viewBox="0 0 12 32"><path d="M0.643 0.228c-0.389 0.255-0.643 0.689-0.643 1.182 0 0.285 0.085 0.551 0.231 0.773l-0.003-0.005 8.959 13.823-8.959 13.822c-0.142 0.217-0.227 0.482-0.227 0.767 0 0.779 0.632 1.411 1.411 1.411 0.494 0 0.928-0.254 1.18-0.638l0.003-0.005 9.358-14.445c0.143-0.216 0.227-0.481 0.227-0.765 0-0 0-0 0-0v0c0.001-0.023 0.002-0.050 0.002-0.077s-0.001-0.054-0.002-0.080l0 0.004c0.001-0.023 0.002-0.050 0.002-0.078s-0.001-0.054-0.002-0.081l0 0.004c-0-0.285-0.085-0.55-0.231-0.771l0.003 0.005-9.358-14.444c-0.257-0.383-0.688-0.632-1.177-0.632-0.288 0-0.556 0.086-0.78 0.235l0.005-0.003z"></path></svg></i>',
        slidesToShow: 1,
        pauseOnHover: false,
        pauseOnFocus: false,
        focusOnSelect: true,
        adaptiveHeight: true,
        fade:true
    });

    // Brand - video -slider
    $("#recom-video-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        fade: true,
        slidesToShow: 1,
        lazyLoad: 'ondemand',
        responsive: true,
        responsive: [{
            breakpoint: 2560,
            fade: true,
            settings: {
                draggable: false,
            }
        }, {
            breakpoint: 640,
            settings: {
                fade: false,
                draggable: true
            }
        }],
        asNavFor: '#recom-brand-slider'
    });
    $('#recom-brand-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#recom-video-slider',
        prevArrow: '<i class="slick-prev"><svg viewBox="0 0 12 32"><path d="M11.536 0.228c0.39 0.255 0.644 0.689 0.644 1.183 0 0.285-0.085 0.551-0.23 0.772l0.003-0.005-8.959 13.823 8.959 13.822c0.142 0.217 0.227 0.482 0.227 0.767 0 0.779-0.632 1.411-1.411 1.411-0.494 0-0.928-0.254-1.18-0.638l-0.003-0.005-9.358-14.445c-0.141-0.214-0.226-0.476-0.228-0.758v-0c0-0.054 0.004-0.108 0.010-0.16l-0.001 0.007c-0.001-0.023-0.002-0.050-0.002-0.078s0.001-0.054 0.002-0.081l-0 0.004c0-0.285 0.085-0.55 0.231-0.771l-0.003 0.005 9.358-14.444c0.256-0.384 0.687-0.634 1.176-0.634 0.284 0 0.549 0.084 0.77 0.229l-0.005-0.003z"></path></svg></i>',
        nextArrow: '<i class="slick-next"><svg viewBox="0 0 12 32"><path d="M0.643 0.228c-0.389 0.255-0.643 0.689-0.643 1.182 0 0.285 0.085 0.551 0.231 0.773l-0.003-0.005 8.959 13.823-8.959 13.822c-0.142 0.217-0.227 0.482-0.227 0.767 0 0.779 0.632 1.411 1.411 1.411 0.494 0 0.928-0.254 1.18-0.638l0.003-0.005 9.358-14.445c0.143-0.216 0.227-0.481 0.227-0.765 0-0 0-0 0-0v0c0.001-0.023 0.002-0.050 0.002-0.077s-0.001-0.054-0.002-0.080l0 0.004c0.001-0.023 0.002-0.050 0.002-0.078s-0.001-0.054-0.002-0.081l0 0.004c-0-0.285-0.085-0.55-0.231-0.771l0.003 0.005-9.358-14.444c-0.257-0.383-0.688-0.632-1.177-0.632-0.288 0-0.556 0.086-0.78 0.235l0.005-0.003z"></path></svg></i>',
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        responsive: [{
            breakpoint: 420,
            settings: {
              centerMode: false,
              slidesToShow: 2
            }
        }]
    });

    function stopAllVideos() {
      $('video').each(function() {this.pause();});
      $('.video-box').removeClass('play');
    };

    $('#recom-brand-slider').on('afterChange', function(){stopAllVideos();});

    // Попап
    if ($('.js-popup').length){
      $('.js-popup').magnificPopup({
         type: 'inline',
         removalDelay: 300,
         fixedContentPos: true,
         fixedBgPos: true,
         mainClass: 'mfp-fade',
         closeOnBgClick: true,
         closeMarkup: '<button title="%title%" type="button" class="mfp-close">закрыть <span>&#215;</span></button>',
         enableEscapeKey:true
      });
    };

    // var w = function openPopupCallback() {
    //   $.magnificPopup.open({
    //       items: { src: '#popup'},
    //       type: 'inline',
    //       mainClass: 'mfp-fade',
    //       closeOnBgClick: true,
    //       closeMarkup: '<button title="%title%" type="button" class="mfp-close">закрыть <span>&#215;</span></button>',
    //       enableEscapeKey:true
    //   }, 0);
    // };

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
         closeMarkup: '<button title="%title%" type="button" class="mfp-close">закрыть <span>&#215;</span></button>',
         tError: 'Контент не загрузился :(',
         tLoading: 'ЗАГРУЗКА...',
         cursor: 'mfp-ajax-cur',
         enableEscapeKey:true
        //  callbacks: { 
        //   open: function(){
        //     var w = function openPopupCallback() {
        //       $.magnificPopup.open({
        //           items: { src: '#popup'},
        //           type: 'inline',
        //           mainClass: 'mfp-fade',
        //           closeOnBgClick: true,
        //           closeMarkup: '<button title="%title%" type="button" class="mfp-close">закрыть <span>&#215;</span></button>',
        //           enableEscapeKey:true
        //       }, 0);
        //     };
        //   } 
        // }
      });
    };

    $(".form").submit(function(event) {
      event.preventDefault();
      $.ajax({
        type: 'POST',
        url: 'mail.php',
        data: $(this).serialize(),
        success: function(){  
          $.magnificPopup.open({items: {src: '#popup-thank'},type: 'inline',mainClass: 'mfp-fade'},0);
        },
        error: function() {
          $.magnificPopup.open({items: {src: '#popup-error'},type: 'inline',mainClass: 'mfp-fade',},0);
        }
      }).done(function() {
        $(".form").trigger("reset");
      });
      return false;
    });

     
});
$(window).on('load', showPage);