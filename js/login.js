
function onSubmit(event){
    event.preventDefault();
    let name=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    let usersArray = JSON.parse(localStorage.getItem("usersArray"));
    let currentUserCorrect=usersArray.find(user => {
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
         //לבדוק את זה 
        //localStorage.setItem("currentUser", JSON.stringify( currentUser))
    }





