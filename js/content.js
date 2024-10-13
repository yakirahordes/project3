class  contact {
    constructor ( name, phoneNumber) {
        this. name =  name;
        this.phoneNumber = phoneNumber;
       
    }
}




function getContact(){
    let currentUserName= JSON.parse(localStorage.getItem("currentUser"));
    let rightUser =usersArray.find(user => {
        console.log('usersArray: ', usersArray);
        if( user.username===currentUserName){
            return user.content;
        }
    })

}
console.log(getContact());


function getCurrentUser(){
    return  JSON.parse(localStorage.getItem("currentUser"));
}

function setContact(contactArray){
const cur = getCurrentUser();
cur.content = contactArray;
     localStorage.setItem("currentUser ",JSON.stringify(cur));

    
    }
    
let contactArray=getContact();
function saveNewContact(event){
    event.preventDefault();
    console.log("hi");
    let name=document.getElementById("name").value;
    let phoneNumber=document.getElementById("phoneNumber").value;

    const newContact =new contact(name, phoneNumber);
    console.log(' newContent: ',  newContact);
   
   
    
    contactArray.push(newContact);
    console.log('contactArray: ', contactArray);
    setContact(contactArray);
    
}