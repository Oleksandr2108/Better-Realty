<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail ->CharSet = 'UTF-8';
    $mail ->setLanguage('ua', 'phpmailer/language');
    $mail ->IsHTML(true);


    // От кого письмо

    $mail ->setFrom('better@gmail.com', 'BETTER REALTY');
 // Кому
    $mail ->addAddress('sepika534@gmail.com');

    $mail -> Subject = 'Консультація';

    if(trim(!empty($_POST['name']))){
        $body ='<p>Імя'.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['area']))){
        $body ='<p>Імя'.$_POST['area'].'</p>';
    }
    if(trim(!empty($_POST['apart']))){
        $body ='<p>Імя'.$_POST['apart'].'</p>';
    }
    if(trim(!empty($_POST['tel']))){
        $body ='<p>Імя'.$_POST['tel'].'</p>';
    }

    $mail ->Body =$body;


    if(!$mail ->send()){
        $message = 'Помилка';
    }else{
        $message = 'Дані відправлені!';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);

?>