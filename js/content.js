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
    let name=document.getElementById("name").value;
    let phoneNumber=document.getElementById("phoneNumber").value;

    const newContact =new contact(name, phoneNumber);
    userObj.content.push(newContact);
    setContact(userObj);
    
 }

const contactsArr = userObj.content;
 function createRowForContact(contactsArr) {
    const table = document.getElementById("contactsTable");
    const row = document.createElement("tr");
    for(let i = 0; i < contactsArr.length; i++) {
       let contactRow = row.append("<td>" + contactsArr[i].name + "</td>" + "<td>" + contactsArr[i].phoneNumber + "</td>");
       table.appendChild("contactRow"); 
    }
    
 }




// let arr =[1,2,3,4,5];
// function createDivForItems(arr) {
//     for(let i = 0; i <arr.length; i++) {
//     const div = document.createElement("div");
//     div.innerText = arr[i];
//     document.getElementById("contacts").appendChild(div);
//     }
// }


