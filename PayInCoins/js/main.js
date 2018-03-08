function showPage() {
  setTimeout(function(){
      document.body.classList.remove('js-loading');
      setTimeout(function(){
      $(".loader").fadeOut();
      },400);
  });
};
document.body.classList.add('js-loading');

window.addEventListener("load", showPage, false);


$(document).ready(function(){
  "use strict";

  // $('h1 span,h2 span').hover(function() {
  //    $(this).addClass('anim-play');
  // });

  // Ruffles

    $('.intro__remark').addClass("anim-play");
    $('.s-project .col-sm-6').addClass("trnsl").viewportChecker({
      classToAdd: 'anim-play',
      offset: 50
    });
    $('h2,h1,.form,tariffs__list li').viewportChecker({
      classToAdd: 'anim-play',
      offset: 220
    });
    $('.how__steps,.s-tariffs').viewportChecker({
      classToAdd: 'anim-play',
      offset: 90
    });

  //form
  $(".form").submit(function(event) {
    event.preventDefault();
    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: $(this).serialize(),
      success: function(){  
        $.magnificPopup.open({items: {src: '#pop-up'},type: 'inline',mainClass: 'mfp-fade'},0);
        setTimeout(function(){$.magnificPopup.close()},3000);

        // $.magnificPopup.open({
        //   items: {
        //     src: '<div class="white-popup">Dynamically created popup</div>',
        //     type: 'inline'
        //   }
        // });
      },
      error: function() {
        $.magnificPopup.open({items: {src: '#error'},type: 'inline',mainClass: 'mfp-fade',},0);
        setTimeout(function(){$.magnificPopup.close()},3000);
      }
    }).done(function() {
      $(".form").trigger("reset");
    });
    return false;
  });

  $('.btn').click(function() {
  	const t = $(this);
    t.addClass('is-active');
    setTimeout(function(){t.removeClass('is-active')},660);
  });
     
});
$(window).on('load', showPage);