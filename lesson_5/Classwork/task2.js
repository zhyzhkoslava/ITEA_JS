/*

    Задание 2.

    Напишите фунцию, которая изменяет цвет-фона и цвет текста, присваивая к новым цветам
    значение из this.color, this.background
    А так же добавляет элемент h1 с текстом "I know how binding works in JS"

    1.1 Ф-я принимает один аргумент,
    второй попадает в него через метод .call(obj)

    1.2 Ф-я не принимает никаких аргументов,
    а необходимые настройки полностью передаются через bind

    1.3 Ф-я принимает фразу для заголовка,
    обьект с настройками передаем через .apply();

*/

  var colors = {
    background: 'purple',
    color: 'white'
  }

  function myCall(background){
    document.body.style.background = background;
    document.body.style.color = this.color;
    var h1 = document.createElement('h1');
    h1.innerText = "I know how binding works in JS";
    document.body.appendChild(h1);
  }

  function myBind(){
    document.body.style.background = this.background;
    document.body.style.color = this.color;
    var h1 = document.createElement('h1');
    h1.innerText = "I know how binding works in JS";
    document.body.appendChild(h1);
  }

  function myApply(header){
    document.body.style.background = this.background;
    document.body.style.color = this.color;
    var h1 = document.createElement('h1');
    h1.innerText = header;
    document.body.appendChild(h1);
  }
  // var call = myCall.call(colors, 'green'); 
  // console.log(call);

  // var call = myCall.bind(colors); //working
  // call();

  // myBind = myCall.bind(colors);
  // myBind();

  // var bind = myBind.bind(colors); //working
  // bind();

  // var apply = myApply.apply(colors, ['maladec!']); // working
  // apply();



