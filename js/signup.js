


function onRegister(event) {
    event.preventDefault();
    const addNewUser = new requests();
    addNewUser.onload = function() {
    alert(addNewUser.responseText);
}
addNewUser.open("POST", "yakirotem/api/newUser");
addNewUser.send();
}











