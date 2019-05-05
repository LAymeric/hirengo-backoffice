<?php
include "./../common/head.php";
include "./../common/navbar.php";
?>
<script> $(document).ready(getCarInfoForDriver('<?php echo $_SESSION["email"];?>')); </script>
<div class="form-group" style="text-align:center;">
    <div class="popup">
        <span class="popuptext" id="successPopup"><i class="far fa-check-circle"></i><?php echo SUCCESS;?></span>
    </div>
    <div class="popupError">
        <span class="popuptext" id="errorPopup"><i class="far fa-times-circle"></i><?php echo ERROR;?></span>
    </div>
</div>
<div class="medium-sized">
    <h1><?php echo MY_CAR;?> </h1>
    <div class="row">
        <img class=" margin-auto" id="output"/>
    </div>
    <div class="row">
        <div class="col"><b><?php echo NAME;?></b></div>
        <div class="col" id="name"></div>
    </div>
    <div class="row">
        <div class="col"><b><?php echo BRAND;?></b></div>
        <div class="col" id="brand"></div>
    </div>
    <div class="row">
        <div class="col"><b><?php echo DESCRIPTION;?></b></div>
        <div class="col" id="description"></div>
    </div>
    <br/>
    <div class="form-group" style="text-align:center;">
        <button type="submit" class="btn btn-secondary" data-toggle="modal" data-target="#modalEditCar"><?php echo EDIT;?></button>
    </div>

    <div class="modal fade" id="modalEditCar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content modalEditCar">
            <h5 class="modal-title"><?php echo EDIT_CAR_TITLE;?></h5>
            <div class="center_div register-form">
                    <div class="form-group">
                        <label for="name"><?php echo NAME;?></label>
                        <input type="text" class="form-control" placeholder="Xsara Picasso" id="nameEdit" name="name" value="" required="required"/>
                        <div id="errorName" class="error" style="display: none"><?php echo NAME_CAR_ERROR ?></div>
                    </div>
                    <div class="form-group">
                        <label for="brand"><?php echo BRAND;?></label>
                        <input type="text" class="form-control" placeholder="Citroën" id="brandEdit" name="brand" value="" required="required"/>
                        <div id="errorBrand" class="error" style="display: none"><?php echo BRAND_CAR_ERROR ?></div>
                    </div>
                    <div class="form-group">
                        <label for="description"><?php echo DESCRIPTION;?></label>
                        <textarea type="text" rows="5" class="form-control" placeholder="Berline bleue, sièges en cuir, sound surround, ..." id="descriptionEdit" name="description" value="" required="required"></textarea>
                        <div id="errorDescription" class="error" style="display: none"><?php echo DESCRIPTION_CAR_ERROR ?></div>
                    </div>
                     <div class="form-group">
                         <label for="description"><?php echo IMAGE_CAR;?></label>
                        <div class="input-group image-preview">
                            <span class="input-group-btn margin-auto">
                                <div class="btn btn-default image-preview-input">
                                    <input onchange="loadFileEdit(event)" type="file" accept="image/png, image/jpeg, image/gif" name="input-file-preview" id="imageEdit"/>
                                </div>
                            </span>
                            <img class=" margin-auto" id="outputEdit"/>
                        </div>
                    </div>
                <div class="row margin-auto">
                    <button type="button" class="margin-auto btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="margin-auto btn btn-primary" onclick="validateCarEditForm('<?php echo $_SESSION["email"] ?>')"> Save changes</button>
                </div>
            </div>
        </div>
      </div>
    </div>
</div>

<?php
include "./../common/footer.php";
?>
