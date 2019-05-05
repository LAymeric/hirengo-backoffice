<?php
include "./../common/head.php";
include "./../common/navbar.php";
?>
<script> $(document).ready(getAllServicesAvailable('<?php echo $_SESSION["email"];?>')); </script>
<div class="form-group" style="text-align:center;">
    <div class="popup">
        <span class="popuptext" id="successPopup"><i class="far fa-check-circle"></i><?php echo SUCCESS;?></span>
    </div>
    <div class="popupError">
        <span class="popuptext" id="errorPopup"><i class="far fa-times-circle"></i><?php echo ERROR;?></span>
    </div>
</div>
<div class="container">
     <div>
        <h1><?php echo NEW_SERVICE; ?></h1>
     </div>
     <div class="container center_div register-form">
         <div id="content"></div>
         <div id="errorCheckboxes" class="error" style="display: none"><?php echo SERVICE_ERROR ?></div>
         <br/>
         <br/>
         <div class="form-group" style="text-align:center;">
             <button type="submit" class="btn btn-secondary" onclick="validateServiceForm('<?php echo $_SESSION["email"] ?>')"><?php echo SAVE;?></button>
         </div>
      </div>
</div>