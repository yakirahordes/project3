function getUsers() {
    return JSON.parse(localStorage.getItem("usersArray"));  
}

function setNewUser() {
    let usersArray = JSON.parse(localStorage.getItem("usersArray"));
    if (usersArray === null) {
         localStorage.setItem("usersArray", JSON.stringify([newUser]));

    } else {
         localStorage.setItem("usersArray", JSON.stringify([...usersArray, newUser]));
    }
    return "you signed up!";
}

