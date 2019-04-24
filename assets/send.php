<?php

 use PHPMailer\PHPMailer\PHPMailer;
  require "PHPMailer.php";
  require "Exception.php";
  require "SMTP.php";
if($_POST){
$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
    try {

        $name = $_POST[name];
        $number = $_POST[number];
        $email = $_POST[mail];

        //Server settings
        $mail->SMTPDebug = 2;                                 // Enable verbose debug output
        $mail->isSMTP();                                      // Set mailer to use SMTP
        $mail->Host = 'smtp.yandex.ru';   // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
        $mail->Username = 'test-april.test@yandex.ru';                 // SMTP username
        $mail->Password = 'test4ever';                           // SMTP password
        $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 465;                                            // TCP port to connect to

$mail->isHTML(true);                                  // Set email format to HTML
$mail->Subject = 'заявка VivoTAO bike';
$mail->Headers = 'Content-type: text/html; charset=UTF-8';
$mail->CharSet = 'UTF-8';
$mail->Body = '
 <html>
 </body>
<p>Имя: '.$_POST['name'].' </p>
<p>Телефон: '.$_POST['number'].'</p>
<p>Почта:  '.$_POST['mail'].'</p>
</body>
</html>';

 $mail->setFrom('test-april.test@yandex.ru');
       $mail->addAddress($email) ;       // Add a recipient
$mail->addAddress('deagtw@gmail.com') ;
 $mail->send();
 echo 'Message has been sent';
    } catch (Exception $e) {
        echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
    };

};

?>