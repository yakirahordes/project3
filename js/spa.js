function moveToLogin() {
    document.getElementById("container").innerHTML = "";
    var gameContent = document.getElementsByTagName("template")[0].content.cloneNode(true);
    var container = document.getElementById("container");
    container.appendChild(gameContent);
}

function moveToSignup() {
    document.getElementById("container").innerHTML = "";
    var gameContent = document.getElementsByTagName("template")[1].content.cloneNode(true);
    var container = document.getElementById("container");
    container.appendChild(gameContent);
}

function moveToContent() {
    document.getElementById("container").innerHTML = "";
    var gameContent = document.getElementsByTagName("template")[2].content.cloneNode(true);
    var container = document.getElementById("container");
    container.appendChild(gameContent);
}
