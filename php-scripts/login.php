<?php

if (session_status() == PHP_SESSION_NONE) {
    session_start();
}
if(isset($_POST["id"], $_POST["firstname"], $_POST["type"])){
    $_SESSION["auth"]  = true;
    $_SESSION["id"]    = $_POST["id"];
    $_SESSION["firstname"]    = $_POST["firstname"];
    $_SESSION["type"]    = $_POST["type"];
    echo $_POST["id"];
}
