function getUsers() {
    return JSON.parse(localStorage.getItem("usersArray"));
}

// class user {
//     constructor(username, password, content) {
//         this.username = username;
//         this.password = password;
//         this.content = content;
//     }
// }

// function setNewUser() {
//         let inputUsername = document.getElementById("username").value;
//         let inputPassword = document.getElementById("password").value;
//         let usersArray = JSON.parse(localStorage.getItem("usersArray"));
//         const newUser = new user(inputUsername, inputPassword, []);
//         let checkUsernameExists = usersArray.find(user => {
//             if(user.username === inputUsername && usersArray !== null) {
//                 return "This username exists";
//             }

//     if (usersArray === null) {
//          localStorage.setItem("usersArray", JSON.stringify([newUser]));

//     } else {
//          localStorage.setItem("usersArray", JSON.stringify([...usersArray, newUser]));
//     }
//     return "you signed up!";
// }



function setNewUser() {
    let usersArray = JSON.parse(localStorage.getItem("usersArray"));
    if (usersArray === null) {
        localStorage.setItem("usersArray", JSON.stringify([newUser]));
    } else {
        let checkUsernameExists = usersArray.find(user => {
            if (user.username === inputUsername) {
                return "This username exists";
            }
        })
        // if (checkUsernameExists) { return; }
        localStorage.setItem("usersArray", JSON.stringify([...usersArray, newUser]));
        return "You're signed up!";
    }
}