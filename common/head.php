<!DOCTYPE html>
<html lang="en">

  <head>

    <?php
          $address = substr($_SERVER['PHP_SELF'], 0,strlen($_SERVER['PHP_SELF']) - strlen(strrchr($_SERVER['PHP_SELF'], '/')));
          $path = ("/hirengo-backoffice/driver" == $address || "/hirengo-backoffice/accompanist" == $address) ? "../" : "";
      ?>
    <title>Hire'N Go Back Office</title>

    <!-- Favicon -->
    <link rel="shortcut icon" href="<?php echo $path;?>assets/vendor/images/favicon/favicon.ico" type="image/ico">

    <!-- Required meta tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:300" rel="stylesheet">

    <!-- Bootstrap core CSS -->
    <link href="<?php echo $path;?>assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Font Awesome 5.0.8 -->
    <link href="<?php echo $path;?>assets/vendor/fontawesome/css/fontawesome-all.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="<?php echo $path;?>assets/css/style.css" rel="stylesheet">

    <!--Modal -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <!-- Searchbar -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

    <!-- Functions js-->
    <script src="<?php echo $path;?>js/utils.js"></script>
    <script src="<?php echo $path;?>js/functions.js"></script>
    <script>
        function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            var expires = "expires="+d.toUTCString();
            document.cookie = cname + "=" + cvalue + "; " + expires;
            document.location.reload()
        }
  </script>
  </head>
  <?php include $path."php-scripts/i18n.php";?>
  <body>
