function onSubmit(event){
    event.preventDefault();
    let name=document.getElementById("username").value;
    
    let password=document.getElementById("password").value;
   
    let users = JSON.parse(localStorage.getItem("users"));
   
    let currentUserCorrect=usersArray.find(user => {
    
        return user.username===name && user.password===password
    })

   

    if(currentUserCorrect)
        {
            moveToContent();
            // document.getElementById("container").innerHTML = "";
            // var gameContent = document.getElementsByTagName("template")[2].content.cloneNode(true);
            // var container = document.getElementById("container");
            // container.appendChild(gameContent);
        }
    else
    {
        alert("Invalid username or password");
    }
    //לבדוק את זה 
    localStorage.setItem("currentUser", JSON.stringify( currentUserCorrect))
}






function onSubmit(event){
    event.preventDefault();
    let name=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    let users = JSON.parse(localStorage.getItem("usersArray"));
    let currentUserCorrect=usersArray.find(user => {
        return user.username===name && user.password===password
    })
    if(currentUserCorrect)
        {
            moveToContent();
            // document.getElementById("container").innerHTML = "";
            // var gameContent = document.getElementsByTagName("template")[2].content.cloneNode(true);
            // var container = document.getElementById("container");
            // container.appendChild(gameContent);
        }
        else
        {
            alert("Invalid username or password");
        } 
         //לבדוק את זה 
        localStorage.setItem("currentUser", JSON.stringify( currentUser))
    }





