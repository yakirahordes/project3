function myServer(obj) {
    switch (obj.method) {
        case "GET":
            if (obj.url === "yakirotem/api/user/contacts") {

            }
            else if (obj.url === "yakirotem/api/users") {
                return getUsers();
            }
            else {
                return "404"
            }
        case "POST":
            if (obj.url === "yakirotem/api/newUser") {

            }
            else if (obj.url === "") {

            }
            else {
                return "404"
            }
        
    }
}

