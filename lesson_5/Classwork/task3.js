/*

    Задание 3:

    1. Создать ф-ю констурктор которая создаст новую собаку у которой есть имя и порода
    2. Обьект должен иметь пару свойств (Имя, порода, status)
    3. Функцию которая производит манипуляцию со свойствами (Собака бежит), (Собака есть)
    4. Функция которая перебором выводит все свойства


    Dog {
      name: '',
      breed: '',
      status: 'idle',

      changeStatus: function(){...},
      showProps: function(){...}
    }

    // Перебор свойств и методов обьекта
    for (key in obj) {
      console.log( key, obj[key] );
      /* ... делать что-то с obj[key] ...
    // }
*/

  function Dog(name, breed) {

    this.name = name;
    this.breed = breed;
    this.status = 'idle';

    this.changeStatus = function(status){
      return this.status = status;
    },

    this.showProps = function(){
      for (var key in this){
        console.log(key);
      }
      // console.log(Object.keys(this));
    }

  }

  var firstDog = new Dog("Ivan", "Ivanov");
  firstDog.changeStatus('maladec');
  firstDog.showProps();
  

