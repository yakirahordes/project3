

function onSubmit(event){
    event.preventDefault();
    const onSubmitObj = new requests();
    onSubmitObj.onload = function() {
        alert(onSubmitObj.responseText);
    }
    onSubmitObj.open("GET", "yakirotem/api/users");
    onSubmitObj.send();
}
    
