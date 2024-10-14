

class user {
    constructor (username, password, content) {
        this.username = username;
        this.password = password;
        this.content = content;
    }
}



function onRegister(event) {
    event.preventDefault();
    let inputUsername = document.getElementById("username").value;
    let inputPassword = document.getElementById("password").value;
    let  usersArray= JSON.parse(localStorage.getItem("usersArray"));
    const newUser = new user(inputUsername, inputPassword, []);
    console.log('newUser: ', newUser);
   

    if (usersArray === null) {
        localStorage.setItem("usersArray", JSON.stringify([newUser]));
    } else {
        let checkUsernameExists = usersArray.find(user => {
            if (user.username === inputUsername) {
                alert("This username exists");
               return true
            }
        })
        if(checkUsernameExists){return;}
        localStorage.setItem("usersArray", JSON.stringify([...usersArray, newUser]));
        alert("You're signed up!")
    }
}



