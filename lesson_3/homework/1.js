/*

  Задание написать простой слайдер.

    Есть массив с картинками из которых должен состоять наш слайдер.
    По умолчанию выводим первый элмемнт нашего слайдера в блок с id='slider'
    ( window.onload = func(){...} // window.addEventListener('load', function(){...}) )
    По клику на PrevSlide/NextSlide показываем предыдущий или следующий сладй соответствено.

    Для этого необходимо написать 4 функции которые будут:

    1. Срабатывать на событие load обьекта window и загружать наш слайд по умолчанию.
    2. RenderImage -> Очищать текущий контент блока #slider. Создавать нашу картинку и через метод аппенд чайлд вставлять её в слайдер.
    3. NextSlide -> По клику на NextSilde передавать currentPosition текущего слайда + 1 в функцию рендера
    4. PrevSlide -> Тоже самое что предыдущий вариант, но на кнопку PrevSlide и передавать currentPosition - 1
      + бонус сделать так что бы при достижении последнего и первого слада вас после кидало на первый и последний слайд соответственно.
      + бонус анимация появления слайдов через навешивание дополнительных стилей

*/

window.onload = function() {

  var OurSliderImages = ['images/cat1.jpg', 'images/cat2.jpg', 'images/cat3.jpg', 'images/cat4.jpg', 'images/cat5.jpg', 'images/cat6.jpg', 'images/cat7.jpg', 'images/cat8.jpg'];
  var currentPosition = 0;
  var arrLength = OurSliderImages.length;
  var NextSlide = document.getElementById('NextSlide');
  var PrevSlide = document.getElementById('PrevSlide');
  var div = document.getElementById('slider');

  var img = document.createElement('img');
  // img.classList.add("animation");
  img.id = 'addImg';
  div.appendChild(img);

  NextSlide.onclick = function() {
    currentPosition++;
    if (currentPosition == arrLength) {
      currentPosition = 0;
    };
    RenderImage(currentPosition);
  }

  PrevSlide.onclick = function() {
    currentPosition--;
    if (currentPosition == -1) {
      currentPosition = arrLength-1;
    };
    RenderImage(currentPosition);
  }

  function RenderImage(currentPosition) {

      img.src = OurSliderImages[currentPosition];
      console.log(currentPosition);
  }
  setTimeout( function(){
    img.classList.add('animation');
  }, 500);

}


