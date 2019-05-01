<div class="container">
    <script> $(document).ready(getAllServicesForAccompanist()); </script>
     <div>
        <?php echo FILL_SERVICE; ?>
     </div>
     <div class="container center_div register-form">
        <div id="content"></div>
        <div id="errorCheckboxes" class="error" style="display: none"><?php echo SERVICE_ERROR ?></div>
        <br/>
        <br/>
        <div class="form-group" style="text-align:center;">
            <button type="submit" class="btn btn-secondary" onclick="validateNewServiceForm('<?php echo $_SESSION["email"] ?>')"><?php echo SAVE;?></button>
        </div>
     </div>
</div>