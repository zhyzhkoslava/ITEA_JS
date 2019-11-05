/*

  Задание 1.

  Написать функцию которая будет задавать СЛУЧАЙНЫЙ цвет для фона.
  Каждая перезагрузка страницы будет с новым цветом.
  Для написания используйте функцию на получение случайного целого числа,
  между минимальным и максимальным значением (Приложена снизу задания)

  + Бонус, повесить обработчик на кнопку через метод onClick
  + Бонус, использовать 16-ричную систему исчесления и цвет HEX -> #FFCC00
  + Бонус выводить полученый цвет по центру страницы.
  
  Необходимо создать блок через createElement задать ему стили через element.style
  и вывести через appendChild или insertBefore

  Необходимые материалы:
    Math.Random (Доки): https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    __
    Работа с цветом:
    Вариант 1.
      Исользовать element.style.background = 'rgb(r,g,b)';
      где r,g,b случайное число от 0 до 255;

    Вариант 2.
      Исользовать element.style.background = '#RRGGBB';
      где, RR, GG, BB, значние цвета в 16-ричной системе исчесления
      Формирование цвета в вебе: https://ru.wikipedia.org/wiki/%D0%A6%D0%B2%D0%B5%D1%82%D0%B0_HTML
      Перевод в 16-ричную систему исчесления делается при помощи
      метода Number.toString( 16 ) https://www.w3schools.com/jsref/jsref_tostring_number.asp,

      var myNumber = '251'
      myNumber.toString(16) // fb

*/
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var el1 = getRandomIntInclusive(0, 255).toString(16);
var el2 = getRandomIntInclusive(0, 255).toString(16);
var el3 = getRandomIntInclusive(0, 255).toString(16);
var color = '#' + el1 + el2 + el3;

document.body.style.background = color;

var div = document.createElement('div');
div.className = "main";

var btn = document.createElement('button');
btn.innerText = "click ME!"
btn.onclick = function() {
  var el1 = getRandomIntInclusive(0, 255).toString(16);
  var el2 = getRandomIntInclusive(0, 255).toString(16);
  var el3 = getRandomIntInclusive(0, 255).toString(16);
  var color = '#' + el1 + el2 + el3;

  document.body.style.background = color;
  p.innerText = color;
}

let parent = document.querySelector('#app');
parent.appendChild(div);
  div.appendChild(btn);
  div.align = 'center'
let p = document.createElement('p');
  p.align = 'center'
  p.innerText = color;
div.appendChild(p);
function MyArray() { }
MyArray.prototype = [];

let arr = new MyArray();
arr.push(1, 2, 3);
alert(arr.length);







