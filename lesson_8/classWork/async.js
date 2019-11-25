/*

  Задание:

    Написать при помощи async-await скрипт, который:

    Получает список компаний:  http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2
    Перебирает, выводит табличку:

    # | Company  | Balance | Показать дату регистрации | Показать адресс |
    1.| CompName | 2000$   | button                    | button
    2.| CompName | 2000$   | 20/10/2019                | button
    3.| CompName | 2000$   | button                    | button
    4.| CompName | 2000$   | button                    | button

    Данные о дате регистрации и адресс скрывать при выводе и показывать при клике.

*/
let table = document.getElementById('table');
let tbody = document.getElementById('tbody');
let row;

function showBalance(value) {

  if (this.event.target.innerHTML === 'some text') {
    this.event.target.innerHTML = value;
  }
  else {
    this.event.target.innerHTML = 'some text';
  }

}

function showRegistered(value) {
  if (this.event.target.innerHTML === 'some text') {
    this.event.target.innerHTML = value;
  }
  else {
    this.event.target.innerHTML = 'some text';
  }

}

  async function getCompanies(){
    const getResponse = await fetch("http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2");
    const companies = await getResponse.json();
    // console.log(getResponse, companies);
    companies.forEach(function(element) {
      let address = (element.address.country + ', ' + element.address.state + ', ' + element.address.city + ', ' + element.address.street + ', ' + element.address.house)
      // console.log(element.company, address, element.balance, element.registered);
      row = `
        <td>${element.company}</td>
        <td>${address}</td>
        <td onclick="showBalance('${element.balance}')">some text</td>      
        <td onclick="showRegistered('${element.registered}')">some text</td>
      `;
      tbody.innerHTML += row;
    });

    return companies;
  }
  // //
  let Company = getCompanies();
    // Company.then( data => console.log('Final Company:', data));
