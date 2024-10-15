function checkIfUserExists(addedUser) {
    let usersArray = JSON.parse(localStorage.getItem("usersArray"));
        let currentUserCorrect = usersArray.find(user => {
            return user.username === addedUser.username && user.password === addedUser.password;
        })
        if (currentUserCorrect) {
            moveToContent();
            let currentUser = currentUserCorrect.username;
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
            return "Welcome " + currentUser;
        }
        else {
            return "Invalid username or password";
        }

    }


function setNewUser(newUser) {
    console.log('newUser: ', newUser);
    let usersArray = JSON.parse(localStorage.getItem("usersArray"));
    if (usersArray === null) {
        localStorage.setItem("usersArray", JSON.stringify([newUser]));
        return "You're signed up! please log in";
    } else {
        let checkUsernameExists = usersArray.find(user => {

            if (user.username === newUser.username) {

                return "This username exists";
            }
        })
        if (checkUsernameExists) { return "This username exists"; }
        localStorage.setItem("usersArray", JSON.stringify([...usersArray, newUser]));
        return "You're signed up! please log in";
    }
}


function getRightUser() {
    let currentUserName = JSON.parse(localStorage.getItem("currentUser"));
    console.log('currentUser: ', currentUserName);
    let usersArray = JSON.parse(localStorage.getItem("usersArray"));
    console.log('usersArray: ', usersArray);
    let rightUser = usersArray.find(user => {
        if (user.username === currentUserName) {
            return user;
        }
    })
    return rightUser;
}


function updateContact(newContact) {
    let userObj = getRightUser();
    let currentUserName = JSON.parse(localStorage.getItem("currentUser"));
    let usersArray = JSON.parse(localStorage.getItem("usersArray"));
    userObj.content.push(newContact);

    let newUsersArray = usersArray.map(user => {
        if (user.username === currentUserName) {
            return userObj;
        }
        return user;
    })
    localStorage.setItem("usersArray", JSON.stringify(newUsersArray));
    return newContact;


}




function displayContact() {
    let userObj = getRightUser();
    const contactsArr = userObj.content;
    return contactsArr;
}