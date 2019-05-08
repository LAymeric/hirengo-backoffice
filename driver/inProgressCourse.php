<?php
include "./../common/head.php";
include "./../common/navbar.php";
?>
<script> $(document).ready(getCurrentCourses('<?php echo $_SESSION["email"] ?>')); </script>
<div class="form-group" style="text-align:center;">
    <div class="popup">
        <span class="popuptext" id="successPopup"><i class="far fa-check-circle"></i><?php echo SUCCESS;?></span>
    </div>
    <div class="popupError">
        <span class="popuptext" id="errorPopup"><i class="far fa-times-circle"></i><?php echo ERROR;?></span>
    </div>
</div>
<div class="container-main">
    <h1><?php echo IN_PROGRESS_COURSE; ?></h1>
    <div id="content"></div>
</div>