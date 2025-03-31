<?php
    require_once '../config/connect.php';

    $name = $_POST['name'];
    $last_name = $_POST['last_name'];
    $email = $_POST['email'];
    $question = $_POST['question'];
    $additional_info = $_POST['additional_info'];

    mysqli_query($connect, "INSERT INTO `user` (`Id_user`, `first_name`, `last_name`, `email`, `question_or_remark_text`, `additional_information`) VALUES (NULL, '$name', '$last_name', '$email', '$question', '$additional_info')");

    header('Location: /feedback.html');

?>