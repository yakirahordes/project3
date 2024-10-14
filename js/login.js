


function onSubmit(event){
    event.preventDefault();
    const onSubmitObj = new requests();
    onSubmitObj.onload = function() {
        let usersArray = onSubmitObj.responseText;
        let name=document.getElementById("username").value;
        let password=document.getElementById("password").value;
        if(usersArray !== "404") {
        let currentUserCorrect= usersArray.find(user => {
            return user.username===name && user.password===password;   
        })
        if(currentUserCorrect)
            {
                moveToContent();
                alert("Welcome "+ name);
                console.log(currentUserCorrect);
            }
            else
            {
                alert("Invalid username or password");
            }   
            let currentUser = currentUserCorrect.username;
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
        } else {
            alert("something went wrong");
        }
        
    }
    onSubmitObj.open("GET", "yakirotem/api/users");
    onSubmitObj.send();

    }
   

    