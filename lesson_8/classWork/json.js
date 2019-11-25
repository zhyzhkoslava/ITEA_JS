
/*
  Задание:
  Написать скрипт который:
    1. Собирает данные с формы (3 разных полей), конвертирует их в json и выводит в консоль.
  ->  2. Сделать отдельный инпут который выполняет JSON.parse(); на ту строку что вы туда ввели и выводит результат в консоль.

  Array.from(HTMLNodeColection); -> Arary

  <form>
    <input name="name" />
    <input name="age"/>
    <input name="password"/>
    <button></button>
  </form>

  <form>
    <input />
    <button></button>
  </form>
  -> '{"name" : !"23123", "age": 15, "password": "*****" }'


*/
var myFormElements = document.querySelector('#myForm');  
var submitBtn = document.querySelector('#submitBtn');

submitBtn.addEventListener('click', function(e){
  e.preventDefault();
  var dataObj = {};


  // *****method 1*****
  // for(var i = 0 ; i < myFormElements.length ; i++){
  //   var item = myFormElements.item(i);
  //   dataObj[item.name] = item.value;
  // }
  // var json = JSON.stringify(dataObj);
  // console.log(json);


  // *****method 2******
  var arr = Array.from(myFormElements);
  arr.forEach(function(e) {
    dataObj[e.name] = e.value;
  });
  var json = JSON.stringify(dataObj);
  console.log(json);

});

var jsonParse = document.querySelector('#jsonParse');  
var form2 = document.querySelector('#form2');

jsonParse.addEventListener('click', function(e){
  e.preventDefault();
  
  var json = form2.elements[0].value;
  
  var res = JSON.parse(json);
  console.log(res);
})