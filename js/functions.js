function saveUser(firstname, lastname, email, birthday, phone, pwd, type) {
    const data = JSON.stringify({
        lastname:lastname,
        firstname:firstname,
        password:pwd,
        email:email,
        phone:phone,
        birthday:birthday,
        type:type,
    })
    $.ajax({
        url: 'http://localhost:8080/api/users/create',
        data: data,
        type: 'POST',
        dataType: "json",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:8080',
            'Access-Control-Allow-Credentials':true
        },
        success: function (code, status) {
                $.ajax({
                       url: './php-scripts/login.php',
                       data: {
                        email:code.email,
                        firstname:code.firstname,
                        type:code.type,
                        hasFilledData:code.hasFilledData
                       },
                       type: 'POST',
                       dataType: "json",
                       success: function (code, status) {
                            //alert(JSON.stringify(code))
                            location.reload();
                       },
                        error: function (result, status, error) {
                                   //todo afficher une popup d'erreur
                                alert("error " +JSON.stringify(result) + " - " + +JSON.stringify(error))
                         },
                   })
        },

        error: function (result, status, error) {
            //todo afficher une popup d'erreur
            alert("error " +JSON.stringify(result))
        },

        complete: function (result, status) {
        }
    })
}

function saveCar(name, brand, description, base64, userMail) {
    const data = JSON.stringify({
        userEmail:userMail,
        name:name,
        brand:brand,
        description:description,
        base64:JSON.stringify(base64)
    })
    $.ajax({
        url: 'http://localhost:8080/api/cars/create',
        data: data,
        type: 'POST',
        dataType: "json",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:8080',
            'Access-Control-Allow-Credentials':true
        },
        success: function (code, status) {
               console.log("code"+JSON.stringify(code))
                $.ajax({
                       url: './php-scripts/saveCar.php', //todo dave hasFullFilledData
                       type: 'GET',
                       dataType: "json",
                       success: function (code, status) {
                            window.location.href = "./index.php";
                       },
                        error: function (result, status, error) {
                                   //todo afficher une popup d'erreur
                                alert("error 2 " +JSON.stringify(result) + " - " + +JSON.stringify(error))
                         },
                   })
        },

        error: function (result, status, error) {
            //todo afficher une popup d'erreur
            alert("error 1" +JSON.stringify(result))
        },

        complete: function (result, status) {
        }
    })
}
function login(email, pwd) {
    const data = JSON.stringify({
        password:pwd,
        email:email
    })
    $.ajax({
        url: 'http://localhost:8080/api/users/login',
        data: data,
        type: 'POST',
        dataType: "json",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:8080',
            'Access-Control-Allow-Credentials':true
        },
        success: function (code, status) {
               console.log("code"+JSON.stringify(code))
                $.ajax({
                       url: './php-scripts/login.php',
                       data: {
                        email:code.email,
                        firstname:code.firstname,
                        type:code.type,
                        hasFilledData:code.hasFilledData
                       },
                       type: 'POST',
                       dataType: "json",
                       success: function (code, status) {
                            //alert(JSON.stringify(code))
                            window.location.href = "./index.php";
                       },
                        error: function (result, status, error) {
                                   //todo afficher une popup d'erreur
                                alert("error " +JSON.stringify(result) + " - " + +JSON.stringify(error))
                         },
                   })
        },

        error: function (result, status, error) {
            //todo afficher une popup d'erreur
            alert("error " +JSON.stringify(result))
        },

        complete: function (result, status) {
        }
    })
}

function getUserServices(email) {
    $.ajax({
            url: 'http://localhost:8080/api/services/'+email,
            type: 'GET',
            dataType: "json",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:8080',
                'Access-Control-Allow-Credentials':true
            },
            success: function (code, status) {
                   console.log("code"+JSON.stringify(code))

            },

            error: function (result, status, error) {
                //todo afficher une popup d'erreur
                alert("error " +JSON.stringify(result))
            },

            complete: function (result, status) {
            }
        })
}

function getUserData() {
    $.ajax({
        url: 'urlBack/user',
        type: 'GET',
        dataType: "json",
        success: function (code, status) {
            //todo renvoyer la donnée / l'afficher
        },

        error: function (result, status, error) {
            //todo afficher une popup d'erreur
        },

        complete: function (result, status) {
        }
    })
}