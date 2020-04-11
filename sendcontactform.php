<?php
    $name = $_POST['name'];
    $senderemail = $_POST['email'];
    $message = $_POST['message'];

    $from = $senderemail;
    $subject = "chasepeck.com form submission";
    $body = "NAME: $name\nMESSAGE: $message";

    $sendto = 'contactchasepeck@icloud.com';
    $headers = "From: $from \r\n";
    $headers .= "Reply-To: $senderemail \r\n";

    function IsInjected($str)
    {
        $injections = array('(\n+)',
            '(\r+)',
            '(\t+)',
            '(%0A+)',
            '(%0D+)',
            '(%08+)',
            '(%09+)'
            );
                
        $inject = join('|', $injections);
        $inject = "/$inject/i";
        
        if(preg_match($inject,$str))
        {
        return true;
        }
        else
        {
        return false;
        }
    }

    if(IsInjected($senderemail))
    {
        echo "Email injected! Not sending.";
        exit;
    }

    mail($sendto,$subject,$body,$headers);
?>