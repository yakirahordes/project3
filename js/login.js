function onSubmit(event) {
    event.preventDefault();
    let name = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let addedUser = {
        "username": name,
        "password": password
    }
    const onSubmitObj = new requests();
    onSubmitObj.onload = function () {
        alert(onSubmitObj.responseText);
    }
    onSubmitObj.open("GET", "yakirotem/api/users");
    onSubmitObj.send(addedUser);

}


