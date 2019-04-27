<?php

if (session_status() == PHP_SESSION_NONE) {
    session_start();
}
if(isset($_POST["id"], $_POST["firstname"])){
    $_SESSION["auth"]  = true;
    $_SESSION["id"]    = $_POST["id"];
    $_SESSION["firstname"]    = $_POST["firstname"];
    echo $_POST["id"];
}
