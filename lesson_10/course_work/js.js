let login = document.getElementById('login');
let myForm = document.getElementById('myForm');

let myObj = [];
class NewUser{
    constructor(id, uname, psw, likes, created_at) {
        this._id = id;
        this.uname = uname;
        this.psw = psw;
        this.likes = likes;
        this.created_at = created_at;
    }

    renderObj() {
        
    }
}

myForm.addEventListener('click', function(event) {
    event.preventDefault();
})

login.addEventListener('click', function() {
    let uname = document.getElementById('uname').value;
    let psw = document.getElementById('psw').value;
    let user = new NewUser(1, uname, psw, Math.random()*10 ,new Date());
    myObj.push(user);
    console.log(user, myObj);
    
})


    
    