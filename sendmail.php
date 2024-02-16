<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';
require 'phpmailer/src/Exception.php';

// Получаем данные из формы
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$text = $_POST['text'];

// Создаем новый экземпляр класса PHPMailer
$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8'; // Устанавливаем кодировку сообщения
$mail->IsHTML(true);

try {
    // Настройки SMTP
    $mail->isSMTP();
    $mail->Host = 'smtp.mail.ru';
    $mail->SMTPAuth = true;
    $mail->Username = 'v_kozintcev@mail.ru'; // Укажите здесь вашу почту
    $mail->Password = 'witzPgsy0vFpwzJA1NTq'; // Укажите здесь пароль от почты
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    // Отправитель и получатель
    $mail->setFrom('v_kozintcev@mail.ru', 'Your Name'); // Укажите здесь вашу почту и имя
    $mail->addAddress('v_kozintcev@mail.ru', 'Recipient Name'); // Укажите здесь получателя и имя

    // Тема письма
    $mail->Subject = 'Уведомление о новом заказе';

    // Тело письма
    $mail->Body = "Имя: $name\nEmail: $email\nТелефон: $phone\nТекст: $text";

    // Отправка письма
    $mail->send();

    echo 'Письмо успешно отправлено';

} catch (Exception $e) {
    echo 'Не удалось отправить письмо. Ошибка: ', $mail->ErrorInfo;
}
?>