<?php
function mail_utf8($to, $from, $subject='(No subject)', $message='', $add_header='') {
    $headers = "MIME-Version: 1.0\r\n" . "Content-type: text/plain; charset=UTF-8\r\n" . "From: $from\r\n" . $add_header;
    mail($to, '=?UTF-8?B?'.base64_encode($subject).'?=', $message, $headers);
}

$recepient = 'bakay.sergey28@gmail.com';
$sitename = "https://";

$subject = trim($_POST["subject"]);
$tel = trim($_POST["tel"]);
// $email = trim($_POST["email"]);

$message = "Я оставил(а) свою заявку: ( $subject ) \nМои контакты: \nТелефон:  $tel\n";

$pagetitle = 'Новая заявка с сайта "'.$sitename.'"';

mail_utf8($recepient, $sitename, $pagetitle, $message, "Reply-To: $from\r\n");
?>