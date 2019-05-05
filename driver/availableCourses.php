<?php
include "./../common/head.php";
include "./../common/navbar.php";
?>
<script> $(document).ready(getAllAvailableCourses('<?php echo $_SESSION["email"] ?>')); </script>
<div class="form-group" style="text-align:center;">
    <div class="popup">
        <span class="popuptext" id="successPopup"><i class="far fa-check-circle"></i><?php echo SUCCESS;?></span>
    </div>
    <div class="popupError">
        <span class="popuptext" id="errorPopup"><i class="far fa-times-circle"></i><?php echo ERROR;?></span>
    </div>
</div>
<div class="container">
    <h1><?php echo AVAILABLE_COURSES; ?></h1>
    <div id="content"></div>
</div>
<?php
include "./../common/footer.php";
?>
