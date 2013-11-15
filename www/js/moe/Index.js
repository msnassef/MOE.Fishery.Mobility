jQuery.support.cors = true;
var succeededUsername;
var succeededPassword;
function sliderightto(url) {
    app.navigate(
    url,
    'slide:right' //or whichever transition you like
);
}

function navigateTo(url) {
    app.navigate(
    url
);
}

//var serviceurl = "http://10.104.2.81/Nasef_Mobile/MOE_Mobile.asmx"; // for pc 
var serviceurl = "http://192.168.1.75/Nasef_Mobile/MOE_Mobile.asmx"; // for labtop computer test
//var serviceurl = "http://localhost/NASEF_ASMX/MOE_Mobile.asmx"; // for computer test
var service = new WS(serviceurl);

$(function () {
    $('#btnLogin').click(function () {
        var usernameVal = $('#txtUsername').val();
        var passwordVal = $('#txtPassword').val();

        service.call("Login", { userName: usernameVal, password: passwordVal }, function (data) {
            if (data == "succeeded") {
                alert('succeeded');
                succeededUsername = usernameVal;
                succeededPassword = passwordVal;
                navigateTo("mainMenu.html");
            }
            else {
                $("#modalview-login").kendoMobileModalView("open");
            }
        },
        function (error) { alert('error'); debugger; });
    });

});

function btnLogin_Click() {
    alert('bb');
    var usernameVal = $('#txtUsername').val();
    var passwordVal = $('#txtPassword').val();


    $.ajax({
        type: "POST",
        url: serviceurl + "/login",
        data: JSON.stringify({ userName: usernameVal, password: passwordVal }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            alert('succeeded');
           if (msg.d == 'succeeded') {
                navigateTo("mainMenu.html");
            }
            else {
                $("#modalview-login").kendoMobileModalView("open");
            }
        },
        error: function (e) {
            debugger;
        }
    });

    //service.call("Login", { userName: usernameVal, password: passwordVal }, function (data) {
    //    if (data == "succeeded") {
    //        alert('succeeded');
    //        succeededUsername = usernameVal;
    //        succeededPassword = passwordVal;
    //        navigateTo("mainMenu.html");
    //    }
    //    else {
    //        $("#modalview-login").kendoMobileModalView("open");
    //    }
    //},
    //function (error) { alert('error'); debugger; });
    //return false;
}

function tryme() {
    alert('try me from file');
}

function callMethod() {
    alert('7a7a');
    var usernameVal = $('#txtUsername').val();
    var passwordVal = $('#txtPassword').val();
    $.ajax({
        type: "POST",
        url: serviceurl + "/login",
        data: JSON.stringify({ userName: usernameVal, password: passwordVal }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            alert('succeeded');
        },
        error: function (e) {
            debugger;
        }
    });
}