<?php
include "./../common/head.php";
include "./../common/navbar.php";
?>
<script> $(document).ready(getCurrentCourses('<?php echo $_SESSION["email"] ?>')); </script>
<div class="container">
    <h1><?php echo IN_PROGRESS_COURSE; ?></h1>
    <div id="content"></div>
</div>
<?php
include "./../common/footer.php";
?>
