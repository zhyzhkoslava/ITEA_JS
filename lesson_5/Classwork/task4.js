/*

  Задание "Шифр цезаря":

    https://uk.wikipedia.org/wiki/%D0%A8%D0%B8%D1%84%D1%80_%D0%A6%D0%B5%D0%B7%D0%B0%D1%80%D1%8F

    Написать функцию, которая будет принимать в себя слово и количество
    симовлов на которые нужно сделать сдвиг внутри.

    Написать функцию дешефратор которая вернет слово в изначальный вид.

    Сделать статичные функции используя bind и метод частичного
    вызова функции (каррирования), которая будет создавать и дешефровать
    слова с статично забитым шагом от одного до 5.


    const isMobile = document.innerWidth < 768;

    Например:
      encryptCesar( 3, 'Word');
      encryptCesar1(...)
      ...
      encryptCesar5(...)

      decryptCesar1(3, 'Sdwq');
      decryptCesar1(...)
      ...
      decryptCesar5(...)

      "а".charCodeAt(); // 1072
      String.fromCharCode(189, 43, 190, 61) // ½+¾

*/

var encryptCesar = function(word, symbols) {

	var output = '';
	for (var i = 0; i < word.length; i ++) {

		var c = word[i];

		if (c.match(/[a-z]/i)) {
			var code = word.charCodeAt(i);

			if ((code >= 97) && (code <= 122))
				c = String.fromCharCode(((code - 97 + symbols) % 26) + 97);

		}
		output += c;

	}
	console.log(output);

};

var decryptCesar = function(word , symbols) {

  var output = '';
	for (var i = 0; i < word.length; i ++) {

		var c = word[i];

		if (c.match(/[a-z]/i)) {
      var code = word.charCodeAt(i);
      // console.log(code);

			if ((code >= 97) && (code <= 122))
				c = String.fromCharCode(((code - 97 - symbols) % 26) + 97);

		}
		output += c;

	}
	console.log(output);
}

encryptCesar('aaa', 5);
decryptCesar('fff', 5);
