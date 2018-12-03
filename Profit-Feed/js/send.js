jQuery(document).ready(function($){
    //form
    $(".form").submit(function(event) {
      var _data = $(this).serialize() + '&action=' + 'make_sending';
      event.preventDefault();
      
      $.ajax({
        type: 'POST',
        url: MaAjax.ajaxurl,
        data: _data,
        success: function(data){
           //alert(data);
           $('#m_here').html(MaAjax.form_success).fadeIn();   
        },
        error: function(data) {
            //alert(data);
            $('#m_here').html(MaAjax.form_error).fadeIn();
        }
      }).done(function() {
        $(".form").trigger("reset");
      });
      return false;
    });    
});