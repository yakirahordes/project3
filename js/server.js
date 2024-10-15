function myServer(obj) {
    switch (obj.method) {
        case "GET":
            if (obj.url === "yakirotem/api/user/contacts") {
                return displayContact();
            }
            else if (obj.url === "yakirotem/api/users") {
                return checkIfUserExists(obj.obj);
            }
            else {
                return "404"
            }
            break;
        case "POST":
            if (obj.url === "yakirotem/api/newUser") {
                return setNewUser(obj.obj);
            }
            else if (obj.url === "yakirotem/api/contacts/newContact") {
                return updateContact(obj.obj);

            }
            else {
                return "404"
            }
            break;

    }
}







