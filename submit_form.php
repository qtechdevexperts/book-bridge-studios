<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'lib/PHPMailer/src/Exception.php';
require 'lib/PHPMailer/src/PHPMailer.php';
require 'lib/PHPMailer/src/SMTP.php';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
  if (isset($_POST['email'])) {
    $isModalForm = false;
  	$mailto = "info@bookbridgestudio.com"; 
  	$vars = array();
    $vars['name'] = $_POST['name'];
    $vars['email'] = $_POST['email'];
    $vars['contact'] = $_POST['contact'];
    $vars['service'] = $_POST['service'];
    $vars['message'] = $_POST['message'];
  
  	$subject = "New Email From Your Contact Form | " . $vars['txtEmail'];
  
   $message = 
          "User Name: " . $vars['name'] . "<br/>"
        . "User Email: " .  $vars['email'] . "<br/>"
        . "User Contact: " .  $vars['contact'] . "<br/>"
        . "User Service: " . $vars['service'] . "<br/>"
        . "User Message: " . $vars['message'] . "<br/>";
  
//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);
$mailtoClient = new PHPMailer(true);

try {
    //Server settings
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'mail.bookbridgestudio.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'support@bookbridgestudio.com';                     //SMTP username
    $mail->Password   = 'k;M%BG.A;M8*';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('no-reply@bookbridgestudio.com', 'Book Bridge Studio');
    $mail->addAddress('info@bookbridgestudio.com', $vars['name']);     

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $subject;
    $mail->Body    = $message;
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    // $mailtoClient->isSMTP();                                            //Send using SMTP
    // $mailtoClient->Host       = 'mail.animationdunk.com';                     //Set the SMTP server to send through
    // $mailtoClient->SMTPAuth   = true;                                   //Enable SMTP authentication
    // $mailtoClient->Username   = 'leads@animationdunk.com';                     //SMTP username
    // $mailtoClient->Password   = 'V7u0BZmV6lgK';                               //SMTP password
    // $mailtoClient->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    // $mailtoClient->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    // $mailtoClient->setFrom('noreply@animationdunk.com', 'Animation Dunk');
    // $mailtoClient->addAddress($vars['txtEmail'], $vars['txtName']);     

    //Content
    // $mailtoClient->isHTML(true);                                  //Set email format to HTML
    // $mailtoClient->Subject = $subject2;
    // $mailtoClient->Body    = $messageToClient;
    // $mailtoClient->AltBody = 'This is the body in plain text for non-HTML mail clients';

	//Save to data.txt file
	$saveData = '{ "UserName": "' . $vars['name'] . '",' . '"UserEmail": "' .  $vars['email'] . '",' . '"UserMessage": "' .  $vars['message'] . '"UserContact": "' .  $vars['contact'] . '",' .'"}, ';
	$fp = fopen('data.txt', 'a');
	fwrite($fp, $saveData);
	fclose($fp);

    $mail->send();
    // $mailtoClient->send();
    echo 'Message has been sent';
  	// header('Location: ./index.php');

} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
  
  }
 ?>