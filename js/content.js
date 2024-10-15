class contact {
    constructor(name, phoneNumber) {
        this.name = name;
        this.phoneNumber = phoneNumber;
    }
}

function saveNewContact(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    const newContact = new contact(name, phoneNumber);
    const addNewContact = new requests();
    addNewContact.onload = function () {
        let newContact = addNewContact.responseText;
        const table = document.getElementById("contactsTable");
        const row = document.createElement("tr");
        const namesItems = document.createElement("td");
        const phoneItems = document.createElement("td");
        namesItems.textContent = newContact.name;
        phoneItems.textContent = newContact.phoneNumber;
        row.appendChild(namesItems);
        row.appendChild(phoneItems);

        table.appendChild(row);
    }
    addNewContact.open("POST", "yakirotem/api/contacts/newContact");
    addNewContact.send(newContact);

}

function loadContact() {
    const showContacts = new requests();
    showContacts.onload = function () {
        let contactsArr = showContacts.responseText;
        const table = document.getElementById("contactsTable");
        for (let i = 0; i < contactsArr.length; i++) {
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
    showContacts.open("GET", "yakirotem/api/user/contacts");
    showContacts.send();
}

loadContact()