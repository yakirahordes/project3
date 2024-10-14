class user {
    constructor(username, password, content) {
        this.username = username;
        this.password = password;
        this.content = content;
    }
}

const onRegisterObj = new requests();

function onRegister(event) {
    event.preventDefault();
    onRegisterObj.onload = function () {
        let inputUsername = document.getElementById("username").value;
        let inputPassword = document.getElementById("password").value;
        let usersArray = onRegisterObj.responseText;
        const newUser = new user(inputUsername, inputPassword, []);
        if (usersArray !== "404") {
            let checkUsernameExists = usersArray.find(user => {
            if(user.username === inputUsername && usersArray !== null) {
                alert("This username exists");
                return true;
            } else {
                const addNewUser = new requests();
                addNewUser.onload = function() {
                    alert(addNewUser.responseText);
                }
                addNewUser.open("POST", "yakirotem/api/newUser");
                addNewUser.send();
            }
        })
           
        } else {
            alert("something went wrong");
        }
    }
}


onRegisterObj.open("GET", "yakirotem/api/users");
onRegisterObj.send(newUser);









