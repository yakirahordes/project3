class  contact {
    constructor ( name, phoneNumber) {
        this. name =  name;
        this.phoneNumber = phoneNumber;
       
    }
}


function getContact() {
    let currentUserName = JSON.parse(localStorage.getItem("currentUser"));
    let usersArray = JSON.parse(localStorage.getItem("usersArray"));
    let rightUser = usersArray.find(user => {
        if( user.username===currentUserName){
            return user;
        }
    })
    console.log('rightUser: ', rightUser);
   return rightUser;
   
}




















// function getContact(){
//     let currentUserName= JSON.parse(localStorage.getItem("currentUser"));
//     let rightUser =usersArray.find(user => {
//         console.log('usersArray: ', usersArray);
//         if( user.username===currentUserName){
//             return user.content;
//         }
//     })

// }
// console.log(getContact());


// function getCurrentUser(){
//     return  JSON.parse(localStorage.getItem("currentUser"));
// }

// function setContact(contactArray){
// const cur = getCurrentUser();
// cur.content = contactArray;
//      localStorage.setItem("currentUser ",JSON.stringify(cur));
//     }
    
// let contactArray=getContact();
// function saveNewContact(event){
//     event.preventDefault();
//     console.log("hi");
//     let name=document.getElementById("name").value;
//     let phoneNumber=document.getElementById("phoneNumber").value;

//     const newContact =new contact(name, phoneNumber);
//     console.log(' newContent: ',  newContact);
   
   
    
//     contactArray.push(newContact);
//     console.log('contactArray: ', contactArray);
//     setContact(contactArray);
    
// }


// let arr =[1,2,3,4,5];
// function createDivForItems(arr) {
//     for(let i = 0; i <arr.length; i++) {
//     const div = document.createElement("div");
//     div.innerText = arr[i];
//     document.getElementById("contacts").appendChild(div);
//     }
// }


