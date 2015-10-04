<?php

$to = "deibyod@gmail.com";
$to_name = "Deiby Od";
$from = $_POST['email'];
$subject = 'TecnologiasOd: Mensaje recibido';
$name = $_POST['name'];
$mensaje = $_POST['message'];
$mensaje = wordwrap($mensaje, 70, "\r\n");
$headers = 'From: ' . $from . "\r\n" .
    'Reply-To: myemail@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

require 'php/phpmailer/PHPMailerAutoload.php';

//Create a new PHPMailer instance
$mail = new PHPMailer;
//Set who the message is to be sent from
$mail->setFrom($from, $name);
//Set an alternative reply-to address
$mail->addReplyTo($from, $name);
//Set who the message is to be sent to
$mail->addAddress($to, $to_name);
//Set the subject line
$mail->Subject = $subject;
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
$mail->msgHTML($mensaje, dirname(__FILE__));
//Replace the plain text body with one created manually
$mail->AltBody = $mensaje;

//send the message, check for errors
if (!$mail->send()) {
    echo "Error: " . $mail->ErrorInfo;
} else {
    echo "Message sent! - Mensaje enviado";
}
