<?php
  $address = substr($_SERVER['PHP_SELF'], 0,strlen($_SERVER['PHP_SELF']) - strlen(strrchr($_SERVER['PHP_SELF'], '/')));
  $path = ("/hirengo-backoffice/driver" == $address || "/hirengo-backoffice/accompanist" == $address) ? "../" : "";

  if(isset($_COOKIE['lang'])) {
 		 $lang = $_COOKIE['lang'];
 	 } else {
 		 $lang = "fr";
    }

 	 if ($lang=='fr') {
 		 include($path.'assets/i18n/fr.php');
 	 } elseif ($lang=='en') {
 		 include($path.'assets/i18n/en.php');
 	 }else{
      include($path.'assets/i18n/fr.php');
    }
 ?>
