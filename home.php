<div class="container">
    <h1><?php echo HELLO; ?></h1>
        <?php if(isset($_SESSION["firstname"])){
           ?><h2><?php echo $_SESSION["firstname"]; ?> </h2> <?php
        }
         ?>
     </h2>
     <div class="dashboard-container">
        <div class="row">
            <div class="tile col">TILE 1</div>
            <div class="tile col">TILE 2</div>
        </div>
        <div class="row">
            <div class="tile col">TILE 3</div>
            <div class="tile col">TILE 4</div>
        </div>
     <div>
</div>