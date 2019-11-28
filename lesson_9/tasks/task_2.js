/*

    Задание 2:
    Написать форму логина (логин пароль), которая после отправки данных записывает их в localStorage.
    Если в localStorage есть записть - На страниче вывести "Привет {username}", если нет - вывести окно
    логина.

    + бонус, сделать кнопку "выйти" которая удаляет запись из localStorage и снова показывает форму логина
    + бонус сделать проверку логина и пароля на конкретную запись. Т.е. залогинит пользователя если
    он введет только admin@example.com и пароль 12345678


*/
let myForm = document.getElementById('myForm');
let submitBtn = document.getElementById('submitBtn');
let logoutBtn = document.getElementById('logoutBtn');

var localStoreName = localStorage.getItem("uname");
var localStorePass = localStorage.getItem("psw");

if (localStorage.getItem("uname")) {
    myForm.setAttribute("class", "hidden");
    logoutBtn.classList.remove("hidden");
    alert(`Hello ${localStoreName}`);
}

submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    let psw = document.getElementById('psw').value;
    let uname = document.getElementById('uname').value;

    if (uname === 'admin@example.com' && psw === '12345678') {
        localStorage.setItem('uname', uname);
        localStorage.setItem('psw', psw);

        myForm.setAttribute("class", "hidden");
        logoutBtn.classList.remove("hidden");

        var localStoreName = localStorage.getItem("uname");
        var localStorePass = localStorage.getItem("psw");
        if (localStorage.getItem("uname")) {
            alert(`Hello ${localStoreName}`);
        }
    }
    else {
        alert ('Not valid logg or pass!');
    }
});

logoutBtn.addEventListener('click', function(e) {
    e.preventDefault();
    myForm.classList.remove("hidden");
    logoutBtn.classList.add("hidden");
    localStorage.removeItem("psw");
    localStorage.removeItem("uname");
});