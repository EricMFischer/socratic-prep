<?php
$field_name = $_POST['name'];
$field_email = $_POST['email'];
$field_message = $_POST['message'];

$mail_to = 'ericf712@gmail.com';
$subject = 'Message from '.$field_name;

$body_message = 'From: '.$field_name."\n";
$body_message .= 'Email: '.$field_email."\n";
$body_message .= 'Message: '.$field_message;

$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply To: '.$field_email."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) { ?>
  <script language="javascript" type="text/javascript">
    alert('Thanks for the message. We will contact you shortly.');
    window.location = 'contact_page.html';
  </script>
<?php
}
else { ?>
  <script language="javascript" type="text/javascript">
    alert('Message failed. Please, send an email to ericf712@gmail.com');
    window.location = 'contact_page.html';
  </script>
<?php
}
?>