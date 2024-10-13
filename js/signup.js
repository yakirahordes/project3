let inputUsername = document.getElementById("username").value;
let inputPassword = document.getElementById("password").value;

class user {
    constructor (username, password, content) {
        this.username = username;
        this.password = password;
        this.content = content;
    }
}

const newUser = new user(inputUsername, inputPassword, []);

function onRegister(event) {
    event.preventDefault();
    if (usersArray === null) {
        localStorage.setItem("usersArray", JSON.stringify([newUser]));
    } else {
        let checkUsernameExists = usersArray.find(user => {
            if (user.username === inputUsername) {
                alert("This username exists");
            }
        })
        localStorage.setItem("usersArray", JSON.stringify([...usersArray, newUser]));
        alert("You're signed up!")
    }
}

