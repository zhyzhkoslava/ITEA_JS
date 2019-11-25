console.log('cookies works', document.cookie);
/*

  Cookies - специальный формат для сохранения данных который хранится в браузере.
  Сохраняет пары значений name-value:
  username = Vasya Pupkin
  document.cookie

*/

// Значение Cookie не могут содержать точку с запятой, запятые или символы разделители.
// Перед сохранением значение в cookie желательно вызвать функцию encodeURIComponent()
// при чтении значения надо вызвать decodeURIComponent()
// записанный cookie сохраняются в текущем сеансе браузера

// следующий cookie будет хранится браузером на проятжении 1 недели (60 * 60 * 24 * 7).
// document.cookie = "info=123;max-age=604800;";

// следующий cookie будет хранится браузером на проятжении 10мс
// document.cookie = "info=helloJavaScript;max-age=10;";

// console.log( document.cookie );
// Установить дату на 1 день + от текущего момента.
// var date = new Date();
//     date = date.setMinutes( date.getMinutes() + 1 );
//     console.log('date', date );
// //actors
// document.cookie = `Hello=JavaScript;max-age=${date};`;


// Удаление куки:
// var date = new Date(0);
// console.log( date );
// document.cookie = "Hello=; path=/; expires=" + date;


// Получение куки
// var cookies = document.cookie.split(';');
// console.log( cookies );

// функции для работы с куками

// function setCookie(name, value, options) {
//   options = options || {};

//   var expires = options.expires;

//   if (typeof expires == "number" && expires) {
//     var d = new Date();
//     d.setTime(d.getTime() + expires * 1000);
//     expires = options.expires = d;
//   }
//   if (expires && expires.toUTCString) {
//     options.expires = expires.toUTCString();
//   }
//   value = encodeURIComponent(value);

//   var updatedCookie = `${name}=${value}`;
//   for (var propName in options) {
//     updatedCookie += "; " + propName;
//     var propValue = options[propName];
//     if (propValue !== true) {
//       updatedCookie += "=" + propValue;
//     }
//   }
//   // console.log( new Date().getMilliseconds() );
//   // console.log(updatedCookie);
//   document.cookie = updatedCookie;
// }

// function deleteCookie(name) {
//   setCookie(name, "", {
//     expires: -1
//   });
// }

// setCookie(
//   'testpath',
//   '13123',
//   {
//     expires: 127812398,
//     path: '/test'
//   });

