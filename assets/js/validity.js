
//валидация для браузеров которые не поддерживают css input и reportValidity()
function validateName() {
    var inputId = document.getElementById("user-name");
    var pat = new RegExp(/^[а-яА-ЯёЁa-zA-Z-_\.]{1,20}\s?$/);
    var name = pat.test(inputId.value);
    if (!name) {
        $('#user-name').next().show();
        $('#user-name').css("border", "1px solid red");
    } else {
        $('#user-name').next().hide();
        $('#user-name').css("border", "1px solid #17bf0f");

    }
    //убираем красную подстветку если юзер стер значения инпутов
    if (inputId.value == '') {
        $('#user-name').next().hide();
        $('#user-name').css("border", "1px solid #ebf0f1");
    }
}


function validateEmail() {
    var inputId = document.getElementById("user-email");
    var pat1 = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\s?$/);
    var email = pat1.test(inputId.value);
    if (!email) {
        $('#user-email').next().show();
        $('#user-email').css("border", "1px solid red");
    } else {
        $('#user-email').next().hide();
        $('#user-email').css("border", "1px solid #17bf0f");
    }
    if (inputId.value == '') {
        $('#user-email').next().hide();
        $('#user-email').css("border", "1px solid #ebf0f1");
    }
}

function validateNumber() {
    var inputId = document.getElementById("user-number");
    var pattern = new RegExp(/^((\+7|7|8)+([0-9]){10})$/);
    var number = pattern.test(inputId.value);
    if (!number) {
        $('#user-number').next().show();
        $('#user-number').css("border", "1px solid red");
    } else {
        $('#user-number').next().hide();
        $('#user-number').css("border", "1px solid #17bf0f");
    }
    if (inputId.value == '') {
        $('#user-number').next().hide();
        $('#user-number').css("border", "1px solid #ebf0f1");
    }
}

//проверка инпутов для мелкомягих
(function microsoftCheckBrowser() {
    if ((/MSIE 10/i.test(navigator.userAgent)) || (/MSIE 9/i.test(navigator.userAgent)) || (/rv:11.0/i.test(navigator.userAgent)) || (/Edge\/\d./i.test(navigator.userAgent))) {

        document.getElementById('user-name').addEventListener('input', function () {
            validateName(this);
        });
        document.getElementById('user-email').addEventListener('input', function () {
            validateEmail(this);
        });
        document.getElementById('user-number').addEventListener('input', function () {
            validateNumber(this);
        });
    }
    ;
})();