
function checkIfUserExists() {
    let usersArray = JSON.parse(localStorage.getItem("usersArray"));
    let name = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (usersArray !== "404") {
        let currentUserCorrect = usersArray.find(user => {
            return user.username === name && user.password === password;
        })
        if (currentUserCorrect) {
            moveToContent();
            let currentUser = currentUserCorrect.username;
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
            return "Welcome " + name;
        }
        else {
            return "Invalid username or password";
        }

    } else {
        return "something went wrong";
    }
}
class user {
    constructor(username, password, content) {
        this.username = username;
        this.password = password;
        this.content = content;
    }
}


function setNewUser() {
    let inputUsername = document.getElementById("username").value;
    let inputPassword = document.getElementById("password").value;
    const newUser = new user(inputUsername, inputPassword, []);
    let usersArray = JSON.parse(localStorage.getItem("usersArray"));
    if (usersArray === null) {
        localStorage.setItem("usersArray", JSON.stringify([newUser]));
        return "You're signed up!";
    } else {
        let checkUsernameExists = usersArray.find(user => {
            if (user.username === inputUsername) {
                return "This username exists";
            }

        })
        if (checkUsernameExists) { return "This username exists"; }
        localStorage.setItem("usersArray", JSON.stringify([...usersArray, newUser]));
        return "You're signed up!";
    }
}


class contact {
    constructor(name, phoneNumber) {
        this.name = name;
        this.phoneNumber = phoneNumber;

    }
}

let userObj = getRightUser();


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


function updateContact() {
    let name = document.getElementById("name").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let currentUserName = JSON.parse(localStorage.getItem("currentUser"));
    let usersArray = JSON.parse(localStorage.getItem("usersArray"));
    const newContact = new contact(name, phoneNumber);
    userObj.content.push(newContact);

    let newUsersArray = usersArray.map(user => {
        if (user.username === currentUserName) {
            return userObj;
        }
        return user;
    })
    localStorage.setItem("usersArray", JSON.stringify(newUsersArray));
    displayContact();
    

}




function displayContact() {
    const contactsArr = userObj.content;
    console.log('contactsArr: ', contactsArr);
    const wholeTable = document.getElementById("contactsTable");
    const table = document.getElementById("contacts");
    wholeTable.appendChild(table);
    table.removeChild;

    for (let i = 0; i < contactsArr.length; i++) {
        console.log("hi");
        console.log('contactsArr[i].name: ', contactsArr[i].name);
        const row = document.createElement("tr");
        const namesItems = document.createElement("td");
        const phoneItems = document.createElement("td");
        namesItems.textContent = contactsArr[i].name;
        phoneItems.textContent = contactsArr[i].phoneNumber;
        row.appendChild(namesItems);
        row.appendChild(phoneItems);

        table.appendChild(row);
    }

}
