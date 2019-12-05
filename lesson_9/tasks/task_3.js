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
    constructor(_id, isActive, title, about, likes, created_at) {
        this._id = _id;
        this.isActive = isActive;
        this.title = title;
        this.about = about;
        this.likes = likes;
        this.created_at = created_at;

        this.container = null;//
        this.addLike = this.addLike.bind(this);//

        myObj.push(this);
    }

    addLike() {
        this.likes++;
        this.updateLikes();
    }
    
    updateLikes() {
        this.container.querySelector('span').innerHTML = this.likes;//
    }

    render() {
        let node = document.createElement('div');
        node.innerHTML = `
          <h2>${this.title}</h2>
          <p>${this.about}</p>
          <p>Likes:<span>${this.likes}</span></p>
          <button type="submit" id="addLikeBtn">Add Like</button>
        `;

        node.querySelector('button').addEventListener('click', this.addLike)//


    document.body.appendChild(node);
    this.container = node;//
    }
    
}
let render = fetch('http://www.json-generator.com/api/json/get/cgCRXqNTtu?indent=2')
.then(
  (res) => {
    // console.log(res);
    return res.json();
  }
)
.then( 
  (res) => {
    res.forEach( item => {
        let post = new Post(item._id, item.isActive, item.title, item.about, 0, item.created_at);
        post.render();
        myObj.push(post);
    })
  }
)

// let localPosts = localStorage.getItem('posts');
// myObj = localPosts !== null ? JSON.parse(localPosts).map( item => new Post(1, true, item.title, item.about, 0, new Date()) ) : [];

document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('title')
    const about = document.getElementById('about')
    const addLikeBtn  = document.getElementById('addLikeBtn')
    const sendBtn = document.getElementById('sendBtn')
  
    sendBtn.addEventListener('click', (e) => {
        
      let titleVal = title.value;
      let aboutVal = about.value;
      console.log(titleVal, aboutVal);
      
  
      new Post(1, true, item.title, item.about, 0, new Date()).render();
      localStorage.setItem('posts', JSON.stringify(myObj) );
    })
  
  })

  
//   myObj.map( item => item.render() );

  console.log( myObj );
