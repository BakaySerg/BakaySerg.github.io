<?php
if ( ! defined( 'ABSPATH' ) ) exit;

?>
		<footer class="s-footer" id="s-footer">
			<div class="container">
				<div class="row justify-content-between">
					<div class="col-md-4">
						<p><?php
          if(get_locale() == 'ru_RU'){
              the_field('footer_text','option');
          } else {
              the_field('footer_texten_en','option');
          }
          ?></p>
						<a href="#popup-callback" class="js-popup footer__callback-trigger"><?php _e('Feedback','laime');?><i><svg viewBox="0 0 32 32"><use xlink:href="#i-left2"/></svg></i></a>
					</div>
					<div class="col-md-4 footer__soc">
					<?php


    if( have_rows('social', 'option') ):


        while ( have_rows('social', 'option') ) : the_row();

          echo '<a href="'.get_sub_field('social_link').'"><i></i></a>';
            
        endwhile;

    else :

        // no rows found

    endif;

    ?>
					</div>
					<div class="col-md-4 footer__contacts">
						<a href="tel:<?php the_field('phone','option')?>"><i><svg viewBox="0 0 32 32"><use xlink:href="#i-tel"/></svg></i><span><?php the_field('phone','option')?></span></a><br>
						<a href="mailto:<?php the_field('email','option')?>"><i><svg viewBox="0 0 32 32"><use xlink:href="#i-mail"/></svg></i><span><?php the_field('email','option')?></span></a><br>
						<a href="pdf/catalog.pdf" target="_blank"><i></i><span>Каталог</span></a>
						<div class="footer__contacts-copy">&copy; <?php the_field('copyright','option')?> <?php echo date("Y"); ?></div>
					</div>
				</div>
				<!-- <a href="#" class="footer__up" title="Up"><svg viewBox="0 0 32 32"><use xlink:href="#i-up"/></svg></a> -->
				<button class="js-scroll-up"><svg viewBox="0 0 32 32"><use xlink:href="#i-right"/></svg></button>
			</div>
		</footer>

		<!-- Обратная связь -->
		<div id="popup-callback" class="small-pop-up mfp-hide">
			<div class="popup__header"><h3><?php _e('Feedback','laime');?></h3></div>
			<form action="#" class="form">
				<input type="hidden" name="subject" value="Обратная связь">
				<span>
					<input type="text" id="name" name="name" minlength="2">
					<label for="name"><span><?php _e('Name','laime');?></span></label>		      	
				</span>
				<span>
					<input type="tel" id="tel" name="tel" minlength="2" required>
					<label for="tel"><span><?php _e('Phone','laime');?></span></label>
				</span>
				<span>
					<input type="email" id="email" name="email" required>
					<label for="email"><span>Email</span></label>
				</span>
				<span>
					<textarea id="message" name="comment" cols="30" rows="10"></textarea>
					<label for="message"><span><?php _e('Your message','laime');?></span></label>
				</span>
				<br>
				<?php wp_nonce_field( 'send_id_nonce', 'spec_code' ); ?>
				<div class="text-center"><button class="form__btn" type="submit"><?php _e('Send','laime');?></button></div>
			</form>
		</div>

	</div><!-- /wrapper-->
<?php wp_footer(); ?>
<script type="text/javascript">
    jQuery(document).ready(function($){$(".js-popup-video").magnificPopup({items:{src:"<?php the_field('bl_video'); ?>"},type:"iframe",mainClass:"mfp-fade"});});
</script>
</body>
</html>