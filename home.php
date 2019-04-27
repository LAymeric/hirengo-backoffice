<div class="wrapper" id="wrapper-index">
    <h1><?php echo HELLO; ?></h1>
        <?php if(isset($_SESSION["firstname"])){
           ?><h2><?php echo $_SESSION["firstname"]; ?> </h2> <?php
        }
         ?>
     </h2>
</div>