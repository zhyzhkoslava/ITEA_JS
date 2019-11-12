    /*

        Документация:
        
        https://developer.mozilla.org/ru/docs/HTML/HTML5/Constraint_validation
        
        form.checkValidity() > Проверка всех полей формы на валидость
        form.reportValidity() > Проверяет все поля на валидность и выводит возле каждого из не прошедшего валидацию
            сообщение с ошибкой

        formElement.validity > Объект с параметрами валидности поля 
        formElement.setCustomValidity(message) > Метод который задаст validity.valid = false, и при попытке отправки
            сообщения выведет message в браузерный попал

        Классы для стилизации состояния элемента
        input:valid{}
        input:invalid{}

        
        Задание:
        
        Используя браузерное API для валидации форм реализовать валидацию следующей формы:
        

        - Имя пользователя: type:text -> validation: required; minlength = 2;  
            Если пустое выввести сообщение: "Как тебя зовут дружище?!"
        - Email: type: email -> validation: required; minlength = 3; validEmail;
            Если эмейл не валидный вывести сообщение "Ну и зря, не получишь бандероль с яблоками!"
        - Пароль: type: password -> validation: required; minlength = 8; maxlength=16;
            Если пустой вывести сообщение: "Я никому не скажу наш секрет";
        - Количество сьеденых яблок: type: number -> validation: required; minlength = 1; validNumber;
            Если количество 0 вывести эррор с сообщением "Ну хоть покушай немного... Яблочки вкусные"
        - Напиши спасибо за яблоки: type: text -> validation: required; 
            Если текст !== "спасибо" вывести эррор с сообщением "Фу, неблагодарный(-ая)!" используя setCustomValidity();

        - Согласен на обучение: type: checkbox -> validation: required;
            Если не выбран вывести эррор с сообщение: "Необразованные живут дольше! Хорошо подумай!"

        Внизу две кнопки:

        1) Обычный submit который отправит форму, если она валидна.
        2) Кнопка Validate(Проверить) которая запускает методы:
            - yourForm.checkValidity: и выводит на страницу сообщение с результатом проверки
            - yourForm.reportValidity: вызывает проверку всех правил и вывод сообщения с ошибкой, если такая есть

    */
    var myForm = document.querySelector('#myForm');   
    var submitBtn = document.querySelector('#submitBtn');
    var validateBtn = document.querySelector('#validateBtn');

    // console.log(myForm, submitBtn, validateBtn);

    submitBtn.addEventListener('click', function(){
        var inputs = Array.from(myForm.elements);
        var valid = true;
        console.log(inputs);

        inputs.forEach(function(input) {
            if (!input.validity.valid) {
                valid = false
            }
        });

        if (valid) {
            console.log('form submitted!');
        }
    });
    validateBtn.addEventListener('click', function() { 
        myForm.querySelectorAll('input').forEach(function(input) {
            input.setCustomValidity('');
        });

        if (myForm.name.validity.valueMissing) {
            myForm.name.setCustomValidity('Как тебя зовут дружище?!');
        } 

        if (myForm.email.validity.typeMismatch) {
            myForm.email.setCustomValidity('Ну и зря, не получишь бандероль с яблоками!');
        } 

        if (myForm.pass.validity.valueMissing) {
            myForm.pass.setCustomValidity('Я никому не скажу наш секрет');
        } 

        if (myForm.apples.value === 0) {
            myForm.apples.setCustomValidity('Ну хоть покушай немного... Яблочки вкусные');
        } 

        if (myForm.thank.value !== 'спасибо') {
            myForm.thank.setCustomValidity('Фу, неблагодарный(-ая)!');
        } 

        if (myForm.agree.validity.valueMissing) {
            myForm.agree.setCustomValidity('Необразованные живут дольше! Хорошо подумай!')
        } 
              
        if (!myForm.checkValidity()) {
            myForm.reportValidity();
            return;
        }

        alert('form can be submitted!');
    });

