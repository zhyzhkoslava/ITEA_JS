/*

    Задание 3:


    Написать класс Posts в котором есть данные:

    _id
    isActive,
    title,
    about,
    likes,
    created_at

    У класса должен быть метод addLike и render.

    Нужно сделать так чтобы:
    - После добавления поста, данные о нем записываются в localStorage.
    - После перезагрузки страницы, данные должны сохраниться.
    - Можно было прездагрузить данные в данный модуль: http://www.json-generator.com/api/json/get/cgCRXqNTtu?indent=2

*/
let myObj = [];
class Post{
    constructor(title, about) {
        this._id = 1;
        this.isActive = false;
        this.title = title;
        this.about = about;
        this.likes = 0;
        this.created_at = new Date();

        this.container = null;
        this.addLike = this.addLike.bind(this);

        myObj.push(this);
    }

    addLike() {
        this.likes++;
        this.updateLikes();
    }
    
    updateLikes() {
        this.container.querySelector('span').innerHTML = this.likes;
    }

    render() {
        let node = document.createElement('div');
        node.innerHTML = `
          <h2>${this.title}</h2>
          <p>${this.about}</p>
          <p>Likes:<span>${this.likes}</span></p>
          <button type="submit" id="addLikeBtn">Add Like</button>
        `;

        node.querySelector('button').addEventListener('click', this.addLike)


    document.body.appendChild(node);
    }
    
}

let localPosts = localStorage.getItem('posts');
myObj = localPosts !== null ? JSON.parse(localPosts).map( item => new Post(item.title, item.about) ) : [];
// console.log('local users or empty array:', myObj);

document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('title')
    const about = document.getElementById('about')
    const addLikeBtn  = document.getElementById('addLikeBtn')
    const sendBtn = document.getElementById('sendBtn')

    // addLikeBtn.addEventListener('click', (e) => {
    //     addLike()
    //     alert('Like added successfully!')
    // })
  
    sendBtn.addEventListener('click', (e) => {
        
      let titleVal = title.value;
      let aboutVal = about.value;
      console.log(titleVal, aboutVal);
      
  
      new Post(titleVal, aboutVal).render();
      localStorage.setItem('posts', JSON.stringify(myObj) );
    })
  
  })

  
  myObj.map( item => item.render() );

  console.log( myObj );
