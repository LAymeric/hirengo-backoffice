<?php
include "./../common/head.php";
include "./../common/navbar.php";
?>
<script> $(document).ready(getAllServicesForUser('<?php echo $_SESSION["email"];?>')); </script>
<div class="container">
    <h1><?php echo YOUR_SERVICES; ?></h1>
    <div id="content"></div>
    <br/>
    <div class="form-group" style="text-align:center;">
        <button type="submit" class="btn btn-secondary" onclick="document.location.href='./addService.php'"><?php echo NEW_SERVICE;?></button>
    </div>
</div>


<?php
include "./../common/footer.php";
?>
