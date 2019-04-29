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
        base64:base64
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
                $.ajax({
                       url: './php-scripts/saveCar.php',
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
    })
}

function editCar(name, brand, description, base64, userMail) {
    const data = JSON.stringify({
        userEmail:userMail,
        name:name,
        brand:brand,
        description:description,
        base64:base64
    })
    $.ajax({
        url: 'http://localhost:8080/api/cars/edit',
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
                       url: './../php-scripts/saveCar.php',
                       type: 'GET',
                       dataType: "json",
                       success: function (code, status) {
                            window.location.href = "./myCar.php";
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

function saveServices(userEmail, array) {
    const data = JSON.stringify({
        userEmail:userEmail,
        serviceIds:array
    })
    $.ajax({
        url: 'http://localhost:8080/api/services/update',
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
                       url: './../php-scripts/saveService.php',
                       type: 'GET',
                       dataType: "json",
                       success: function (code, status) {
                            window.location.href = "./../index.php";
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

function getAllServicesForAccompanist() {
    $.ajax({
            url: 'http://localhost:8080/api/services/accompanist',
            type: 'GET',
            dataType: "json",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:8080',
                'Access-Control-Allow-Credentials':true
            },
            success: function (code, status) {
               let visualResult =""
                for(let i = 0; i < code.length; i++){
                    const current = code [i];
                    visualResult += "<div> <input type='checkbox' id='"+current.id+"' value='"+current.id+"' name='"+current.name+"'> <label for='"+current.name+"'>"+current.name+"</label></div>"
                }
                document.getElementById('content').innerHTML = visualResult;
            },

            error: function (result, status, error) {
                //todo afficher une popup d'erreur
                alert("error " +JSON.stringify(result))
            },

            complete: function (result, status) {
            }
        })
}

function getAllServicesAvailable(email) {
    $.ajax({
            url: 'http://localhost:8080/api/services/available/'+email,
            type: 'GET',
            dataType: "json",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:8080',
                'Access-Control-Allow-Credentials':true
            },
            success: function (code, status) {
               let visualResult =""
                for(let i = 0; i < code.length; i++){
                    const current = code [i];
                    visualResult += "<div> <input type='checkbox' id='"+current.id+"' value='"+current.id+"' name='"+current.name+"'> <label for='"+current.name+"'>"+current.name+"</label></div>"
                }
                document.getElementById('content').innerHTML = visualResult;
            },

            error: function (result, status, error) {
                //todo afficher une popup d'erreur
                alert("error " +JSON.stringify(result))
            },

            complete: function (result, status) {
            }
        })
}

function getAllServicesForUser(email) {
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
               let visualResult ="<div class=\"container\"><div class=\"row\">"
               if(code.length > 0){
                    for(let i = 0; i < code.length; i++){
                       const current = code [i];
                       visualResult +=  "<div class=\"col-sm-4\" style=\"padding: 20px;\">"
                            +"<div class=\"card\" style=\"width: 18rem; border-color: rgb(91,192,222)\">"
                               +"<div class=\"card-body\">"
                                   +"<img src=\"\" class=\"output\" id=\"output_"+current.id+"\"/>"
                                   + "<div class=\"col text-align-left\">"
                                   + "<h5 class=\"card-title\" style=\"text-align: center;\">" + current.name + "</h5><br>"
                                   + "<p class=\"card-text\" style=\"text-align: center\">" + current.price + "</p><br>"
                                   + "<p style=\"text-align: center;\">" + current.quantity + "</p><br>"
                                    +"</div>"
                               +"</div>"
                           +"</div>"
                       +"</div>"

                       if(current.picture){
                           displayImageFromByteArray(current.picture, document.getElementById("output_"+current.id))
                       }
                   }
               }else{
                    visualResult = "<h2>No result</2>"
               }

                visualResult += "</div></div>"
                document.getElementById('content').innerHTML = visualResult;
            },

            error: function (result, status, error) {
                //todo afficher une popup d'erreur
                alert("error " +JSON.stringify(result))
            },

            complete: function (result, status) {
            }
        })
}
function getCarInfoForDriver(email) {
    $.ajax({
            url: 'http://localhost:8080/api/cars/'+email,
            type: 'GET',
            dataType: "json",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:8080',
                'Access-Control-Allow-Credentials':true
            },
            success: function (code, status) {
                displayImageFromByteArray(code.base64, document.getElementById("outputEdit"))
                displayImageFromByteArray(code.base64, document.getElementById("output"))
                document.getElementById('name').innerHTML = code.name;
                document.getElementById('nameEdit').value = code.name;
                document.getElementById('brand').innerHTML = code.brand;
                document.getElementById('brandEdit').value = code.brand;
                document.getElementById('description').innerHTML = code.description;
                document.getElementById('descriptionEdit').value = code.description;
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