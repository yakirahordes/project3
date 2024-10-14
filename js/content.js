
function saveNewContact(event) {
    event.preventDefault();
    const addNewContact = new requests();
    addNewContact.onload = function () {
        alert(addNewContact.responseText);
    }
    addNewContact.open("POST", "yakirotem/api/contacts/newContact");
    addNewContact.send();
}