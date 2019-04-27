<div class="container">
    <h1><?php echo HELLO; ?></h1>
        <?php if(isset($_SESSION["firstname"])){
           ?><h2><?php echo $_SESSION["firstname"]; ?> </h2> <?php
        }
         ?>
     </h2>
     <?php
        if(isset($_SESSION["type"]) && $_SESSION["type"] == "DRIVER"){
            if(isset($_SESSION["hasFilledData"]) && $_SESSION["hasFilledData"] == "true"){
                include "driver/dashboardDriver.php";
            }else{
                include "driver/fillCar.php";
            }
         }else if(isset($_SESSION["type"]) && $_SESSION["type"] == "ACCOMPANIST"){
            if(isset($_SESSION["hasFilledData"]) && $_SESSION["hasFilledData"] == "true"){
                include "accompanist/dashboardAccompanist.php";
             }else{
                include "accompanist/fillType.php";
             }
         }
              ?>
</div>