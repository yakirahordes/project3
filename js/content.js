
class contact {
    constructor(name, phoneNumber) {
        this.name = name;
        this.phoneNumber = phoneNumber;

    }
}


function getContact() {
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


let userObj = getContact();

function saveNewContact(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    const newContact = new contact(name, phoneNumber);
    userObj.content.push(newContact);
    setContact(userObj);

}

function setContact(userObj) {
    let currentUserName = JSON.parse(localStorage.getItem("currentUser"));
    let usersArray = JSON.parse(localStorage.getItem("usersArray"));
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
    const wholeTable=document.getElementById("contactsTable");
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
