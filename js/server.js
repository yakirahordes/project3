function myServer(obj) {
    switch (obj.method) {
        case "GET":
            if (obj.url === "yakirotem/api/user/contacts") {
                
            }
            else if (obj.url === "yakirotem/api/users") {
                 return checkIfUserExists();
                
            }
            else {
                return "404"
            }
            break;
        case "POST":
            if (obj.url === "yakirotem/api/newUser") {
                return setNewUser();
            }
            else if (obj.url === "") {

            }
            else {
                return "404"
            }
            break;
        
    }
}







