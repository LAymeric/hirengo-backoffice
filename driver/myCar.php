<?php
include "./../common/head.php";
include "./../common/navbar.php";
?>
<script> $(document).ready(getCarInfoForDriver('<?php echo $_SESSION["email"];?>')); </script>
<div class="container">
    <div class="row">
        <label for="car"><?php echo IMAGE_CAR;?></label>
        <img class=" margin-auto" id="output"/>
    </div>
    <div class="row">
        <div><?php echo NAME;?></div>
        <div id="name"></div>
    </div>
    <div class="row">
        <div><?php echo BRAND;?></div>
        <div id="brand"></div>
    </div>
    <div class="row">
        <div><?php echo DESCRIPTION;?></div>
        <div id="description"></div>
    </div>
</div>

<?php
include "./../common/footer.php";
?>
