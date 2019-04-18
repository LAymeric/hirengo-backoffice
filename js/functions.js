function saveUser() {
    const data = $('form').serialize()
    console.log(data)
    alert("4")
    $.ajax({
        url: 'http://localhost:8080/api/users/create',
        data: {
            lastname: data.lastname,
            firstname: data.firstname,
            email: data.email,
            //TODO
        },
        type: 'POST',
        dataType: "json",
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