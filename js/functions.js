function saveUser(){
    const data = $('form').serializeJSON();
    $.ajax({ url: 'urlBack/user',
        data: {
            lastname:data.lastname,
            firstname:data.firstname,
            email:data.email,
            //TODO
        },
        type: 'POST',
        dataType: "json",
        success : function(code, status){
            //todo aller sur la page du compte
        },

        error : function(result, status, error){
            //todo afficher une popup d'erreur
        },

        complete : function(result, status){
        }
    });
}

function getUserData(){
    $.ajax({ url: 'urlBack/user',
        type: 'GET',
        dataType: "json",
        success : function(code, status){
            //todo renvoyer la donnée / l'afficher
        },

        error : function(result, status, error){
            //todo afficher une popup d'erreur
        },

        complete : function(result, status){
        }
    });
}