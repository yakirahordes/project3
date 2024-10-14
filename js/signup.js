


class user {
    constructor(username, password, content) {
        this.username = username;
        this.password = password;
        this.content = content;
    }
}



function onRegister(event) {
    event.preventDefault();
    const addNewUser = new requests();
    addNewUser.onload = function() {
    let inputUsername = document.getElementById("username").value;
    let inputPassword = document.getElementById("password").value;
    const newUser = new user(inputUsername, inputPassword, []);
}
}


addNewUser.open("POST", "yakirotem/api/newUser");
addNewUser.send(newUser);

