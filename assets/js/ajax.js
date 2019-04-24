
$('.modal_send-btn').on('click', function (e) {
    var username = document.getElementById("user-name");
    var usermail = document.getElementById("user-email");
    var usernumber = document.getElementById("user-number");
    (e).preventDefault();
    //проверка форм на соответствие паттерну
    if ((username.checkValidity()) && (usermail.checkValidity()) && (usernumber.checkValidity())) {
        //собираем данные инпутов
        var data = $('#form').serialize();
        $.ajax({
            url: 'assets/send.php',
            type: 'POST',
            data: data,
            timeout: 15000,
            beforeSend: function () {
                //перед отправкой скрываем кнопку отправки и показываем прелоадер
                $('.modal_send-btn').hide();
                $('.modal_load-container').show();
            },
            success: function (response) {
                console.log(response)
                var responseStatus = response.substr(-21);
                //проверка статуса SMTP
                console.info(responseStatus)
                if (responseStatus == ('Message has been sent')) {
                    //прячем сам прелодаер
                    $('.modal_load-speeding-wheel').hide();
                    //вставляем статус отправки
                    $('.modal_load-container').text('Заявка отправлена!');

                    //скрываем модальное окно по клику кнопки если заявка отправлена
                    $('.modal_load-container').on('click', function () {

                        $('.modal-outer, .modal-content').removeClass('active');
                        //возвращаем текст "отправить заявку"
                        $('.modal_send-btn').show().text('Отправить заявку!');
                        //убираем содержимое контейнера
                        $('.modal_load-container').text('');
                        // вовзращаем прелоадер
                        $('.modal_load-container').append('<div class="modal_load-speeding-wheel"></div>');
                        //возвращаем кнопку
                        $('.modal_send-btn').show();
                        //прячем контейнер с прелоадером
                        $('.modal_load-container').hide();

                    });
                } else {
                    // если статус SMTP not send

                    $('.modal_load-container').hide();
                    $('.modal_load-speeding-wheel').show();
                    $('.modal_send-btn').show().text('Не отправлено! Пробуем еще раз?');
                }

            },
            error: function (request, status, error) {
                // другие ошибки
                console.log(request, status, error)
                console.warn('kek')
                $('.modal_load-container').hide();
                $('.modal_load-speeding-wheel').show();
                $('.modal_send-btn').show().text('Не отправлено! Пробуем еще раз?');
            }
        });
    } else {
        //проверка на пустые формы при клике на кнопку отправки
        if ((username.checkValidity()) == false) {
            try {
                username.reportValidity();
                //тоже самое для IE
            } catch (err) {
                if (!($('#user-name').next().css("display") == "inline")) {
                    $('#user-name').next().show();
                    window.setTimeout(function () {
                        $('#user-name').next().hide();
                    }, 2500);
                }
            }
        }
        if ((usermail.checkValidity()) == false) {
            try {
                usermail.reportValidity();
            } catch (err) {
                $('#user-email').next().show();
                window.setTimeout(function () {
                    $('#user-email').next().hide();
                }, 2500);

            }
        }
        if ((usernumber.checkValidity()) == false) {
            try {
                usernumber.reportValidity();
            } catch (err) {
                $('#user-number').next().show();
                window.setTimeout(function () {
                    $('#user-number').next().hide();
                }, 2500);

            }
        }
    }
});