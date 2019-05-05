function validateForm() {
    var error = false
    var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    var regexPhone = /^(0|\+33)[1-9]([-.: ]?[0-9]{2}){4}$/
    var regexPostalCode = /^(([0-8][0-9])|(9[0-5]))[0-9]{3}$/

    const lastname = document.getElementById("lastname").value;
    const firstname = document.getElementById("firstname").value;
    const pwd = document.getElementById("pwd").value;
    const pwdConfirm = document.getElementById("pwdConfirm").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const birthday = document.getElementById("birthday").value;
    const type = document.getElementById("type").value;

    if (!validateName(lastname, document.getElementById('errorName'), 2, 60)) {
        error = true
    }
    if (!validateName(firstname, document.getElementById('errorFirstname'), 2, 60)) {
        error = true
    }
    if (!validateName(pwd, document.getElementById('errorPwd'), 8, 40)) {
        error = true
    }
    if (!validatePwdConfirm(pwd, pwdConfirm, document.getElementById('errorPwdConfirm'))) {
        error = true
    }
    if (!validateRegex(email, document.getElementById('errorEmail'), regexEmail)) {
        error = true
    }
    if (!validateRegex(phone, document.getElementById('errorPhone'), regexPhone)) {
        error = true
    }
    if (!validateBirthday(birthday, document.getElementById('errorBirthday'))) {
        error = true
    }
    if (!error) {
        saveUser(firstname, lastname, email, birthday, phone, pwd, type);
    }
}

function validateLoginForm() {
    var error = false
    var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const pwd = document.getElementById("pwd").value;
    const email = document.getElementById("email").value;

    if (!validateName(pwd, document.getElementById('errorPwdLogin'), 8, 40)) {
        error = true
    }
    if (!validateRegex(email, document.getElementById('errorEmailLogin'), regexEmail)) {
        error = true
    }
    if (!error) {
        login(email,pwd);
    }
}

function validateCarForm(userEmail) {
    var error = false

    const name = document.getElementById("name").value;
    const brand = document.getElementById("brand").value;
    const description = document.getElementById("description").value;
    const image = document.getElementById("image").files[0];

    if (!validateName(name, document.getElementById('errorName'), 2, 40)) {
        error = true
    }
    if (!validateName(brand, document.getElementById('errorBrand'), 2, 40)) {
        error = true
    }
    if (!validateName(description, document.getElementById('errorDescription'), 2, 400)) {
        error = true
    }

    if (!error) {
        if(image != null){
            var reader = new FileReader();
            reader.readAsBinaryString(image);

            reader.onload = function() {
                var base64 = btoa(reader.result);
                saveCar(name, brand, description, base64, userEmail)
            };
        }else{
            saveCar(name, brand, description, null, userEmail)
        }

    }
}

function validateCarEditForm(userEmail) {
    var error = false

    const name = document.getElementById("nameEdit").value;
    const brand = document.getElementById("brandEdit").value;
    const description = document.getElementById("descriptionEdit").value;
    const image = document.getElementById("imageEdit").files[0];

    if (!validateName(name, document.getElementById('errorName'), 2, 40)) {
        error = true
    }
    if (!validateName(brand, document.getElementById('errorBrand'), 2, 40)) {
        error = true
    }
    if (!validateName(description, document.getElementById('errorDescription'), 2, 400)) {
        error = true
    }

    if (!error) {
        if(image != null){
            var reader = new FileReader();
            reader.readAsBinaryString(image);

            reader.onload = function() {
                var base64 = btoa(reader.result);
                editCar(name, brand, description, base64, userEmail)
            };
        }else{
            editCar(name, brand, description, null, userEmail)
        }
    }
}

function validateServiceForm(userEmail) {
    let error = false
    const array = []
    const checkboxes = document.querySelectorAll("input:checked")
    for (let i = 0; i < checkboxes.length; i++) {
      array.push(checkboxes[i].value)
    }
    const errorElement = document.getElementById('errorCheckboxes')
    if(array.length === 0){
        errorElement.style.display = 'inline'
        errorElement.style.color = '#FF0000'
        error = true
    }else{
        errorElement.style.display = 'none'
        error = false
    }
    if (!error) {
       console.log(JSON.stringify(array))
       saveServices(userEmail, array)
    }
}

function validateNewServiceForm(userEmail) {
    let error = false
    const array = []
    const checkboxes = document.querySelectorAll("input:checked")
    for (let i = 0; i < checkboxes.length; i++) {
      array.push(checkboxes[i].value)
    }
    const errorElement = document.getElementById('errorCheckboxes')
    if(array.length === 0){
        errorElement.style.display = 'inline'
        errorElement.style.color = '#FF0000'
        error = true
    }else{
        errorElement.style.display = 'none'
        error = false
    }
    if (!error) {
       console.log(JSON.stringify(array))
       saveNewServices(userEmail, array)
    }
}

function validateName(name, error, min, max) {
    if (name.length < min || name.length > max) {
        error.style.display = 'inline'
        error.style.color = '#FF0000'
        return false
    } else {
        error.style.display = 'none'
        return true
    }
}

function validateRegex(name, error, regex) {
    if (!regex.test(name)) {
        error.style.display = 'inline'
        error.style.color = '#FF0000'
        return false
    } else {
        error.style.display = 'none'
        return true
    }
}

function validateBirthday(name, error) {
    var today = new Date()
    var birthDate = new Date(name)
    var age = today.getFullYear() - birthDate.getFullYear()
    var m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--
    }

    if (isNaN(age) || age < 18 || age > 111) {
        error.style.display = 'inline'
        error.style.color = '#FF0000'
        return false
    }
    else {
        error.style.display = 'none'
        return true
    }
}

function validatePwdConfirm(pwd, pwdConfirm, error) {
    if (pwd !== pwdConfirm) {
        error.style.display = 'inline'
        error.style.color = '#FF0000'
        return false
    } else {
        error.style.display = 'none'
        return true
    }
}

function uint8ToString(buf) {
    var i, length, out = '';
    for (i = 0, length = buf.length; i < length; i += 1) {
        out += String.fromCharCode(buf[i]);
    }
    return out;
}

function arrayBufferToBase64( buffer ) {
    var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
    }
    return window.btoa( binary );
}

var displayImageFromByteArray = function(base64, element) {
    element.src = "data:image/png;base64," + base64;
};

var loadFile = function(event) {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
};

var loadFileEdit = function(event) {
    var output = document.getElementById('outputEdit');
    output.src = URL.createObjectURL(event.target.files[0]);
};

