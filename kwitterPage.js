
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


function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
          document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                      firebase_message_id = childKey;
                      message_data = childData;
                      
                }
          });
    });
}
getData();
var roomname = localStorage.getItem("Room Name");
var usernames = localStorage.getItem("user")
function send() {
    var message = document.getElementById("message_input").value;

    firebase.database().ref(roomname).push({
          like: 0,
          message: message,
          name: usernames
    });
    document.getElementById("message_input").value = " "
};