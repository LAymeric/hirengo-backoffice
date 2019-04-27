<?php
require "dbConst.php";

if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

// Generate a token
function createToken($length)
{
    // random_bytes() returns pseudo-random bytes (string)
    // bin2hex() returns converted binary data in hexadecimal representation
    // bin2hex(random_bytes($int)) returns a string of length $int * 2
    try {
        return bin2hex(random_bytes($length / 2));
    } catch (Exception $e) {
        //TODO
    }
}

// Check if a user is connected
function isConnected()
{

    if (isset($_SESSION["auth"])) {
        return true;
    }

    return false;
}
