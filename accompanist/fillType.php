<div class="container">
    <script> $(document).ready(getAllServicesForAccompanist()); </script>
     <div>
        <?php echo FILL_SERVICE; ?>
     </div>
     <div class="container center_div register-form">
        <div id="content"></div>
        <br/>
        <div class="form-group" style="text-align:center;">
            <button type="submit" class="btn btn-secondary" onclick="validateServiceForm('<?php echo $_SESSION["email"] ?>')"><?php echo SAVE;?></button>
        </div>
     </div>
</div>