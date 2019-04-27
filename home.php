<div class="container">
    <h1><?php echo HELLO; ?></h1>
        <?php if(isset($_SESSION["firstname"])){
           ?><h2><?php echo $_SESSION["firstname"]; ?> </h2> <?php
        }
         ?>
     </h2>
     <div class="dashboard-container">
        <div class="row">
            <div class="tile col"><?php echo AVAILABLE_COURSES; ?></div>
            <div class="tile col"><?php echo COURSES_HISTORY; ?></div>
        </div>
        <div class="row">
            <div class="tile col" onclick="window.location.href='./yourServices.php'"><?php echo YOUR_SERVICES; ?></div>
            <div class="tile col"><?php echo ADD_SERVICE; ?></div>
        </div>
     <div>
</div>