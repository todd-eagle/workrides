<?php
    $toEmail = "contactus@workrides.org";
    $mailHeaders = "From: " . $_POST["name"] . "<". $_POST["name"] .">\r\n";
    if(mail($toEmail, $_POST["subject"], $_POST["message"], $mailHeaders)) {
        print "<p class='success'>Message sent!</p>";
    } else {
        print "<p class='Error'>There was problem sending the message.</p>";
    }
?>