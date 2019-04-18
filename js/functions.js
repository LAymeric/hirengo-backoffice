function saveUser(firstname, lastname, email, birthday, phone, pwd) {
    const data = JSON.stringify({
        lastname:lastname,
        firstname:firstname,
        pwd:pwd,
        email:email,
        phone:phone,
        birthday:birthday,
    })
    console.log(data)
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
            //todo aller sur la page du compte
            alert("success")
        },

        error: function (result, status, error) {
            //todo afficher une popup d'erreur
            alert("error " +JSON.stringify(result))
        },

        complete: function (result, status) {
            alert("complete")
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