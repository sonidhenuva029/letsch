function addUser() {
    var username = document.getElementById("username_input").value;
    localStorage.setItem("user", username);
    window.location = "kwitter_room.html"; 
}