<?php

if (session_status() == PHP_SESSION_NONE) {
    session_start();
}
$_SESSION["hasFilledData"] = true;
echo 0;
return true;

