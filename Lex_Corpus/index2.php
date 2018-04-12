<?php 
	include 'variables.php';
?>
<!DOCTYPE html>
<html lang="ru" class="no-js">
<head>
	<meta charset="utf-8"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
	<meta name="viewport" content="width=device-width, initial-scale=1"/>
	<meta name="theme-color" content="#3b041e"/>
	<!-- <meta property="og:image" content="path/to/image.jpg"> -->
	<title><?=$TITLE ['SELF'] ?></title>
	<meta name="description" content="site descr"/>
	<meta name="keywords" content="site,keywords"/>
	<link rel="shortcut icon" href="img/favicon/favicon.png" type="image/x-icon"/>
	<link rel="apple-touch-icon" sizes="180x180" href="img/favicon/apple-touch-icon-180x180.png"/>
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700|Roboto+Slab:400,700&amp;subset=cyrillic" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="css/bootstrap-grid.css"/>
	<link rel="stylesheet" type="text/css" href="js/slick/slick-theme.css"/>
	<link rel="stylesheet" type="text/css" href="css/magnific-popup.css"/>
	<link rel="stylesheet" type="text/css" href="css/style.css"/>
	<link rel="stylesheet" type="text/css" href="css/responsive.css"/>
	<!--[if lt IE 8]>
	<p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p><![endif]-->
	<!--[if IE 9]>
	<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->
</head>

<body class="js-loading">
	<!-- preloader -->
	<div class="loader">
		<div class="decolines decolines--fixed">
		   <div class="decoline"></div>
		   <div class="decoline"></div>
		   <div class="decoline"></div>
		   <div class="decoline"></div>
		   <div class="decoline"></div>
		</div>
	</div>
	<!-- svg-sprite -->
	<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
		<defs>
			<symbol id="i-tel" viewBox="0 0 22 32"><path d="M21.354 30.16c0 0-4.694-9.058-4.694-9.058-0.010 0.004-2.632 1.292-2.752 1.346-2.986 1.45-9.066-10.426-6.146-11.99 0 0 2.776-1.368 2.776-1.368s-4.656-9.090-4.656-9.090c-0.002 0-2.762 1.362-2.808 1.384-9.602 5.008 5.644 34.644 15.466 30.154 0.162-0.074 2.804-1.372 2.814-1.378z"></path></symbol>
			<symbol id="i-gal" viewBox="0 0 40 32"><path d="M15.158 30.427c0 0-15.158-14.548-15.158-14.548s4.701-4.832 4.701-4.832c0 0 10.368 9.891 10.368 9.891s20.564-20.945 20.564-20.945c0 0 4.788 4.744 4.788 4.744s-25.263 25.689-25.263 25.689z"></path></symbol>
			<symbol id="i-resize" viewBox="0 0 32 32"><path fill="#000" d="M8.93 25.9c0 0 5.656 6.1 5.656 6.1s-14.586 0-14.586 0c0 0 0-14.586 0-14.586s6.102 5.658 6.102 5.658c0 0 16.968-16.972 16.968-16.972s-5.656-6.1-5.656-6.1c0 0 14.586 0 14.586 0s0 14.584 0 14.584c0 0-6.102-5.656-6.102-5.656s-16.968 16.972-16.968 16.972z"></path></symbol>
		</defs>
	</svg>

	<!-- wrapper -->
	<div class="wrapper">

		<!-- t o p -->
		<div id="top-fixed" class="top">
			<div class="top__navbar">
				<div class="container">
					<div class="logo">
						<a class="logo__link" href="index.html">
							<img src="img/logo-sm.png" alt="logo">
						</a>
					</div>
					<nav class="navbar navbar-default">
						<div class="navbar-header top__link">
							<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#expand">
								<i class="icon-bar"></i>
								<i class="icon-bar"></i>
								<i class="icon-bar"></i>
							</button>
						</div>
						<div id="expand" class="collapse navbar-collapse">
							<ul id="justify" class="nav navbar-nav">
								<li><a class="js-scroll-up" href="#"><?=$TOP ['LINK_1'] ?></a></li>
								<li><a class="js-scroll" href="#s-advant"><?=$TOP ['LINK_2'] ?></a></li>
								<li><a class="js-scroll" href="#s-etaps"><?=$TOP ['LINK_3'] ?></a></li>
								<li><a class="js-scroll" href="#s-clients"><?=$TOP ['LINK_4'] ?></a></li>
								<li><a class="js-scroll" href="#s-contact"><?=$TOP ['LINK_5'] ?></a></li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
			<div class="top__contacts">
				<div class="container">
					<div class="row justify-content-between align-items-center">
						<address class="col-4 offset-lg-2 header__address"><?=$GENERAL ['ADDRESS'] ?></address>
						<div class="col-3"><a href="tel:74993508720" class="top-tel">7 (499) 350-87-20</a></div>
						<div class="col-3"><a href="#popup-callback" class="contact-callback js-popup-callback"><?=$GENERAL ['CALLBACK_TEXT'] ?></a></div>
					</div>
				</div>
			</div>
		</div>
		<!-- header -->
		<header class="header">
			<div class="container">
				<div class="row">
					<div class="header__logo">
						<i class="header__logo-before" data-0="transform: translateY(0%)" data-460="transform: translateY(63%)"></i>
						<i class="header__logo-after" data-0="transform: translateY(0%)" data-400="transform: translateY(-190%)"></i>
						<img src="img/logo-lg.png" alt="logo" data-0="transform: translateY(0%)" data-400="transform: translateY(-170%)">
					</div>
					<address class="col-3 header__address"><?=$GENERAL ['ADDRESS'] ?></address>
					<div class="col-3 header__contact">
						<a href="tel:74993508720" class="contact-tel"><svg viewBox="0 0 22 32"><use xlink:href="#i-tel"/></svg> 7 (499) 350-87-20</a>
						<a href="#popup-callback" class="contact-callback js-popup-callback"><?=$GENERAL ['CALLBACK_TEXT'] ?></a>
					</div>
				</div>
			</div>
		</header>

		<div class="lines">
			<!--  I n t r o  -->
			<section class="s-intro">
				<div class="container">
					<div class="row">
						<div class="col-lg-6 offset--1 intro__title" data-0="transform: translateY(0%)" data-700="transform: translateY(-5%)">
							<h1><?=$INTRO ['H1'] ?></h1>
							<strong><svg viewBox="0 0 32 32"><use xlink:href="#i-gal"/></svg><?=$INTRO ['TEXT_1'] ?></strong>
							<strong><svg viewBox="0 0 32 32"><use xlink:href="#i-gal"/></svg><?=$INTRO ['TEXT_2'] ?></strong>
						</div>
						<div class="col-lg-8 offset--1 intro-slider-box">
							<div id="intro-slider" class="intro-slider">
								<div class="slide"><img src="img/intro-slider/1.jpg" alt="s"></div>
								<div class="slide"><img src="img/intro-slider/2.jpg" alt="s"></div>
								<div class="slide"><img src="img/intro-slider/3.jpg" alt="s"></div>
								<div class="slide"><img src="img/intro-slider/4.jpg" alt="s"></div>
								<div class="slide"><img src="img/intro-slider/5.jpg" alt="s"></div>
								<div class="slide"><img src="img/intro-slider/6.jpg" alt="s"></div>
								<div class="slide"><img src="img/intro-slider/7.jpg" alt="s"></div>
								<div class="slide"><img src="img/intro-slider/8.jpg" alt="s"></div>
							</div>
						</div>
						<div class="col-lg-7 mt--230">
							<div class="form-box" data-0="transform: translateY(2%)" data-700="transform: translateY(-34%)">
								<strong class="form-box__title"><?=$FORM ['Consult'] ?></strong>
								<div class="form-box__remark"><?=$FORM ['Remark_1'] ?></div>
								<form action="#" class="form">
									<input type="hidden" name="subject" value="<?=$FORM ['Subject_2'] ?>">
									<input type="tel" name="tel" placeholder="<?=$GENERAL ['Phone_placeholder'] ?>" required>
									<button class="form__btn" type="submit"><?=$FORM ['Btn_1'] ?></button>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div class="intro__decor">
					<i style="background-image: url(img/parallax/lg-left.png)" data-0="transform: translateY(35%)" data-500="transform: translateY(-210%)"></i>
					<i style="background-image: url(img/parallax/md-right.png)" data-0="transform: translateY(6%)" data-500="transform: translateY(-180%)"></i>
					<i style="background-image: url(img/parallax/sm-top.png)" data-0="transform: translateY(1%)" data-500="transform: translateY(-120%)"></i>
					<i style="background-image: url(img/parallax/sm-center.png)" data-0="transform: translateY(12%)" data-500="transform: translateY(-78%)"></i>
					<i style="background-image: url(img/parallax/xs-bottom.png)" data-0="transform: translateY(0%)" data-500="transform: translateY(-22%)"></i>
				</div>					
			</section>

			<!-- list-->
			<section class="s-list">
				<div class="container">
					<div class="row">
						<div class="col-md-3">
							<div class="list__item">
								<svg viewBox="0 0 250 220" preserveAspectRatio="none">
									<polyline fill="none" stroke="#e0d8b9" stroke-width="6px" points="4,40 4,4 246,4 246,216 4,216 4,180"/>
									<polyline class="polyline2" fill="none" stroke="#fdd221" stroke-width="6px" points="4,40 4,4 246,4 246,216 4,216 4,180"/>
								</svg>
								<h3><?=$S_2 ['TEXT_1'] ?></h3>
							</div>
						</div>
						<div class="col-md-3">
							<div class="list__item">
								<svg viewBox="0 0 250 220" preserveAspectRatio="none">
									<polyline fill="none" stroke="#e0d8b9" stroke-width="6px" points="4,40 4,4 246,4 246,216 4,216 4,180"/>
									<polyline class="polyline2" fill="none" stroke="#fdd221" stroke-width="6px" points="4,40 4,4 246,4 246,216 4,216 4,180"/>
								</svg>
								<h3><?=$S_2 ['TEXT_2'] ?></h3>
							</div>
						</div>
						<div class="col-md-3">
							<div class="list__item">
								<svg viewBox="0 0 250 220" preserveAspectRatio="none">
									<polyline fill="none" stroke="#e0d8b9" stroke-width="6px" points="4,40 4,4 246,4 246,216 4,216 4,180"/>
									<polyline class="polyline2" fill="none" stroke="#fdd221" stroke-width="6px" points="4,40 4,4 246,4 246,216 4,216 4,180"/>
								</svg>
								<h3><?=$S_2 ['TEXT_3'] ?></h3>
							</div>
						</div>
						<div class="col-md-3">
							<div class="list__item">
								<svg viewBox="0 0 250 220" preserveAspectRatio="none">
									<polyline fill="none" stroke="#e0d8b9" stroke-width="6px" points="4,40 4,4 246,4 246,216 4,216 4,180"/>
									<polyline class="polyline2" fill="none" stroke="#fdd221" stroke-width="6px" points="4,40 4,4 246,4 246,216 4,216 4,180"/>
								</svg>
								<h3><?=$S_2 ['TEXT_4'] ?></h3>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!--  Преимущества  -->
			<section class="s-advant" id="s-advant">
				<div class="container">
					<div class="h2-box">
						<h2><?=$S_3 ['H2'] ?></h2>
					</div>
					<div class="row">
						<div class="col-md-6 advant__pict" >
							<img src="img/advant.jpg" alt="hands" data-anchor-target="#s-advant" data-bottom-top="transform: translateY(40%)" data-top-bottom="transform: translateY(-50%)">
						</div>
						<div class="col-md-5 offset-md-1 advant__text">
							<div class="advant__text-item">
								<i style="background-image: url(img/clock.svg)"></i>
								<h4><?=$S_3 ['H4_1'] ?></h4>
								<p><?=$S_3 ['TEXT_1'] ?></p>
							</div>
							<div class="advant__text-item">
								<i style="background-image: url(img/list.svg)"></i>
								<h4><?=$S_3 ['H4_2'] ?></h4>
								<p><?=$S_3 ['TEXT_2'] ?></p>
							</div>
							<div class="advant__text-item">
								<i style="background-image: url(img/diagram.svg)"></i>
								<h4><?=$S_3 ['H4_3'] ?></h4>
								<p><?=$S_3 ['TEXT_3'] ?></p>
							</div>
							<a href="pdf/presentation.pdf" download="presentation.pdf" class="btn-gold"><?=$S_3 ['Btn_1'] ?></a>
						</div>
					</div>
				</div>
			</section>

			<!--  etaps  -->
			<section class="s-etaps disablewheel" id="s-etaps">
				<div class="container">
					<div class="h2-box">
						<h2><?=$S_4 ['h2'] ?></h2>
					</div>
					<div class="row">
						<div class="col-md-7 offset-5">
							<div class="etaps-img-slider" id="etaps-img-slider">
								<div class="slide"><img src="img/etaps/1.jpg" alt="e"></div>
								<div class="slide"><img src="img/etaps/2.jpg" alt="e"></div>
								<div class="slide"><img src="img/etaps/3.jpg" alt="e"></div>
								<div class="slide"><img src="img/etaps/4.jpg" alt="e"></div>
								<div class="slide"><img src="img/etaps/5.jpg" alt="e"></div>
								<div class="slide"><img src="img/etaps/6.jpg" alt="e"></div>
								<div class="slide"><img src="img/etaps/7.jpg" alt="e"></div>
							</div>
						</div>
						<div class="col-md-8 etaps-steps-slider-box">
							<div class="etaps-steps-slider" id="etaps-steps-slider">
								<div class="slide">
									<div class="form-box">
										<div class="form-box__remark"><?=$FORM ['Remark_2'] ?></div>
										<form action="#" class="form">
											<input type="hidden" name="subject" value="<?=$FORM ['Subject_1'] ?>">	
											<input type="tel" name="tel" placeholder="<?=$GENERAL ['Phone_placeholder'] ?>" required>
											<button class="form__btn" type="submit"><?=$FORM ['Btn_2'] ?></button>
										</form>
									</div>
								</div>
								<div class="slide">
									<div class="form-box">
										<h4><?=$S_4 ['TITLE_1'] ?></h4>
										<p><?=$S_4 ['Text_1'] ?></p>
									</div>
								</div>
								<div class="slide">
									<div class="form-box">
										<h4><?=$S_4 ['TITLE_2'] ?></h4>
										<p><?=$S_4 ['Text_2'] ?></p>
									</div>
								</div>
								<div class="slide">
									<div class="form-box">
										<h4><?=$S_4 ['TITLE_3'] ?></h4>
										<p><?=$S_4 ['Text_3'] ?></p>
									</div>
								</div>
								<div class="slide">
									<div class="form-box">
										<h4><?=$S_4 ['TITLE_4'] ?></h4>
										<p><?=$S_4 ['Text_4'] ?></p>
									</div>
								</div>
								<div class="slide">
									<div class="form-box">
										<h4><?=$S_4 ['TITLE_5'] ?></h4>
										<p><?=$S_4 ['Text_5'] ?></p>
									</div>
								</div>
								<div class="slide">
									<div class="form-box">
										<h4><?=$S_4 ['TITLE_6'] ?></h4>
										<p><?=$S_4 ['Text_6'] ?></p><br>
										<p><?=$S_4 ['Text_7'] ?></p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!--  clients  -->
			<!-- data-500-bottom="opacity:0" data-100-bottom="opacity: 1" -->
			<section class="s-clients" id="s-clients">
				<div class="container">
					<div class="h2-box">
						<h2><?=$S_5 ['TITLE_1'] ?></h2>
					</div>
					<div class="clients__box">
						<div class="clients__item"><img src="img/clients/1.png" alt="c"></div>
						<div class="clients__item"><img src="img/clients/2.png" alt="c"></div>
						<div class="clients__item"><img src="img/clients/3.png" alt="c"></div>
						<div class="clients__item"><img src="img/clients/4.png" alt="c"></div>
						<div class="clients__item"><img src="img/clients/5.png" alt="c"></div>
						<div class="clients__item"><img src="img/clients/6.png" alt="c"></div>
						<div class="clients__item"><img src="img/clients/7.png" alt="c"></div>
						<div class="clients__item"><img src="img/clients/8.png" alt="c"></div>
						<div class="clients__item"><img src="img/clients/9.png" alt="c"></div>
						<div class="clients__item"><img src="img/clients/10.png" alt="c"></div>
						<div class="clients__item"><img src="img/clients/11.png" alt="c"></div>
						<div class="clients__item"><img src="img/clients/12.png" alt="c"></div>
						<div class="clients__item"><img src="img/clients/13.png" alt="c"></div>
						<div class="clients__item"><img src="img/clients/14.png" alt="c"></div>
						<div class="clients__item"><img src="img/clients/15.png" alt="c"></div>
						<div class="clients__item"><img src="img/clients/16.png" alt="c"></div>
						<div class="clients__item"><img src="img/clients/17.png" alt="c"></div>
						<div class="clients__item"><img src="img/clients/18.png" alt="c"></div>
						<div class="clients__item"><img src="img/clients/19.png" alt="c"></div>
						<div class="clients__item"><img src="img/clients/20.png" alt="c"></div>
					</div>
				</div>
			</section>

			<!--  any  -->
			<!-- data-500-bottom="opacity:0" data-center-top="opacity: 1" -->
			<section class="s-any">
				<div class="container">
					<div class="h2-box">
						<h2><?=$S_6 ['TITLE_1'] ?></h2>
					</div>
				</div>
				<div class="container">
					<div class="any-slider-row">
						<div class="any-slider">
							<div class="slide"><img src="img/industry-1.jpg" alt="a"></div>
							<div class="slide"><img src="img/industry-2.jpg" alt="a"></div>
							<div class="slide"><img src="img/industry-3.jpg" alt="a"></div>
							<div class="slide"><img src="img/industry-2.jpg" alt="a"></div>
						</div>
					</div>
				</div>
			</section>

		</div><!-- lines -->

		<!--  contact  -->
		<section class="s-contact" id="s-contact">
			<div id="map"></div>
			<div class="container clearfix">
				<div class="contact__box">
					<div class="contact__text">
						<div class="contact__address">
							<h2><?=$S_7 ['TITLE_1'] ?></h2>
							<b><?=$S_7 ['Text_1'] ?></b>
							<address><?=$GENERAL ['ADDRESS'] ?></address>
							<div class="header__contact">
								<a href="tel:74993508720" class="contact-tel"><svg viewBox="0 0 22 32"><use xlink:href="#i-tel"/></svg> 7 (499) 350-87-20</a>
								<a href="#popup-callback" class="contact-callback js-popup-callback"><?=$GENERAL ['CALLBACK_TEXT'] ?></a>
							</div>
						</div>
						<div class="form-box">
							<strong class="form-box__title"><?=$FORM ['Request'] ?></strong>
							<div class="form-box__remark"><?=$FORM ['Remark_3'] ?></div>
							<form action="#" class="form">
								<input type="hidden" name="subject" value="<?=$FORM ['Subject_2'] ?>">
								<input type="tel" name="tel" placeholder="<?=$GENERAL ['Phone_placeholder'] ?>" required>
								<button class="form__btn" type="submit"><?=$FORM ['Btn_1'] ?></button>
							</form>
						</div>
					</div>
				</div>
				<i class="contact__resize"><svg viewBox="0 0 32 32"><use xlink:href="#i-resize"/></svg></i>
			</div>
		</section>

		<!-- F o o t e r -->
		<footer class="s-footer">
			<div class="container">
				<div class="row">
					<div class="footer__logo">
						<img src="img/logo-sm.png" alt="logo">
					</div>
					<div class="footer__copy">
						<?=$F_8 ['Text_1'] ?>
					</div>
				</div>
			</div>
		</footer>

	</div><!-- /wrapper-->

	<!-- Обратный звонок -->
	<div id="popup-callback" class="small-pop-up mfp-hide">
		<div class="form-box">
			<strong class="form-box__title"><?=$FORM ['Callback'] ?></strong>
			<div class="form-box__remark"><?=$FORM ['Remark_1'] ?></div>
			<form action="#" class="form">
				<input type="hidden" name="subject" value="<?=$FORM ['Subject_3'] ?>">
				<input type="tel" name="tel" placeholder="<?=$GENERAL ['Phone_placeholder'] ?>" required>
				<button class="form__btn" type="submit"><?=$FORM ['Btn_3'] ?></button>
			</form>
		</div>
	</div>

	<!-- Success -->
	<div id="popup-thank" class="small-pop-up mfp-hide">
		<div class="form-box">
		   <strong class="form-box__title"><?=$P_1 ['TITLE_1'] ?></strong><br>
		   <p class="is-argum-text"><?=$P_1 ['Text_1'] ?></p><br>
		</div>
	</div>
	<!-- Error -->
	<div id="popup-error" class="small-pop-up mfp-hide">
		<div class="form-box">
		   <strong class="form-box__title"><?=$P_2 ['TITLE_1'] ?></strong><br>
		   <p class="is-argum-text"><?=$P_2 ['Text_1'] ?></p><br>
		</div>
	</div>

	<script src="js/jquery-3.2.1.min.js"></script>
	<script src="js/smoothscroll.js"></script>
	<script src="js/viewportchecker.js"></script>
	<script src="js/skrollr.min.js"></script>
	<script src="js/slick/slick.min.js"></script>
	<script src="js/jquery.magnific-popup.min.js"></script>
	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyATCHV8sdVBXNg0sw2XhPOEX2jMUGx05ag"></script>
	<script src="js/main.js"></script>
	<script defer src="js/bootstrap.min.js"></script>
</body>
</html>