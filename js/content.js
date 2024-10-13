class  contact {
    constructor ( name, phoneNumber) {
        this. name =  name;
        this.phoneNumber = phoneNumber;
       
    }
}




function getContact(){
    let currentUserName= JSON.parse(localStorage.getItem("currentUser"));
    console.log('currentUser: ', currentUserName);
    let usersArray= JSON.parse(localStorage.getItem("usersArray"));
    console.log('usersArray: ', usersArray);
    let rightUser =usersArray.find(user => {
        if( user.username===currentUserName){
            return user;
        }
    })
   return rightUser;
}



function setContact(userObj){
    let currentUserName= JSON.parse(localStorage.getItem("currentUser"));
    let usersArray= JSON.parse(localStorage.getItem("usersArray"));
    console.log('usersArray: ', usersArray);
    let newUsersArray =usersArray.map(user => {
        if( user.username===currentUserName){
            return userObj;
        }
        return user;
    })

     localStorage.setItem("usersArray",JSON.stringify(newUsersArray));

    }


    
let userObj=getContact();

function saveNewContact(event){
    event.preventDefault();
    console.log("hi");
    let name=document.getElementById("name").value;
    let phoneNumber=document.getElementById("phoneNumber").value;

    const newContact =new contact(name, phoneNumber);

    console.log(' newContent: ',  newContact);
   
   
    
    userObj.content.push(newContact);
    console.log('contactArray.content: ', userObj.content);
    console.log('contactArray: ', userObj);
    setContact(userObj);
    
}