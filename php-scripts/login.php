<?php

if (session_status() == PHP_SESSION_NONE) {
    session_start();
}
if(isset($_POST["email"], $_POST["firstname"])){
    $_SESSION["auth"]  = true;
    $_SESSION["email"]    = $_POST["email"];
    $_SESSION["firstname"]    = $_POST["firstname"];
    echo 0;
    return true;
}
