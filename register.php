<div class="wrapper" id="wrapper-index">
    <h1><?php echo MAIN_TITLE; ?></h1>
    <h2><?php echo MAIN_SUBTITLE; ?></h2>
    <div id="registerForm">
        <div class="row">
            <div class="col-sm-6">
                <div class="form-group">
                    <label for="lastname"><?php echo NAME; ?></label>
                    <input type="text" class="form-control" placeholder="Dupont" id="lastname" name="lastname" required="required">
                    <div id="errorName" class="error" style="display: none"> <?php echo INVALID_NAME ?></div>
                </div>
            </div>

            <div class="col-sm-6">
                <div class="form-group">
                    <label for="firstname"><?php echo FIRSTNAME; ?></label>
                    <input type="text" class="form-control" placeholder="Yannis" id="firstname" name="firstname" required="required">
                    <div id="errorFirstname" class="error" style="display: none"><?php echo INVALID_FIRSTNAME ?></div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <div class="form-group">
                    <label for="birthday"><?php echo BIRTHDATE; ?></label>
                    <input type="date" class="form-control" name="birthday" id="birthday" required="required">
                    <div id="errorBirthday" class="error" style="display:none"><?php echo INVALID_BIRTHDATE ?></div>
                </div>
            </div>

            <div class="col-sm-6">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="text" class="form-control" id="email" placeholder="du@pont.fr" name="email" required="required">
                    <div id="errorEmailExist" class="error" style="display:none"><?php echo INVALID_EMAIL ?></div>
                    <div id="errorEmail" class="error" style="display:none"><?php echo INVALID_EMAIL2 ?></div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <div class="form-group">
                    <label for="phone"><?php echo PHONE; ?></label>
                    <input type="text" id="phone" class="form-control" placeholder="06 XX XX XX XX" name="phone"
                           required="required">
                    <div id="errorPhone" class="error" style="display:none"><?php echo INVALID_PHONE ?></div>
                </div>
            </div>
             <div class="col-sm-6">
                <div class="form-group">
                    <label for="type"><?php echo TYPE; ?></label>
                    <select type="text" id="type" class="form-control" name="type" required="required">
                           <option value="DRIVER"> <?php echo DRIVER; ?></option>
                           <option value="ACCOMPANIST"> <?php echo ACCOMPANIST; ?></option>
                   </select>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <div class="form-group">
                    <label for="pwd"><?php echo PASSWORD; ?></label>
                    <input type="password" class="form-control" name="pwd" id="pwd" required="required">
                    <div id="errorPwd" class="error" style="display:none"><?php echo INVALID_PASSWORD ?></div>
                </div>
            </div>

            <div class="col-sm-6">
                <div class="form-group">
                    <label for="pwdConfirm"><?php echo CONFIRMATION; ?></label>
                    <input type="password" class="form-control" name="pwdConfirm" id="pwdConfirm" required="required">
                    <div id="errorPwdConfirm" class="error"
                         style="display:none"><?php echo INVALID_CONFIRMATION; ?></div>
                </div>
            </div>
        </div>

        <div class="form-check">
            <input type="checkbox" class="form-check-input" name="cgu" required="required">
            <label class="form-check-label" style="margin-bottom:10px;"><?php echo CGU_ACCEPT ?> <a
                        href="#"><?php echo CGU ?></a></label>
        </div>

        <div class="form-group">
            <a href="login.php"><?php echo ALREADY_REGISTER ?> </a>
        </div>

        <div class="form-group" style="text-align:center;">
            <div class="popup">
                <span class="popuptext" id="successPopup"><i class="far fa-check-circle"></i><?php echo SUCCESS;?></span>
            </div>
            <div class="popupError">
                <span class="popuptext" id="errorPopup"><i class="far fa-times-circle"></i><?php echo ERROR;?></span>
            </div>
        </div>

        <div class="form-group" style="text-align:center;">
            <button type="submit" class="btn btn-secondary" onclick="validateForm()"><?php echo VALIDATE ?> </button>
        </div>
    </div>
</div>
