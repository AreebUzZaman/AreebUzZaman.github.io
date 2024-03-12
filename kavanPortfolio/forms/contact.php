<?php
  /**
  * Requires the "PHP Email Form" library
  * The "PHP Email Form" library is available only in the pro version of the template
  * The library should be uploaded to: vendor/php-email-form/php-email-form.php
  * For more info and help: https://bootstrapmade.com/php-email-form/
  */
include 'master/src/PHPMailer.php';
include 'master/src/Exception.php';
include 'master/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 1; // 0 for no debugging
    $mail->isSMTP();
    $mail->Host = 'mail.scent-secret.com';  // Your SMTP server
    $mail->SMTPAuth = true;
    $mail->Username = 'mail@scent-secret.com';
    $mail->Password = '1;vd;6dqJVLX';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 465;

    //Recipients
    $mail->setFrom('mail@scent-secret.com', 'Scent Secret');
    $mail->addAddress('maliraza9988@gmail.com', 'Ali Raza');
    $mail->addAddress('kavanconsultancy@outlook.com', 'Kavan');

    $msg = "Name: ".$_POST['name']." Subject: ".$_POST['subject']." Message: ".$_POST['message'];
    //Content
    $mail->isHTML(true);
    $mail->Subject = 'New Kavan Query';
    $mail->Body = $msg;

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

  // Replace contact@example.com with your real receiving email address
//   $receiving_email_address = 'maliraza9988@gmail.com';

//   if( file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php' )) {
//     include( $php_email_form );
//   } else {
//     die( 'Unable to load the "PHP Email Form" Library!');
//   }

//   $contact = new PHP_Email_Form;
//   $contact->ajax = true;
  
//   $contact->to = $receiving_email_address;
//   $contact->from_name = $_POST['name'];
//   $contact->from_email = $_POST['email'];
//   $contact->subject = $_POST['subject'];

//   // Uncomment below code if you want to use SMTP to send emails. You need to enter your correct SMTP credentials
//   /*
//   $contact->smtp = array(
//     'host' => 'example.com',
//     'username' => 'example',
//     'password' => 'pass',
//     'port' => '587'
//   );
//   */

//   $contact->add_message( $_POST['name'], 'From');
//   $contact->add_message( $_POST['email'], 'Email');
//   $contact->add_message( $_POST['message'], 'Message', 10);

//   echo $contact->send();
?>
