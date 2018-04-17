<?php
function mail_utf8($to, $from, $subject='(No subject)', $message='', $add_header='') {
    $headers = "MIME-Version: 1.0\r\n" . "Content-type: text/plain; charset=UTF-8\r\n" . "From: $from\r\n" . $add_header;
    mail($to, '=?UTF-8?B?'.base64_encode($subject).'?=', $message, $headers);
}

$recepient = 'bakay.sergey28@gmail.com';
$sitename = "https://sadhayat.ru/";

$subject = trim($_POST["subject"]);
$name = trim($_POST["name"]);
$tel = trim($_POST["tel"]);
$email = trim($_POST["email"]);
$comment = trim($_POST["comment"]);
$equipment = trim($_POST["equipment"]);

$message = "Я оставил свою заявку: ( $subject ) \nМои контакты: \nИмя:  $name\nТелефон:  $tel\nEmail:  $email\n\n$comment \n$equipment";

$pagetitle = 'Новая заявка с сайта "'.$sitename.'"';

mail_utf8($recepient, $sitename, $pagetitle, $message, "Reply-To: $from\r\n");
?>