<?php
include "common/head.php";
include "common/navbar.php";
?>

<div class="form-group" style="text-align:center;">
    <div class="popup">
        <span class="popuptext" id="successPopup"><i class="far fa-check-circle"></i><?php echo SUCCESS;?></span>
    </div>
    <div class="popupError">
        <span class="popuptext" id="errorPopup"><i class="far fa-times-circle"></i><?php echo ERROR;?></span>
    </div>
</div>


<?php
if(isset($_SESSION["auth"]) && $_SESSION["auth"]){
    include "home.php";
}else{
    include "register.php";
}
?>

<?php
include "common/footer.php";
?>
