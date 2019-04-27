<?php
include "common/head.php";
include "common/navbar.php";
?>




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
