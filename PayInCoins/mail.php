<?php
// отправка текстового письма в кодировке UTF-8
function mail_utf8($to, $from, $subject='(No subject)', $message='', $add_header='') {
    $headers = "MIME-Version: 1.0\r\n" . "Content-type: text/plain; charset=UTF-8\r\n" . "From: $from\r\n" . $add_header;
    mail($to, '=?UTF-8?B?'.base64_encode($subject).'?=', $message, $headers);
}

$recepient = 'parts@amur.trade';  //*свой Email*/
$sitename = "parts...";								//сюда вставить свой сайт
$from = 'www.parts....';

$name = trim($_POST["name"]);
$tel = trim($_POST["tel"]);
$subject = trim($_POST["subject"]);

$message = "Я подал(а) заявку, $subject\n Имя: $name\n Телефон: $tel\n Количество: $quantity\n Доставить: $deliv";

$pagetitle = 'Новая заявка с сайта "'.$sitename.'"';

mail_utf8($recepient, $from, $pagetitle, $message, "Reply-To: $from\r\n");
?>