<?php
  session_start();
$_SESSION["firstname"] = null;
$_SESSION["type"] = null;
$_SESSION["hasFilledData"] = false;
$_SESSION["email"] = null;
$_SESSION["auth"] = null;
  header("Location: ./../index.php");