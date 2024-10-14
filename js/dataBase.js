


function checkIfUserExists(){
    let usersArray =JSON.parse(localStorage.getItem("usersArray")); 
 
        let name=document.getElementById("username").value;
        let password=document.getElementById("password").value;
        if(usersArray !== "404") {
            debugger
        let currentUserCorrect= usersArray.find(user => {
            return user.username===name && user.password===password;   
        })
        if(currentUserCorrect)
            {
                moveToContent();
                
                // console.log(currentUserCorrect);
                let currentUser = currentUserCorrect.username;
                localStorage.setItem("currentUser", JSON.stringify(currentUser));
                return "Welcome "+ name;
            }
            else
            {
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

