function myServer(obj) {
    switch (obj.method) {
        case "GET":
            if (obj.url === "yakirotem/api/user/contacts") {

            }
            else if (obj.url === "yakirotem/api/users") {
                getUsers();
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

function getUsers(){
    console.log('JSON.parse(localStorage.getItem("usersArray"));: ', JSON.parse(localStorage.getItem("usersArray")));     
return JSON.parse(localStorage.getItem("usersArray"));

}

myServer({method:"GET", url:"yakirotem/api/users"});

