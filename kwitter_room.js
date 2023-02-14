
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBr7FI7XnhpDfRidq4Sy3nvakQNqmJ5Pjc",
    authDomain: "kwitter-88581.firebaseapp.com",
    databaseURL: "https://kwitter-88581-default-rtdb.firebaseio.com",
    projectId: "kwitter-88581",
    storageBucket: "kwitter-88581.appspot.com",
    messagingSenderId: "408904146438",
    appId: "1:408904146438:web:65eaa9197d064382b66d87",
    measurementId: "G-HF1ZN9P0BW"
};
firebase.initializeApp(firebaseConfig);

function adding_Room() {
    newRoom = document.getElementById("add_room").value;
    localStorage.setItem("Room Name", newRoom);
    console.log(newRoom);
    firebase.database().ref("/").child(newRoom).update({
          room: "adding the rooms"
    });
    window.location = "kPage.html";
}

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("Room Name", name);
    window.location = "kPage.html";
}


var username = localStorage.getItem("user");
document.getElementById("username").innerHTML = username;

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code
                console.log(Room_names);
                var row = "<div id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'>" + Room_names + "</div>";
                document.getElementById("output").innerHTML = row;
                

                //End code
          });
    });
}
getData();

function logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("Room Name");
    window.location = "index.html";

}