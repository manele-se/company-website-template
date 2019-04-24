<?php
if(isset($_POST['email'])){

  $admin_email="elena@manele.se"; 
  $name= $_POST['name']; 
  $email= $_POST['email']; 
  $phone= $_POST['phone']; 
  $message= $_POST['message']; 

  //send email
  mail($admin_email, "New form submission", $message. '-' .$phone, "Form:" .$email); 

  header('Location: https://');
}