/*
  Задача:

  1. При помощи fetch получить данные:
     http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2

  2. Полученый ответ преобразовать в json вызвав метод .json с объекта ответа
  3. Выбрать случайного человека и передать в следующий чейн промиса
  4. Сделать дополнительный запрос на получение списка друзей человека
     http://www.json-generator.com/api/json/get/bTBBXQabKG?indent=2
     И дальше передать обьект:
      {
        name: userName,
        ...
        friends: friendsData
      }

     Подсказка нужно вызвать дополнительный fecth из текущего чейна.
     Для того что бы передать результат выполнения доп. запроса
     в наш первый промис используйте констуркцию:

      .then(
        response1 => {
          return fetch(...)
            .then(
              response2 => {
                ...
                формируете обьект в котором будут данные человека с
                первого запроса, например его name response1.name
                и друзья которые пришли из доп. запроса
              }
            )
        }
      )

  5. Вывести результат на страничку

  + Бонус. Для конвертации обьекта response в json использовать одну
    функцию.

*/


  // fetch(url)
  //   .then(testFunc)
  //   .then(test2Func)
  //   .then( res => {
  //      return fetch()
  //       .then( friendsResponse)
  //       .then()
  //   })
  //   .then( func)

  fetch('http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2')
    .then(
      (human) => {
        console.log('res1', human);
        return human.json();
      }
    )
    .then( 
      (human) => {
        let randVal = Math.round(Math.random() * 10) ;
        console.log(human[randVal]);
        return human[randVal];
      }
    )
    .then(
      (human) => {
        return fetch('http://www.json-generator.com/api/json/get/bTBBXQabKG?indent=2')
        .then(
          (friends) => {
            console.log('res2', friends);
            return friends.json();
          }
         )
         .then(
          (friends) => {
            let obj = {
              name: human.name,
              friends: friends
            }
            // console.dir(obj);
            let promises = document.getElementById('promises');
            let ul = document.createElement('ul');
            

            promises.innerHTML = obj.name;
            let friendsArr = obj.friends[0].friends;

            friendsArr.forEach( function(el) {
              let li = document.createElement('li');
              li.innerText = el.name
              ul.appendChild(li);
              
              
            });
            promises.appendChild(ul);
            console.log(ul);
            
            
          }
        )
      }
    )

  
