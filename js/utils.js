function validateForm() {
    var error = false
    var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    var regexPhone = /^(0|\+33)[1-9]([-.: ]?[0-9]{2}){4}$/
    var regexPostalCode = /^(([0-8][0-9])|(9[0-5]))[0-9]{3}$/

    if (!validateName(document.forms["registerForm"]["lastname"].value, document.getElementById('errorName'), 2, 60)) {
        error = true
    }
    if (!validateName(document.forms["registerForm"]["firstname"].value, document.getElementById('errorFirstname'), 2, 60)) {
        error = true
    }
    if (!validateName(document.forms["registerForm"]["pwd"].value, document.getElementById('errorPwd'), 8, 40)) {
        error = true
    }
    if (!validatePwdConfirm(document.forms["registerForm"]["pwd"].value, document.forms["registerForm"]["pwdConfirm"].value, document.getElementById('errorPwdConfirm'))) {
        error = true
    }
    if (!validateRegex(document.forms["registerForm"]["email"].value, document.getElementById('errorEmail'), regexEmail)) {
        error = true
    }
    if (!validateRegex(document.forms["registerForm"]["phone"].value, document.getElementById('errorPhone'), regexPhone)) {
        error = true
    }
    if (!validateBirthday(document.forms["registerForm"]["birthday"].value, document.getElementById('errorBirthday'))) {
        error = true
    }
    if (!error) {
        saveUser();
    }

    return !error
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




