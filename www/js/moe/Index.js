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

function btnLogin_Click() {
    var usernameVal = $('#txtUsername').val();
    var passwordVal = $('#txtPassword').val();


    callAjaxMethod("login", { userName: usernameVal, password: passwordVal }, onLoginSucceeded, onLoginCallError);
}

function callAjaxMethod(method, data, OnSucceedHandler, OnErrorHandler) {
    $.ajax({
        type: "POST",
        url: serviceurl + '/' + method,
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            if (OnSucceedHandler)
                OnSucceedHandler(response.d);
        },
        error: OnErrorHandler
    });
}
function onLoginSucceeded(data) {
    if (data == 'succeeded') {
        navigateTo("mainMenu.html");
    }
    else {
        alert('خطأ في اسم الدخول أو كلمة المرور');
        //  $("#modalview-login").kendoMobileModalView("open");
    }
}
function onLoginCallError(error) {
    alert('error in service call');
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