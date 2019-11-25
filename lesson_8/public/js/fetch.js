/*
  FETCH - fetch(url, [options])
*/

// function FetchDemo(){
//   let url = 'http://test.api.com.ua';
//   Без options это простой GET-запрос, скачивающий содержимое по адресу url

//  let options = {
      // Все опции:
      // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
      // method: 'POST', // GET, PUT, DELETE etc.
      // headers: headers,
      /*
        https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
        Сюда можно передать любые http headers как просто обьектом:
        {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        }
        Или через конструктор

        var myHeaders = new Headers();
            myHeaders.append("Content-Type", "text/plain");
            myHeaders.append("Content-Length", 255);
            myHeaders.append("X-Custom-Header", "ProcessThisImmediately");

        https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers
        https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
      */

      // body: body, // Любые данные для вашего запроса
      // mode: 'nocors',

    /*
      CORS: Cross-Origin Resourse Shairing
      Если просто: то в каком режиме кросс-доммености будет сделан запрос
      Если сложно: доки: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    */
  //};

  fetch('http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2')
    .then(
      (res) => {
        console.log(res);
        return res.json();
      }
    )
    .then( 
      (res) => {
        res.forEach( item => {
          console.log(item);
        })
      }
    )