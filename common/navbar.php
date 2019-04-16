<?php
require_once "functions.php";

if(!isset($navbarItem)) $navbarItem = 'home';
?>

<!-- Navigation -->
 <nav class="navbar navbar-expand-lg navbar fixed-top">
      <div class="container">
        <a class="navbar-brand" href="../index.php">
          <img src="assets/vendor/images/logos/logo2.png" alt="logo" width=90>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>


          <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link<?php if($navbarItem === 'home') echo ' active'?>" href="../index.php"><?php echo HOME; ?>
              <span class="sr-only">(current)</span>
            </a>
          </li>
            <li class="nav-item">
                <a class="nav-link" href="contact.php"><?php echo CONTACT; ?></a>
            </li>
          <?php if (isConnected()){?>
              <li class="nav-item">
                  <a class="nav-link<?php if($navbarItem === 'profile') echo ' active'?>" href="profile.php"><?php echo PROFILE; ?></a>
              </li>
              <li class="nav-item">
                  <a class="nav-link<?php if($navbarItem === 'booking') echo ' active'?>" href="booking.php"><?php echo BOOKING; ?></a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="logout.php"><?php echo LOGOUT; ?></a>
              </li>
          <?php } else{?>
              <li class="nav-item">
                  <a class="nav-link<?php if($navbarItem === 'login') echo ' active'?>" href="login.php"><?php echo LOGIN; ?></a>
              </li>
          <?php } ?>
              <li class="nav-item dropdown <?php if($navbarItem ==='new') echo ' active'?>">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <?php echo LANGUAGE; ?>
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <button class="dropdown-item" type="button" onclick="setCookie('lang', 'fr', 30)">Fr</button>
                  <button class="dropdown-item" type="button" onclick="setCookie('lang', 'en', 30)">En</button>
                </div>
              </li>
            </ul>
        </div>
      </div>
  </nav>

