<div class="container">
     <div>
        <?php echo FILL_CAR; ?>
     </div>
     <div class="container center_div register-form">
        <div class="form-group">
            <label for="name"><?php echo NAME;?></label>
            <input type="text" class="form-control" placeholder="Xsara Picasso" id="name" name="name" value="" required="required"/>
            <div id="errorName" class="error" style="display: none"><?php echo NAME_CAR_ERROR ?></div>
        </div>
        <div class="form-group">
            <label for="brand"><?php echo BRAND;?></label>
            <input type="text" class="form-control" placeholder="Citroën" id="brand" name="brand" value="" required="required"/>
            <div id="errorBrand" class="error" style="display: none"><?php echo BRAND_CAR_ERROR ?></div>
        </div>
        <div class="form-group">
            <label for="description"><?php echo DESCRIPTION;?></label>
            <textarea type="text" rows="5" class="form-control" placeholder="Berline bleue, sièges en cuir, sound surround, ..." id="description" name="description" value="" required="required"></textarea>
            <div id="errorDescription" class="error" style="display: none"><?php echo DESCRIPTION_CAR_ERROR ?></div>
        </div>
        <div class="form-group" style="text-align:center;">
            <button type="submit" class="btn btn-secondary" onclick="validateCarForm()"><?php echo SAVE;?></button>
        </div>
     </div>
</div>