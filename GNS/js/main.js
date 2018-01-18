function showPage() {
    setTimeout(function() {
        document.body.classList.remove('js-loading');
        setTimeout(function() {
            $(".loader").fadeOut();
        }, 200);
    });
};
document.body.classList.add('js-loading');

function fixedMenu() {
    var w = $('.wrapper-inner').innerWidth();
    $('.fullscreen-menu-inner').css('width', w);
};

$(window).bind("ready load resize", function() {
    fixedMenu();
});

$(document).ready(function() {
    "use strict";

    //fullscreen-menu
    $(document).keydown(function(e) {
        if (e.keyCode === 27 && $('.menu-toggle').hasClass('on')) {
            $('.menu-toggle').removeClass('on');
            $('.fullscreen-menu').removeClass('is-showed');
        }
    });
    $('.menu-toggle').click(function() {
        $(this).toggleClass('on').parent('.sidebar-inner').toggleClass('fixed');
        if ($(this).hasClass('on')) { $('.fullscreen-menu').addClass('is-showed'); } else { $('.fullscreen-menu').removeClass('is-showed'); }
        if ($('.js-popup').length || $('.popup-gallery').length) { $.magnificPopup.close(); }
    });

    $('.menu__list-hidden').hide();
    $('.menu__list-item').on('click', function() {
        $(this).siblings('.menu__list-item').removeClass('opened').children('.menu__list-hidden').slideUp(200);
        $(this).toggleClass('opened').children('.menu__list-hidden').slideToggle(200);
    });

    // Scroll Up
    $(".js-scroll-up").click(function() {
        $("html, body").animate({ scrollTop: 0 }, { duration: 800 });
        return false;
    });

    //slider partners
    $('.about__partners-slider').slick({
        infinite: true,
        dots: true,
        speed: 500,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: true,
        responsive: [{
            breakpoint: 2560,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 4
            }
        }, {
            breakpoint: 1600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }]
    });

    //sliders project
    if ($("#slider-big").length) {
        $("#slider-big").slick({
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
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '11px',
                    draggable: true
                }
            }],
            asNavFor: '#slider-small'
        });
        $('#slider-small').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '#slider-big',
            arrows: false,
            dots: false,
            // prevArrow: $('.prev'),
            // nextArrow: $('.next'),
            centerMode: true,
            centerPadding: '0px',
            focusOnSelect: true
        });

        
        $('.projects__filter-off').on('click', function(e) {
          e.preventDefault();
          $('#slider-big').slick('slickUnfilter');
          $('#slider-small').slick('slickUnfilter');
       });
        $('.projects__filter-trigger').on('click', function(e) {

          e.preventDefault();
          $('#slider-big').slick('slickUnfilter');
          $('#slider-small').slick('slickUnfilter');
          var href = $(this).attr('href');
          $('#slider-big').slick('slickFilter', '[data-filter=' + href + ']');
          $('#slider-small').slick('slickFilter', '[data-filter=' + href + ']');
       });
      };

      //слайдер сертификатов
      $('.certif-slider').slick({
          responsive: true,
          infinite: true,
          dots: false,
          arrows: true,
          prevArrow: $('.prev'),
          nextArrow: $('.next'),
          slidesToShow: 5,
          // vertical: true,
          slidesToScroll: 1,
          responsive: [{
              breakpoint: 1440,
              settings: {
                  draggable: false,
                  slidesToShow: 4
              }
          }, {
              breakpoint: 767,
              settings: {
                  slidesToShow: 3,
                  // arrows: false,
                  draggable: true,
                  centerPadding: '40px'
              }
          }, {
              breakpoint: 420,
              settings: {
                  slidesToShow: 2,
                  // centerMode: true,
                  // arrows: false,
                  draggable: true,
                  centerPadding: '20px'
              }
          }]
      });

        // Попап
        if ($('.js-popup').length) {
            $('.js-popup').magnificPopup({
                type: 'inline',
                removalDelay: 300,
                fixedContentPos: true,
                fixedBgPos: true,
                mainClass: 'mfp-fade',
                closeOnBgClick: true,
                enableEscapeKey: true,
                callbacks: {
                    beforeOpen: function() { $('.menu-toggle').addClass('on').parent('.sidebar-inner').addClass('fixed'); },
                    close: function() { $('.menu-toggle').removeClass('on').parent('.sidebar-inner').removeClass('fixed'); }
                }
            });
        };

      // certificate - gallery      
      if ($(".popup-gallery").length) {
          $('.popup-gallery a').magnificPopup({
              // delegate: 'a',
              type: 'image',
              tLoading: 'Загрузка...',
              mainClass: 'mfp-zoom-in mfp-img-mobile',
              removalDelay: 300,
              fixedContentPos: true,
              fixedBgPos: true,
              autoFocusLast: true,
              midClick: true,
              gallery: {
                  enabled: true,
                  navigateByImgClick: true
                  // preload: [0,1] 
              },
              image: {
                  tError: '<a href="%url%">Фото #%curr%</a> не загрузилось.',
                  titleSrc: function(item) {
                      return item.el.attr('title');
                  }
              },
               callbacks: {
                    beforeOpen: function() { $('.menu-toggle').addClass('on').parent('.sidebar-inner').addClass('fixed'); },
                    close: function() { $('.menu-toggle').removeClass('on').parent('.sidebar-inner').removeClass('fixed'); }
                }
          });
      };

      // VIDEO Заменить на свою ссылку после "/watch?v= ..."
      $('.js-video button').magnificPopup({
          items: {
              src: 'https://www.youtube.com/watch?v=0rq42Xe9Mv4'
          },
          type: 'iframe',
          mainClass: 'mfp-rotate-bottom',
          callbacks: {
              beforeOpen: function() { $('.menu-toggle').addClass('on'); },
              close: function() { $('.menu-toggle').removeClass('on'); }
          },
      });

      //scrollbar for fullscreen menu
      if ($('.menu__list-box').length) {
          $('.menu__list-box').mCustomScrollbar({
              axis: "y",
              scrollInertia: 300,
              contentTouchScroll: 25,
              setHeight: '432'
          });
      };

      //service pseudo-tabs
      if ($('.service__pseudo-tabs').length) {
          var quantity = $('.service__pseudo-tabs a').length;
          $('.service__pseudo-tabs a').css('width', 100 / quantity + '%');
          var pseudoActive = $('.service__pseudo-tabs a').hasClass('active');
          $('.service__pseudo-tabs a').mouseenter(function() {
              $(this).addClass('active').siblings().removeClass('active');
          }).mouseleave(function() {
              $(this).removeClass('active').siblings().removeClass('active');
              $('a.default-active').addClass('active');
          });
      };

});
$(window).on('load', showPage);