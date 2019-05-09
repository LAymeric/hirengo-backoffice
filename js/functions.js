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
            'Content-Type': 'application/json'
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
                                errorPopup()
                         },
                   })
        },

        error: function (result, status, error) {
            errorPopup()
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
            'Content-Type': 'application/json'
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
                                errorPopup()
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
            'Content-Type': 'application/json'
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
                                errorPopup()
                         },
                   })
        },

        error: function (result, status, error) {
             errorPopup()
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
            'Content-Type': 'application/json'
        },
        success: function (code, status) {
                $.ajax({
                       url: './php-scripts/saveService.php',
                       type: 'GET',
                       dataType: "json",
                       success: function (code, status) {
                            window.location.href = "./../index.php";
                       },
                        error: function (result, status, error) {
                                errorPopup()
                         },
                   })
        },

        error: function (result, status, error) {
             errorPopup()
        },

        complete: function (result, status) {
        }
    })
}

function saveNewServices(userEmail, array) {
    const data = JSON.stringify({
        userEmail:userEmail,
        serviceIds:array
    })
    $.ajax({
        url: 'http://localhost:8080/api/services/updateAccompanist',
        data: data,
        type: 'POST',
        dataType: "json",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (code, status) {
                $.ajax({
                       url: './php-scripts/saveService.php',
                       type: 'GET',
                       dataType: "json",
                       success: function (code, status) {
                            window.location.href = "./index.php";
                       },
                        error: function (result, status, error) {
                                errorPopup()
                         },
                   })
        },

        error: function (result, status, error) {
                                errorPopup()
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
                                 errorPopup()
                         },
                   })
        },

        error: function (result, status, error) {
            errorPopup()
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
                'Content-Type': 'application/json'
            },
            success: function (code, status) {
               let visualResult =""
                for(let i = 0; i < code.length; i++){
                    const current = code [i];
                    if(current !== null){
                        visualResult += "<div> <input type='checkbox' id='"+current.id+"' value='"+current.id+"' name='"+current.name+"'> <label for='"+current.name+"'>"+current.name+"</label></div>"
                    }
                }
                document.getElementById('content').innerHTML = visualResult;
            },

            error: function (result, status, error) {
                                errorPopup()
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
                'Content-Type': 'application/json'
            },
            success: function (code, status) {
               let visualResult =""
                for(let i = 0; i < code.length; i++){
                    const current = code [i];
                    if(current !== null){
                        visualResult += "<div> <input type='checkbox' id='"+current.id+"' value='"+current.id+"' name='"+current.name+"'> <label for='"+current.name+"'>"+current.name+"</label></div>"
                    }
                }
                document.getElementById('content').innerHTML = visualResult;
            },

            error: function (result, status, error) {
                                errorPopup()
            },

            complete: function (result, status) {
            }
        })
}

function getAllServicesAvailableForAccompanist(email) {
    $.ajax({
            url: 'http://localhost:8080/api/services/accompanist/available/'+email,
            type: 'GET',
            dataType: "json",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success: function (code, status) {
               let visualResult =""
                for(let i = 0; i < code.length; i++){
                    const current = code [i];
                    if(current !== null){
                        visualResult += "<div> <input type='checkbox' id='"+current.id+"' value='"+current.id+"' name='"+current.name+"'> <label for='"+current.name+"'>"+current.name+"</label></div>"
                    }
                }
                document.getElementById('content').innerHTML = visualResult;
            },

            error: function (result, status, error) {
                                errorPopup()
            },

            complete: function (result, status) {
            }
        })
}

function getAllMyServicesForAccompanist(email) {
    $.ajax({
            url: 'http://localhost:8080/api/services/accompanist/'+email,
            type: 'GET',
            dataType: "json",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success: function (code, status) {
               let visualResult =""
                for(let i = 0; i < code.length; i++){
                    const current = code [i];
                    if(current !== null){
                        visualResult += "<div>"+current.name+"</div>"
                    }
                }
                document.getElementById('content').innerHTML = visualResult;
            },

            error: function (result, status, error) {
                                errorPopup()
            },

            complete: function (result, status) {
            }
        })
}

function chooseCourse(courseId, email){
    const data = JSON.stringify({
            commandId:courseId,
            email:email
        })
    $.ajax({
                url: 'http://localhost:8080/api/command/choose',
                data: data,
                type: 'POST',
                dataType: "json",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                success: function (code, status) {
                   let visualResult =""
                    document.location.href="./inProgressCourse.php"
                },

                error: function (result, status, error) {
                                errorPopup()
                },

                complete: function (result, status) {
                }
            })
}

function chooseCourseForAccompanist(courseId, email){
    const data = JSON.stringify({
            commandId:courseId,
            email:email
        })
    $.ajax({
                url: 'http://localhost:8080/api/command/chooseForAccompanist',
                data: data,
                type: 'POST',
                dataType: "json",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                success: function (code, status) {
                   let visualResult =""
                    document.location.href="./inProgressCourse.php"
                },

                error: function (result, status, error) {
                                errorPopup()
                },

                complete: function (result, status) {
                }
            })
}

function endCourse(courseId, email){
    const data = JSON.stringify({
            commandId:courseId,
            email:email
        })
    $.ajax({
            url: 'http://localhost:8080/api/command/end',
            data: data,
            type: 'POST',
            dataType: "json",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success: function (code, status) {
               let visualResult =""
                document.location.href="./courseHistory.php"
            },

            error: function (result, status, error) {
                                errorPopup()
            },

            complete: function (result, status) {
            }
        })
}

function getAllAvailableCoursesForUserAccompanist(email) {
    $.ajax({
            url: 'http://localhost:8080/api/command/availableAccompanist/'+email,
            type: 'GET',
            dataType: "json",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success: function (code, status) {
               let visualResult =""
                for(let i = 0; i < code.length; i++){
                    const current = code [i];
                    if(current !== null){
                       visualResult +=  "<div class=\"col-sm-4 float\" style=\"padding: 20px;\">"
                            +"<div class=\"card\" style=\"width: 18rem; border-color: rgb(91,192,222)\">"
                               +"<div class=\"card-body\">"
                                   + "<div class=\"col text-align-left\" id=\""+current.id+"\">"
                                   + "<h5 class=\"card-title\" style=\"text-align: center;\">" + current.userName + "</h5>"
                                   + "<p class=\"card-text\" style=\"text-align: center\">" + current.start + "</p>"
                                   + "<p class=\"card-text\" style=\"text-align: center\">" + current.end + "</p>"
                                   + "<p class=\"card-text\" style=\"text-align: center\">" + current.startTime + "</p>"
                                   + "<p class=\"card-text\" style=\"text-align: center\">" + current.duration + " minutes</p>"
                                   + "<p class=\"card-text\" style=\"text-align: center\">" + current.distance + " km </p>"
                                   if(current.services){
                                        visualResult += "<p class=\"card-text\" style=\"text-align: center\">"
                                        for(let i =0; i < current.services.length; i++){
                                            visualResult += current.services[i]
                                            visualResult += (i < current.services.length - 1) ? ", " : ""
                                        }
                                        visualResult += "</p><br>"
                                   }
                        visualResult +=  "<div class=\"form-group\" style=\"text-align:center;\">"
                                       + "<button type=\"submit\" class=\"btn btn-primary\" onclick=\"chooseCourseForAccompanist('"+current.id+"','"+email+"')\"><i class=\"fas fa-car-side  big-icon\"></i><i class=\"fas fa-arrow-right big-icon margin-left\"></i></button>"
                                   + "</div>"
                                    +"</div>"
                               +"</div>"
                           +"</div>"
                       +"</div>"
                       }
                }
                document.getElementById('content').innerHTML = visualResult;
            },

            error: function (result, status, error) {
                                errorPopup()
            },

            complete: function (result, status) {
            }
        })
}

function getAllAvailableCourses(email) {
    $.ajax({
            url: 'http://localhost:8080/api/command/available',
            type: 'GET',
            dataType: "json",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success: function (code, status) {
               let visualResult =""
                for(let i = 0; i < code.length; i++){
                    const current = code [i];
                    if(current !== null){
                       visualResult +=  "<div class=\"col-sm-4 float\" style=\"padding: 20px;\">"
                            +"<div class=\"card\" style=\"width: 18rem; border-color: rgb(91,192,222)\">"
                               +"<div class=\"card-body\">"
                                   + "<div class=\"col text-align-left\" id=\""+current.id+"\">"
                                   + "<h5 class=\"card-title\" style=\"text-align: center;\">" + current.userName + "</h5>"
                                   + "<p class=\"card-text\" style=\"text-align: center\">" + current.start + "</p>"
                                   + "<p class=\"card-text\" style=\"text-align: center\">" + current.end + "</p>"
                                   + "<p class=\"card-text\" style=\"text-align: center\">" + current.startTime + "</p>"
                                   + "<p class=\"card-text\" style=\"text-align: center\">" + current.duration + " minutes</p>"
                                   + "<p class=\"card-text\" style=\"text-align: center\">" + current.distance + " km </p><br>"
                                   + "<div class=\"form-group\" style=\"text-align:center;\">"
                                       + "<button type=\"submit\" class=\"btn btn-primary\" onclick=\"chooseCourse('"+current.id+"','"+email+"')\"><i class=\"fas fa-car-side  big-icon\"></i><i class=\"fas fa-arrow-right big-icon margin-left\"></i></button>"
                                   + "</div>"
                                    +"</div>"
                               +"</div>"
                           +"</div>"
                       +"</div>"
                    }
                }
                document.getElementById('content').innerHTML = visualResult;
            },

            error: function (result, status, error) {
                                errorPopup()
            },

            complete: function (result, status) {
            }
        })
}

function getAllHistoryCourses(email) {
    $.ajax({
            url: 'http://localhost:8080/api/command/history/'+email,
            type: 'GET',
            dataType: "json",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success: function (code, status) {
               let visualResult =""
                for(let i = 0; i < code.length; i++){
                    const current = code [i];
                    if(current !== null){
                       visualResult +=  "<div class=\"col-sm-4 float\" style=\"padding: 20px;\">"
                            +"<div class=\"card\" style=\"width: 18rem; border-color: rgb(91,192,222)\">"
                               +"<div class=\"card-body\">"
                                   + "<div class=\"col text-align-left\" id=\""+current.id+"\">"
                                   + "<h5 class=\"card-title\" style=\"text-align: center;\">" + current.userName + "</h5>"
                                   + "<p class=\"card-text\" style=\"text-align: center\">" + current.start + "</p>"
                                   + "<p class=\"card-text\" style=\"text-align: center\">" + current.end + "</p>"
                                   + "<p class=\"card-text\" style=\"text-align: center\">" + current.startTime + "</p>"
                                   + "<p class=\"card-text\" style=\"text-align: center\">" + current.duration + " minutes</p>"
                                   + "<p class=\"card-text\" style=\"text-align: center\">" + current.distance + " km </p>"
                                   + "<p class=\"card-text\" style=\"text-align: center\">" + current.price + " € </p><br>"

                                    +"</div>"
                               +"</div>"
                           +"</div>"
                       +"</div>"
                   }
                }
                document.getElementById('content').innerHTML = visualResult;
            },

            error: function (result, status, error) {
                                errorPopup()
            },

            complete: function (result, status) {
            }
        })
}

function getAllHistoryCoursesForAccompanist(email) {
    $.ajax({
            url: 'http://localhost:8080/api/command/historyAccompanist/'+email,
            type: 'GET',
            dataType: "json",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success: function (code, status) {
               let visualResult =""
                for(let i = 0; i < code.length; i++){
                    const current = code [i];
                    if(current !== null){
                       visualResult +=  "<div class=\"col-sm-4 float\" style=\"padding: 20px;\">"
                            +"<div class=\"card\" style=\"width: 18rem; border-color: rgb(91,192,222)\">"
                               +"<div class=\"card-body\">"
                                   + "<div class=\"col text-align-left\" id=\""+current.id+"\">"
                                   + "<h5 class=\"card-title\" style=\"text-align: center;\">" + current.userName + "</h5>"
                                   + "<p class=\"card-text\" style=\"text-align: center\">" + current.start + "</p>"
                                   + "<p class=\"card-text\" style=\"text-align: center\">" + current.end + "</p>"
                                   + "<p class=\"card-text\" style=\"text-align: center\">" + current.startTime + "</p>"
                                   + "<p class=\"card-text\" style=\"text-align: center\">" + current.duration + " minutes</p>"
                                   + "<p class=\"card-text\" style=\"text-align: center\">" + current.distance + " km </p>"
                                   + "<p class=\"card-text\" style=\"text-align: center\">" + current.price + " € </p><br>"

                                    +"</div>"
                               +"</div>"
                           +"</div>"
                       +"</div>"
                       }
                }
                document.getElementById('content').innerHTML = visualResult;
            },

            error: function (result, status, error) {
                                errorPopup()
            },

            complete: function (result, status) {
            }
        })
}

function getCurrentCourses(email) {
    $.ajax({
            url: 'http://localhost:8080/api/command/current/'+email,
            type: 'GET',
            dataType: "json",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success: function (code, status) {
               let visualResult =""
                for(let i = 0; i < code.length; i++){
                    const current = code [i];
                    if(current !== null){
                       visualResult +=  "<div class=\"col-sm-4 float\" style=\"padding: 20px;\">"
                            +"<div class=\"card\" style=\"width: 18rem; border-color: rgb(91,192,222)\">"
                               +"<div class=\"card-body\">"
                                   + "<div class=\"col text-align-left\" id=\""+current.id+"\">"
                                   + "<h5 class=\"card-title\" style=\"text-align: center;\">" + current.userName + "</h5>"
                                   + "<p class=\"card-text\" style=\"text-align: center\">" + current.start + "</p>"
                                   + "<p class=\"card-text\" style=\"text-align: center\">" + current.end + "</p>"
                                   + "<p class=\"card-text\" style=\"text-align: center\">" + current.startTime + "</p>"
                                   + "<p class=\"card-text\" style=\"text-align: center\">" + current.duration + " minutes</p>"
                                   + "<p class=\"card-text\" style=\"text-align: center\">" + current.distance + " km </p>"
                                   + "<p class=\"card-text\" style=\"text-align: center\">" + current.price + " € </p><br>"
                                   + "<div class=\"form-group\" style=\"text-align:center;\">"
                                      + "<button type=\"submit\" class=\"btn btn-primary\" onclick=\"endCourse('"+current.id+"','"+email+"')\"><i class=\"fas fa-stop-circle big-icon\"></i><i class=\"fas fa-euro-sign big-icon margin-left\"></i></button>"
                                    + "</div>"
                                    +"</div>"
                               +"</div>"
                           +"</div>"
                       +"</div>"
                   }
                }
                document.getElementById('content').innerHTML = visualResult;
            },

            error: function (result, status, error) {
                                errorPopup()
            },

            complete: function (result, status) {
            }
        })
}

function getCurrentCoursesForAccompanist(email) {
    $.ajax({
            url: 'http://localhost:8080/api/command/currentForAccompanist/'+email,
            type: 'GET',
            dataType: "json",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success: function (code, status) {
            let visualResult =""
            for(let i = 0; i < code.length; i++){
                const current = code [i];
                if(current !== null){
                visualResult +=  "<div class=\"col-sm-4 float\" style=\"padding: 20px;\">"
                               +"<div class=\"card\" style=\"width: 18rem; border-color: rgb(91,192,222)\">"
                                  +"<div class=\"card-body\">"
                                      + "<div class=\"col text-align-left\" id=\""+current.id+"\">"
                                      + "<h5 class=\"card-title\" style=\"text-align: center;\">" + current.userName + "</h5>"
                                      + "<p class=\"card-text\" style=\"text-align: center\">" + current.start + "</p>"
                                      + "<p class=\"card-text\" style=\"text-align: center\">" + current.end + "</p>"
                                      + "<p class=\"card-text\" style=\"text-align: center\">" + current.startTime + "</p>"
                                      + "<p class=\"card-text\" style=\"text-align: center\">" + current.duration + " minutes</p>"
                                      + "<p class=\"card-text\" style=\"text-align: center\">" + current.distance + " km </p>"
                                      + "<p class=\"card-text\" style=\"text-align: center\">" + current.status + "</p>"
                                      if(current.services){
                                           visualResult += "<p class=\"card-text\" style=\"text-align: center\">"
                                           for(let i =0; i < current.services.length; i++){
                                               visualResult += current.services[i]
                                               visualResult += (i < current.services.length - 1) ? ", " : ""
                                           }
                                           visualResult += "</p><br>"
                                      }
                           visualResult +=  "</div>"
                                  +"</div>"
                              +"</div>"
                          +"</div>"
                          }
                          }
                document.getElementById('content').innerHTML = visualResult;
            },

            error: function (result, status, error) {
                                errorPopup()
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
                'Content-Type': 'application/json'
            },
            success: function (code, status) {
               let visualResult ="<div class=\"container-main\"><div class=\"row\">"
               if(code.length > 0){
                    for(let i = 0; i < code.length; i++){
                       const current = code [i];
                        if(current !== null){
                           visualResult +=  "<div class=\"col-sm-4 float\" style=\"padding: 20px;\">"
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
                   }
               }else{
                    visualResult = "<h2>No result</2>"
               }

                visualResult += "</div></div>"
                document.getElementById('content').innerHTML = visualResult;
            },

            error: function (result, status, error) {
                                errorPopup()
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
                'Content-Type': 'application/json'
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
                                errorPopup()
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
                'Content-Type': 'application/json'
            },
            success: function (code, status) {
                   console.log("code"+JSON.stringify(code))

            },

            error: function (result, status, error) {
                                errorPopup()
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
                                errorPopup()
        },

        complete: function (result, status) {
        }
    })
}


var isShowing = false;
function successPopup() {
    if(!isShowing){
        isShowing = true;
        var popup = document.getElementById("successPopup");
        popup.className="popuptext show";
        setTimeout(function() {
            popup.className="popuptext invisible";
            isShowing = false;
        },5000);
    }
}
function errorPopup() {
    if(!isShowing) {
        isShowing = true;
        var popup = document.getElementById("errorPopup");
        popup.className="popuptext show";
        setTimeout(function () {
            popup.className="popuptext invisible";
            isShowing = false;
        }, 5000);
    }
}