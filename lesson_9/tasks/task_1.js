/*

    Задание 1:
    Написать скрипт, который по клику на кнопку рандомит цвет и записывает его в localStorage
    После перезагрузки страницы, цвет должен сохранится.

*/

let btnRandom = document.getElementById('btnRandomColor');
let colorArr = ['red', 'green', 'blue', 'white', 'black', 'navy', 'purple', 'grey', 'violet','neon','lightblue'];

btnRandom.addEventListener('click', function() {
    let randomIntVal = ((Math.random()*10)).toFixed();
    localStorage.setItem('color', colorArr[randomIntVal]);
    // console.log(colorArr[randomIntVal], randomIntVal);
})
