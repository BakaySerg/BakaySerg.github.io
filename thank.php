<?php
// отправка текстового письма в кодировке UTF-8
function mail_utf8($to, $from, $subject='(No subject)', $message='', $add_header='') {
    $headers = "MIME-Version: 1.0\r\n" . "Content-type: text/plain; charset=UTF-8\r\n" . "From: $from\r\n" . $add_header;
    mail($to, '=?UTF-8?B?'.base64_encode($subject).'?=', $message, $headers);
}

$recepient = 'emil_ne@mail.ru';         //свой Email
$sitename = "Embeatz.com";              //свой сайт

$name = trim($_POST["name"]);
$from = trim($_POST["email"]);
$comment = trim($_POST["comment"]);

$message = "Пришла заявка с нашего сайта, \n\n Имя потенциального клиента: $name\n Email: $from \n Сообщение следущее: $comment";

$pagetitle = 'Новая заявка с сайта "'.$sitename.'"';
$subject = $pagetitle;

//mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $sitename");
mail_utf8($recepient, $from, $pagetitle, $message, "Reply-To: $from\r\n");
?>
<!DOCTYPE html>
<html lang="ru" class="no-js">
  <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <title>Web | graphic design</title>
      <meta name="description" content="Дизайн и вэб-разработка сайтов, с использованием современных технологий и тендеций" />
      <meta name="keywords" content="лендинг,лендинг под ключ,дизайн сайтов,верстка сайтов,разработка сайтов" />
      <meta name="author" content="EmBeatz.com"/>

      <link rel="shortcut icon" href="img/favicon/favicon.png" type="image/x-icon"/>
      <link rel="apple-touch-icon" href="img/favicon/apple-touch-icon.png"/>
      <link rel="apple-touch-icon" sizes="72x72" href="img/favicon/apple-touch-icon-72x72.png"/>
      <link rel="apple-touch-icon" sizes="114x114" href="img/favicon/apple-touch-icon-114x114.png"/>

      <link rel="stylesheet" type="text/css" href="css/style.css"/> 
      <style>
        .thank-header-sec {height: 100vh; padding-bottom: 20vh; display: -ms-flex; display: flex; align-items: center; justify-content: center;} 
        .title{text-align: center;margin-bottom: .5em; font-size: 2.4em; color: #4e4968;}
        .galochka {display: inline-block; border-radius: 50%; border: 2px solid; width: 2em; height: 2em; line-height: 2em; margin-top: .5em;}
        strong.b {display: block;text-align: center; font-size: 1.5em;color: #1a162f;}
      </style>
      <!--[if lt IE 8]>
      <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p><![endif]-->
      <!--[if IE 9]>
      <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->
  </head>
  <body id="page-type" class="classic">
      <div class="wrapper">
        <header class="thank-header-sec">
          <div class="thank-container">
                <h1 class="title">
                  <span>Благодарим за Вашу заявку!</span><br>
                  <span class="galochka">✓</span>
                </h1>
                <strong class="b"><span>Мы свяжемся с&nbsp;Вами в&nbsp;ближайшее&nbsp;время</span></strong>
          </div>

        </header>
        </div>
      <script>
        (function() {
          setTimeout(redirectPage, 3000);          
          function redirectPage() {
              window.location = 'index.html';
            }     
        })();
      </script>
   </body>
</html>