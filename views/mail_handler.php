<?php 
if(isset($_POST['submit'])){
    $to = "ericf712@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $subject = "Your email is on its way!";
    $subject2 = "Copy of your email";
    $message = $name . " wrote:" . "\n\n" . $_POST['message'];
    $message2 = "Here's a copy of your message " . $name . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Email Sent. Thanks " . $name . ", we'll reach out to you soon!";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>