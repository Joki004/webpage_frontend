<?php
if(isset($_POST['submit'])) {
    $to = "info@beautybarby.pl";
    $firstName = $_POST['firstname'];
    $lastName = $_POST['lastname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    $subject = "New form submission from " . " ID :\n" . $lastName ."\n".$firstName."\n".$phone;
    $subject .= " " . $lastName;
    $headers = "From: ".$email;
    mail($to,$subject,$message,$headers);
    echo "Thank you for your message!";
}

  // Set the cache headers for the HTML file
  header('Cache-Control: no-cache, no-store, must-revalidate');
  header('Expires: 0');
 // Set the cache headers for the CSS file
 header('Cache-Control: max-age=3600');
 header('Expires: '.gmdate('D, d M Y H:i:s \G\M\T', time() + 3600));

  // Include the HTML file
  include 'index.html';


?>