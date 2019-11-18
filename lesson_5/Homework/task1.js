/*

  Задание:

    1. Написать конструктор объекта комментария который принимает 3 аргумента
    ( имя, текст сообщения, ссылка на аватаку);

    {
      name: '',
      text: '',
      avatarUrl: '...jpg'
      likes: 0
    }
      + Создать прототип, в котором будет содержаться ссылка на картинку по умлочанию
      + В прототипе должен быть метод который увеличивает счетик лайков

    var myComment1 = new Comment(...);

    2. Создать массив из 4х комментариев.
    var CommentsArray = [myComment1, myComment2...]

    3. Созадть функцию конструктор, которая принимает массив коментариев.
      И выводит каждый из них на страничку.

    <div id="CommentsFeed"></div>


*/
var Comment = function (name, text, avatarUrl) {

  this.name = name;
  this.text = text;
  this.avatarUrl = avatarUrl;
  this.likes = 0;
}

var myComment1 = new Comment('Comment1','Comment1','123.jpg');
var myComment2 = new Comment('Comment2','Comment2','123.jpg');
var myComment3 = new Comment('Comment3','Comment3','123.jpg');
var myComment4 = new Comment('Comment4','Comment4','123.jpg');
// console.log(comment1);

Comment.prototype = {
  avatarUrl: 'https://images.unsplash.com/photo-1527555197883-98e27ca0c1ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80/',
  addLike: function() {
    this.likes++;
  }
}

var CommentsArray = [myComment1, myComment2, myComment3, myComment4];

// console.log(CommentsArray);


var arrayMass = function (CommentsArray) {
  var div = document.createElement('div');
  div.id = 'CommentsFeed';

  CommentsArray.forEach(function(element){

    var divChild = document.createElement('div');
    divChild.id = element.name;
    divChild.innerText = element.text;
    // var img = document.createElement('img');
    // img.src = Comment.avatarUrl;
    // divChild.appendChild(img);
    div.appendChild(divChild);
    

  })
  document.body.appendChild(div);
  console.log(div);
}

arrayMass(CommentsArray);


