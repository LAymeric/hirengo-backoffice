<?php
include "common/head.php";
include "common/navbar.php";
?>

<div class="container">
    <h1><?php echo YOUR_SERVICES; ?></h1>
     </h2>
     <div class="services">
        <script> $(document).ready(getUserServices('<?php  echo $_SESSION["email"] ?>')); </script>
     <div>
</div>

<?php
include "common/footer.php";
?>
