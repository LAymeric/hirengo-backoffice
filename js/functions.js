function saveUser(firstname, lastname, email, birthday, phone, pwd) {
    const data = JSON.stringify({
        lastname:lastname,
        firstname:firstname,
        password:pwd,
        email:email,
        phone:phone,
        birthday:birthday,
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
               console.log("code"+JSON.stringify(code))
                $.ajax({
                       url: './php-scripts/login.php',
                       data: {
                        id:code.id,
                        firstname:code.firstname
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
                        firstname:code.firstname,
                        email:code.email
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