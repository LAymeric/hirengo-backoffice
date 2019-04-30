<?php
include "./../common/head.php";
include "./../common/navbar.php";
?>
<script> $(document).ready(getAllAvailableCourses('<?php echo $_SESSION["email"] ?>')); </script>
<div class="container">
    <h1><?php echo AVAILABLE_COURSES; ?></h1>
    <div id="content"></div>
</div>


<?php
include "./../common/footer.php";
?>
